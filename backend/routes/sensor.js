import express from "express";

import { 
    getAllDht11,
    getDhtById,
    deleteDht,
    getAllDhtMobile11,
    updateTestingDht,
} from "../controllers/Dht11.js";



const router = express.Router();
router.get('/mobile', getAllDhtMobile11);
router.get('/testing', updateTestingDht);
router.get('/', getAllDht11);
router.get('/:id', getDhtById);
router.delete('/:id', deleteDht);



export default router;