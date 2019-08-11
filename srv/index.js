import express from 'express';
// import socketIO from "socket.io";
import axios from 'axios'

const cors = require('cors')

export default (app, http) => {
  app.use(express.json());
  
  app.use(cors({
    credentials: true
  }))
  
  app.post('/weather', (req, res) => {
    res.setHeader('Access-Controll-Allow-Origin', req.headers.origin)
    axios.get(`${process.env.VUE_APP_DARK_SKY_API_URL}${req.body.lat},${req.body.lon}?units=si&lang=ja`)
      .then(result=> {
        res.json({data: result.data})
      })
      .catch(error => {
        res.status(500).send({msg: `Error: ${error}`})
      })
  })
  
  // optional support for socket.io
  // 
  // let io = socketIO(http);
  // io.on("connection", client => {
  //   client.on("message", function(data) {
  //     // do something
  //   });
  //   client.emit("message", "Welcome");
  // });
}
