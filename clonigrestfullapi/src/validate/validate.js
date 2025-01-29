import ResponseError from "../error/Respon_error.js";

const Validate = async (schema, req) => {
    const result = await schema.validate(req, {abortEarly: false});

    if(result.error){
        console.log(result.error);
        throw new ResponseError(400, result.error);
    }else{
        return result.value;
    }
}

export default Validate;