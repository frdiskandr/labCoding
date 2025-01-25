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

export default { Register, Login };
