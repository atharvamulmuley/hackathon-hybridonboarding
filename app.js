const express = require('express')
const bodyparser = require('body-parser')
const app = express()
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
const serverIps=[]

app.get('/', function (req, res) {
  res.send('Hello World')
})
app.put('/register', function (req, res) {
    const {serverIp}= req.body
    if(!serverIp) return res.send("server ip is missing")

    serverIps.push(serverIp)
    res.send('added')
  })
  app.get('/getserviceips', function (req, res) {
    res.send(JSON.stringify(serverIps))
  })
app.listen(3000,() => {
    console.log("server is up and running on port ")
})