import Fastify from 'fastify'
import cors from "@fastify/cors"
import formBody from "@fastify/formbody"
import { userRoutes } from './routes/UserRoutes.js'

const fastify = Fastify({
  logger: true
})

fastify.register(cors,{origin:"*"})
fastify.register(formBody)

//RUTAS
fastify.register(userRoutes,{prefix:"/usuarios"})

const start = async () => {
  try {
    await fastify.listen({ port: 4000, host:"0.0.0.0"})
    console.log("escuchando por el puero 4000");
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()