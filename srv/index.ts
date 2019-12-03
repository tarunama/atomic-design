import express from 'express'
import axios from 'axios'

import cors from 'cors'

export default (app: any, _: any) => {
  app.use(express.json())

  app.use(cors({
    credentials: true
  }))

  app.post('/weather', (req: any, res: any) => {
    res.setHeader('Access-Controll-Allow-Origin', req.headers.origin)
    axios.get(`${process.env.VUE_APP_DARK_SKY_API_URL}${req.body.lat},${req.body.lon}?units=si&lang=ja`)
      .then(result => {
        res.json({ data: result.data })
      })
      .catch(error => {
        res.status(500).send({ msg: `Error: ${error}` })
      })
  })
}
