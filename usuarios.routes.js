import { Router } from 'express';
import { getUsuarios,getUsuariosxid,postUsuario,putUsuario} from '../controladores/usuariosCtrl.js';

const router= Router()
router.get('/usuarios',getUsuarios)//select
router.get('/usuarios/:id', getUsuariosxid)//select por id 
router.post('/usuarios',postUsuario) 
router.put('/usuarios/:id', putUsuario)


export default  router
