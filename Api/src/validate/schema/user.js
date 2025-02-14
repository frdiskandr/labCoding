import yup from "yup";

const UserSchema = yup.object({
    username: yup.string().required({ message: "Username is required" }),
    password: yup.string().required(),
});

export default UserSchema;

