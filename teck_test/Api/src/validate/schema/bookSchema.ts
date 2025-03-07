import yup from "yup"

const bookSchema = yup.object().shape({
  code: yup.string().required({ message: "code is required" }),
  title: yup.string().required({ message: "title is required" }),
  author: yup.string().required({ message: "author is required" }),
  stock: yup.number().default(0),
})

export default bookSchema