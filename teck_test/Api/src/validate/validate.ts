import { AnyObjectSchema } from 'yup'

const Validate = async (schema: AnyObjectSchema, req: any) => {
  const result = await schema.validate(req);
  if (result.error) {
    return result.error.details[0].message;
  }
  return result;
}
export default Validate;