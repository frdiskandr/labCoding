import ResponseError from "../error/errorHandle.js";

const ErrorMiddleware = (err, req, res, next) => {
    if(!err){
        next();
        return
    }
    if (err instanceof ResponseError) {
        return res.status(err.status).json({ message: err.message }).end();
    }else{
        return res.status(500).json({ message: err.message }).end(); 
    }
}

export default ErrorMiddleware;