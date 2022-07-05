const express=require('express')
const path=require ('path')
const app=express()
const port=3015

app.use(express.static(path.resolve(__dirname,'public')))
app.get('/',(req,res)=>res.sendFile(path.resolve(__dirname,'views','index.html')))
app.get('/login',(req,res)=>res.sendFile(path.resolve(__dirname,'views','login.html')))
app.get('/register',(req,res)=>res.sendFile(path.resolve(__dirname,'views','register.html')))

app.listen(port,function(){
    return console.log(`Servidor levantado en http://localhost:${port}`);

})