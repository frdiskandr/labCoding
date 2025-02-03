const Validate = async (schema, req) => {
    const result = schema.validate(req);
    if (result.error) {
        throw new Error(result.error.details[0].message);
    }
    return result.value
}

export default Validate;