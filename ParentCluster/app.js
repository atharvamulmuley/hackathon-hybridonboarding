const express = require('express')
const bodyparser = require('body-parser')
const app = express()
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())
const serverIps = []

app.get('/', function (req, res) {
  res.send('Hello World')
})
app.put('/register', function (req, res) {
  const { serverIp } = req.body

  if (!serverIp) { console.log('serverIp missing from the req body'); return res.send("server ip is missing;") }
  console.log('added new ip address', serverIp)
  serverIps.push(serverIp)
  res.send('added')
})
app.get('/getserviceips', function (req, res) {
  console.log('sending all the ips')
  res.send(JSON.stringify(serverIps))
})
app.listen(3000, () => {
  console.log("server is up and running on port 3000",)
})