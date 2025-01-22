import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getProduct(req, res) {
    const products = await prisma.product.findMany();
    res.json({ message: 'success', status: 200, data: products })
};

async function createProduct(req, res) {
    try{
        const Create = await prisma.product.create({
            data: {
              ...req.body
            }
        })
        res.json({ message: 'created', data: Create}).status(201);
    }catch(error){
        res.status(400).json({ message: 'error', error })
    }
};

async function getProductById(req, res) {
    try{
        const id = Number(req.params.id)
        const product = await prisma.product.findUnique({ where: { id: id } });
        res.json({ message: "success", data: product })
    }catch(error){
        res.status(400).json({ message: 'error', error })
    }
}

async function updateProductById(req, res) {
    try{
        const id = Number(req.param.id);
        const newData = await prisma.product.update({
            where:{
                id: id,},
                data: {
                    ...req.body
                }
        })
        res.json({ message: 'seccess update', data: newData })
    }catch(error){
        res.status(400).json({ message: 'error', error })
    }
}

async function deleteProductById(req, res) {
    try{
        const id = Number( req.param.id);
        await prisma.product.delete({ where: { id: id } });
        res.json({ message: "success delete", data: id })
    }catch(error){
        res.status(400).json({ message: 'error', error })
    }
}

export { getProduct, createProduct, getProductById, updateProductById, deleteProductById };