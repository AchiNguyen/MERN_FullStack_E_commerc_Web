import express from 'express';

import { getProduct } from '../controllers/product.controller.js';
import { createProduct } from '../controllers/product.controller.js';
import { deleteProduct } from '../controllers/product.controller.js';
import { updateProduct } from '../controllers/product.controller.js';

const router = express.Router();

router.post("/", createProduct); 
router.get("/", getProduct);
router.delete("/:id", deleteProduct);
router.put("/:id", updateProduct);

export default router;