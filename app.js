/* Livereload */
const livereload = require('livereload');
const liveReloadServer = livereload.createServer();

/* Entry point */
const express = require('express')
const connectLivereload = require('connect-livereload')
const path = require('path')

const app = express()
const port = 3015

/* Archivos estaticos */
app.use(express.static(path.resolve(__dirname,'public')))

/* Archivos estaticos monitoreados */
liveReloadServer.watch(path.join(__dirname, 'public'));
app.use(connectLivereload());

/* Rutas */
app.get('/',(req,res) => res.sendFile(path.resolve(__dirname,'views','index.html')))
app.get('/login',(req,res) => res.sendFile(path.resolve(__dirname,'views','login.html')))
app.get('/register',(req,res) => res.sendFile(path.resolve(__dirname,'views','register.html')))
app.get('/detail',(req,res) => res.sendFile(path.resolve(__dirname,'views','detail.html')))

/* Funcion de actualizacion del servidor */
liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
      liveReloadServer.refresh("/");
    }, 100);
  });

/* Levantamos el servidor con app listen */
app.listen(port,function(){
    return console.log(`Se levanta el servidor en http://localhost:${port}`)
})