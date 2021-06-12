const express = require('express')
const io = require('socket.io')
const PORT = 3000
const app = express()
const path = require('path')

app.set("view engine", "pug")
app.set("views","views")

app.use(express.static(path.join(__dirname,"public")))

app.get('/', (req,res,next)=>{
    res.status(200).render('homepage')
})

app.listen(process.env.PORT||PORT,()=>{
    console.log(`We are live on port:${PORT}`)
})
