import { prisma } from "../app/database.js"
import { ResponseError } from "../error/response-error.js"
import { validate } from "../validate/validate.js"
import {registerUserValidate} from "../validate/user-validate.js"
import bcrypt from "bcrypt"

const Register = async (req) => {
    const user = validate(registerUserValidate, req.body)

    const countUser = await prisma.user.count({
        where: {
            username: user.username
        }
    })

    if (countUser > 0) {
        throw new ResponseError(400, "User already exists")
    } else {
        user.password = await bcrypt.hash(user.password, 10)

        const result = await prisma.user.create({
            data: user,
            select: {
                username: true,
                name: true
            }
        })
        return result
    }
}

export default {Register}