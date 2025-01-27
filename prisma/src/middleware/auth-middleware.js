import { prisma } from "../app/database.js";

const authMiddleware = async (req, res, next) => {
    const token = req.get("Authorization").toString();

    if (!token) {
        res.status(401).json({ message: "Unauthorized" }).end();
    }

    const user = await prisma.user.findFirst({
        where: {
            token: token
        }
    })

    if (!user) {
        res.status(401).json({ message: "Unauthorized" }).end();
    } 
    next();
}

export default authMiddleware;