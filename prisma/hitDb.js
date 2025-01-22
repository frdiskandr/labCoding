import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


const showUser = () => {
    Promise.resolve(prisma.user.findMany()).then((data) => {
        console.log(data);
    }).catch((error) => {
        console.log(error);
    })
}

const generateUser = async () => {
    for(let i = 10000; i <= 100000000000; i++){
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
    }catch(error){
        console.error(error)
    }
}
