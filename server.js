const express = require('express')
const app = express()
const http = require('http').createServer(app)
const PORT = process.env.PORT || 1000

http.listen(PORT, ()=>{
    console.log(`Listning on port ${PORT}. Visit http://localhost:${PORT}/`)
})

app.use(express.static(__dirname + '/Public'))

///////////////////////////////   Home    ///////////////////////////////////////////////////
app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})
// app.get('/loginBc', (req, res)=>{
//     res.sendFile(__dirname + '/loginBc.html')
// })
// app.get('/registerBc', (req, res)=>{
//     res.sendFile(__dirname + '/registerBc.html')
// })
// app.post('/', (req, res)=>{
//     res.sendFile(__dirname + '/index.html')
// })