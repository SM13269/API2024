import {Router} from 'express';
import{getProductos,getProductosxid,postProductos,putProductos,patchProductos,deleteProductos} from '../controladores/productosCtrl.js'
import { authenticateToken } from '../middlewares/authMiddleware.js';
const router= Router()
//ruta protegida
router.get('/productos', authenticateToken,(req, res)=>{
     res.json({message:'esta es una ruta protegida', user: req.user});
})


//armar nuestras rutas
router.get('/productos',getProductos)//select
router.get('/productos/:id', getProductosxid)//select por id 
router.post('/productos',postProductos)   //insert
router.put('/productos/:id',putProductos) //update 
router.patch('/productos/:id', patchProductos) //update
router.delete('/productos/:id', deleteProductos)

export default router
