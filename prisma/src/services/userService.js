import { prisma } from "../app/database.js";
import { ResponseError } from "../error/response-error.js";
import { validate } from "../validate/validate.js";
import userValidate from "../validate/user-validate.js";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

const Register = async (req) => {
    const user = validate(userValidate.registerUserValidate, req.body);

    const countUser = await prisma.user.count({
        where: {
            username: user.username,
        },
    });

    if (countUser > 0) {
        throw new ResponseError(400, "User already exists");
    } else {
        user.password = await bcrypt.hash(user.password, 10);

        const result = await prisma.user.create({
            data: user,
            select: {
                username: true,
                name: true,
            },
        });
        return result;
    }
};

const Login = async (req) => {
    const user = validate(userValidate.loginUserValidate, req.body);

    const serchUser = await prisma.user.findUnique({
        where: {
            username: user.username,
        },
        select: {
            username: true,
            password: true,
        },
    });

    if (!serchUser) {
        throw new ResponseError(400, "Username or password invalid");
    }

    const validatepassword = await bcrypt.compare(
        user.password,
        serchUser.password
    );

    if (!validatepassword) {
        throw new ResponseError(400, "Username or password invalid");
    }

    const token = uuid().toString();

    return await prisma.user.update({
        data: {
            token: token,
        },
        where: {
            username: user.username,
        },
        select: {
            token: true,
        },
    });
};

const getUser = async (req) => {

    const pool = validate(userValidate.getUserValidate, req.body);

    const user = await prisma.user.findUnique({
        where: {
            username: pool.username,
        },
        select:{
            username: true,
            name: true,
            password: true
        }
    });

    if (!user) {
        throw new ResponseError(404, "User not found");
    }

    return user;
};

const updateUser = async (req) => {
  const user = validate(userValidate.updateUserValidate, req.body);
  console.warn(user)

  const srcUser = await prisma.user.count({
    where:{
      username: user.username
    }
  })

  if (srcUser !== 1) {
    throw new ResponseError(400, "User not found");
  }

  const data = {}

  if(user.password){
    data.password = await bcrypt.hash(user.password, 10);
  }

  if(user.name){
    data.name = user.name;
  }


  return prisma.user.update({
    where: {
      username: user.username,
    },
    data: data
  })
}

const logOut = async (req) => {
    const username = validate(userValidate.getUserValidate, req.body);

    const user = await prisma.user.findUnique({
        where: {
            username: username.username,
        },
        select: {
            username: true,
        }
    })

    if(!user){
        throw new ResponseError(404, "User not found");
    }

    return await prisma.user.update({
        data: {
            token: null
        },
        where: {
            username: username.username
        },
        select: {
            token: true
        }
    })
}

export default { Register, Login, getUser, updateUser, logOut };
