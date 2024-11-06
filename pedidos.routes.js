import {Router} from 'express';
import{getPedidos,getPedidosxid,postPedidos,putPedidos,patchPedidos,deletePedidos} from '../controladores/pedidosCtrl.js'
const router= Router()
//armar nuestras rutas

router.get('/pedidos',getPedidos)//select
router.get('/pedidos/:id', getPedidosxid)//select por id 
router.post('/pedidos',postPedidos)   //insert
router.put('/pedidos/:id',putPedidos) //update 
router.patch('/pedidos/:id', patchPedidos) //update
router.delete('/pedidos/:id', deletePedidos)

export default router
