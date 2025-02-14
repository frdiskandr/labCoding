import Validate from "../validate/validate.js";
import UserSchema from "../validate/schema/user.js";
import ResponseError from "../error/responseError.js";
import { v1 as uuid } from "uuid";
import prisma from "../app/database.js";

const RegisterUser = async (req) => {
    const res = await Validate(UserSchema, req);
    res.session = uuid();
    const user = await prisma.user.count({ where: { username: res.username } });
    if (user) throw new ResponseError(400, "User already exist");

    const result = await prisma.user.create({ data: res, select: { id: true, username: true, session: true } });
    return result;
};

const LoginUser = async (req) => {
    const request = await Validate(UserSchema, req);
    const user = await prisma.user.findFirst({ where: { username: request.username, password: request.password }});
    if (!user) throw new ResponseError(400, "Password or username is wrong");
    return user;
}

export default { RegisterUser, LoginUser };
