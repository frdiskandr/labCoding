const middleware = (req, res, next) => {
    if(req.method === "POST") console.log(req.body);
    next();
}

export default middleware;