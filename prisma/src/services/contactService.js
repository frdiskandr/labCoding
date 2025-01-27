import { validate } from "../validate/validate.js"
import contactValidate from "../validate/contact-validate.js"
import { prisma } from "../app/database.js"
import { ResponseError } from "../error/response-error.js"


const create = async (user, req) => {
    let contact = validate(contactValidate.createContactValidate, req.body);
    contact.userId = user
    return prisma.contact.create({
        data: contact,
        select: {
            id: true,
            name: true,
            number:true,
            userId: true
        }
    })
}

const getContactById = async (user, contactId) => {
    const contact = await prisma.contact.findFirst({
        where:{
            id: contactId,
            userId: user
        }, 
        select:{
            id: true,
            name: true,
            number: true,
            userId: true
        }
    })

    if (!contact) {
        throw new ResponseError(404, "Contact not found");
    }

    return contact
}

const getContact = async (user) => {
    return prisma.contact.findMany({
        where: {
            userId: user
        },
        select: {
            id: true,
            name: true,
            number: true,
            userId: true
        }
    })
}

const serchContact = async (user, req) => {
    const request = validate(contactValidate.serchContactValidate, req.body);
    console.warn(request)

    const filter = [];
    filter.push({
        userId: user
    })

    if(request.name){
        filter.push( {
            name:{
                contains: request.name
            }
        })
    }

    if(request.number){
        filter.push(
            {
                number:{
                    contains: request.number
                }
            }
        )}

        console.warn(filter)

    const contacts = await prisma.contact.findMany({
        userId: user,
        take: request.size,
        skip: (request.page - 1) * request.size,
    })

    const totalItems = await prisma.contact.count({
        where:{
           userId: user
        }
    })

    return {
        data: contacts,
        totalItems: totalItems,
        totalPages: Math.ceil(totalItems / request.size)
    }
}

export default { create, getContactById, getContact, serchContact }