import ResponseError from "../error/Respon_error.js";

const ErrMiddleware = (err, req, res, next) => {
    if(!err){
        next();
        return;
    } 

    if(err instanceof ResponseError){
        res.status(err.status).json({errors:err.message }).end();
    }else{
        res.status(500).json({errors: "internal server error"}).end();
    }
}
export default ErrMiddleware