import { PrismaClient } from "@prisma/client"
import bcrypt, { compare } from "bcrypt"


const prisma = new PrismaClient()

const showUser = () => {
    Promise.resolve(prisma.user.findMany()).then((data) => {
        console.log(data);
    }).catch((error) => {
        console.log(error);
    })
}

const generateUser = async () => {
    for(let i = 1; i <= 1000; i++){
        const user = {
            username : `user${i}`,
            password : `password${i}`,
            name : `name${i}`
        }
        try {
            await prisma.user.create({data: user})
        }catch(error){
            console.error(error)
        }finally{
            console.log("success")
        }
    }
}

const deleteUser = async () => {
    try{
        await prisma.user.deleteMany();
        console.log("success")
    }catch(error){
        console.error(error)
    }
}

const login = async (user) => {
    const result = await prisma.user.findMany({
        where: {
            username : user.username
        }
    })
    console.log(result)

    const validate = await bcrypt.compare(user.password, result[0].password)

    if(validate){
        console.log("login success")
    }else{
        console.log("failed")
    }
}

const generateContact = async (idUser) => {
    for (let i = 0; i < 10; i++){
        const contact = {
            name : `contact${i}`,
            number: `number${i}`,
            userId : idUser
        }
        try {
            await prisma.contact.create({data: contact})
        }catch(error){
            console.error(error)
        }
    }
}

await prisma.user.deleteMany();