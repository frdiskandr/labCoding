import { PrismaClient } from "@prisma/client";
import expres from 'express'
const prisma = new PrismaClient()
const app = expres()
app.use(expres.json())

app.get('/', async (req, res) => {
    const data = await prisma.user.findMany({
        include:{
            product: true
        }
    })
    console.log(data)
    res.json(data)
})

app.post('/user', async (req, res) => {
    try{
        const request = req.body

        await prisma.user.create({
            data: request
        })
        res.send(request)
    }catch(err){
        console.log(err)
        res.status(500).send(err)
    }
})

app.delete('/user/:id', async (req, res) => {
    try{
        const data = req.body
        await prisma.user.delete({where:{id: Number(req.params.id)}})
        res.send(data)
    }catch(err){
        console.log(err)
        res.status(500).send(err)
    }
})

app.listen(3000, () => {
    console.log('Server running on port 3000')
})