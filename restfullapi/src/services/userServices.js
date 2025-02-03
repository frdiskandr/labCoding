import Validate from "../validate/validate.js";
import schema from "../validate/schema/uservalidate.js";
import ResponseError from "../error/errorHandle.js";
import prisma from "../app/database.js";

const getUserById = async (id, req) => {
    const userId = Number(id);

    const user = await prisma.user.findUnique({
        where: {
            id: userId,
        },
        select: {
            fullname: true,
            contact: true
        }
    });

    if (!user) {
        throw new ResponseError(404, "User not found");
    }

    return user;
};

const getUser = async (req) => {
    const result = await prisma.user.findMany({});
    return result;
};

const createUser = async (req) => {
    const validate = await Validate(schema.User, req.body);
    console.log(validate);

    const result = await prisma.user.create({
        data: req.body,
        select: {
            fullname: true,
            email: true,
        },
    });

    result.message = "created";

    return result;
};

const updateUser = async (id, req) => {
    const userId = Number(id);

    const user = await Validate(schema.updateUser, req.body);

    const result = await prisma.user.update({
        where: {
            id: userId,
        },
        data: user,
        select: {
            fullname: true,
            email: true,
        }
    })

    if (!result) {
        throw new ResponseError(404, "user not found");
    }

    result.message = "updated";

    return result
};

const deleteUserById = async (id) => {
    const userId = Number(id);
    
    const result = await prisma.user.delete({
        where: {
            id: userId
        }
    })

    if (!result) {
        throw new ResponseError(404, "user not found");
    }

    result.message = "deleted";
    return result
}

export default { getUserById, createUser, updateUser, deleteUserById, getUser };
