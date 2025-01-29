import Validate from "../validate/validate.js"
import userValidate from "../validate/schema/user-validate.js";
import prisma from "../app/database.js";

const ServiceRegister = async (req) => {
    const user = await Validate(userValidate, req);

    const pool = await prisma.users.findMany({
        include: {
            contacts: true
        }
    })
    return pool
}

export default ServiceRegister;