import  Express  from "express";


const server = Express();
server.use(Express.json())

server.listen(4000, () => {
  console.log('Servidor em pé em: http://localhost:4000')
})

