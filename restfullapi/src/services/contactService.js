import Validate from "../validate/validate.js";
import schema from "../validate/schema/contactValidate.js";
import prisma from "../app/database.js";

const createContact = async (req) => {

    const result = await prisma.contact.create({
        data: req.body,
        select: {
            userId: true,
            name: true,
            phone: true,
            address: true,
        },
    })

    result.message = "created";

    return result;
};

const getContactByUserId = async (id) => {
    const userId = Number(id);

    const contact = await prisma.contact.findMany({ where: { userId: userId } });
    
    if(!contact) {
        throw new ResponseError(404, "contact not found");
    }

    return contact;
};

const updateContact = async (id, req) => {
    const Id = Number(id);
    const data = await Validate(schema.updateContact, req.body);

    const result = await prisma.contact.update({
        where: { id: Id },
        data: data,
        select: {
            userId: true,
            name: true,
            phone: true,
            address: true,
        },
    });

    if(!result) {
        throw new ResponseError(404, "contact not found");
    }

    result.message = "updated";

    return result;
};

const deleteContact = async (id) => {
    const Id = Number(id);

    const result = await prisma.contact.delete({
        where: { id: Id },
    });

    if(!result) {
        throw new ResponseError(404, "contact not found");
    }    

    result.message = "deleted";

    return result;
};

export default { createContact, getContactByUserId, updateContact, deleteContact };