import  Express  from "express";
import db from "./data/db";
import { tips } from "./controllers/controller";


const server = Express();
server.use(Express.json())

tips(server, db);

server.listen(4000, () => {
  console.log('Servidor em pé em: http://localhost:4000')
})

