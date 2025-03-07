import { Router } from "express";

const UserRouter = Router();

/**
 * @swagger
  /users:
 *   get:
 *     summary: Mendapatkan daftar pengguna
 *     description: Mengambil semua data pengguna dari database
 *     responses:
 *       200:
 *         description: Berhasil mendapatkan data pengguna
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: "John Doe"
 */
UserRouter.get("/users", (req, res) => {
  res.json([{ id: 1, name: "John Doe" }]);
});



export default UserRouter;