const AuthMiddleware = (req, res, next) => {
    const { token } = req.body;

    if (token) {
        next();
    } else {
        res.status(401).json({ message: "Unauthorized expect token" });
    }
}

export default AuthMiddleware;