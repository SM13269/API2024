import express from 'express'
import clientesRoutes from './routes/clientes.routes.js'
import usuariosRoutes from './routes/usuarios.routes.js'
import productosRoutes from './routes/productos.routes.js'
import pedidosRoutes from './routes/pedidos.routes.js'
import pedidodRoutes from './routes/pedidod.routes.js'
import authRoutes from './routes/auth.routes.js';
const app=express();

app.use(express.json());//para qe intreprete los objetos json
//rutas

app.use('/api',authRoutes);
app.use('/api', clientesRoutes)
app.use('/api', usuariosRoutes)
app.use('/api', productosRoutes)
app.use('/api', pedidosRoutes)
app.use('/api', pedidodRoutes)
app.use((req,res,next)=>{
    res.status(400).json({
        message:'Endpoint not found'
    })
})
export default app; 
