const get = (req, res, next) => {
    try{
        res.status(200).json({ message: "Hello World!" });
    }catch(e){
        next(e);
    }
}

export default {get}