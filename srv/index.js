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
    axios.get(`${process.env.VUE_APP_DARK_SKY_API_URL}${req.body.lat},${req.body.lon}`)
      .then(data => {
        res.json({data: data});
      })
  });
  
  // app.post('/bar', (req, res) => {
  //   res.json(req.body);
  // });
  // 
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
