import { Router } from 'express';
import { getProduct, createProduct, getProductById, updateProductById, deleteProductById } from '../controller/product.js';

const router = new Router();

router.get('/product', getProduct);
router.post('/product', createProduct);
router.get('/product/:id', getProductById);
router.put('/product/:id', updateProductById);
router.delete('/product/:id', deleteProductById);

export default router;