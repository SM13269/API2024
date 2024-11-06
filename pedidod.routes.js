import {Router} from 'express';
import{getPedidoDetalle,getPedidoDetallexid,postPedidoDetalle,putPedidoDetalle,patchPedidoDetalle,deletePedidoDetalle} from '../controladores/pedidodCtrl.js'
const router= Router()
//armar nuestras rutas

router.get('/pedidod',getPedidoDetalle)//select
router.get('/pedidod/:id', getPedidoDetallexid)//select por id 
router.post('/pedidod',postPedidoDetalle)   //insert
router.put('/pedidod/:id',putPedidoDetalle) //update 
router.patch('/pedidod/:id', patchPedidoDetalle) //update
router.delete('/pedidod/:id', deletePedidoDetalle)

export default router
