const express = require("express");
const app = express();
const index_pelicula=require("./router/rutas_pelicula");
const connection=require("./config/conexion");
const cors = require('cors');
app.use(cors());
//ruteo de APIS
app.use('/',index_pelicula);

app.get("/hola",(req,res)=>{
    var datos=req.query;
    res.json({mensaje:"Hola "+ datos.nombre});
});
app.get("/suma",(req,res)=>{
    console.log(req.query);
    var datos=req.query;
    var suma = Number(datos.n1) + Number(datos.n2);
    res.json({mensaje:"La respuesta es: "+ suma});
});
app.get("/resta",(req,res)=>{
    console.log(req.query);
    var datos=req.query;
    var resta = Number(datos.n1) - Number(datos.n2);
    res.json({mensaje:"La respuesta es: " + resta});
});
app.get("/multiplicacion",(req,res)=>{
    console.log(req.query);
    var datos=req.query;
    var multiplicacion = Number(datos.n1) * Number(datos.n2);
    res.json({mensaje:"La respuesta es: "+ multiplicacion});
});
app.get("/division",(req,res)=>{
    console.log(req.query);
    var datos=req.query;
    var division = Number(datos.n1) / Number(datos.n2);
    res.json({mensaje:"La respuesta es: "+ division});
});
app.listen(process.env.PORT ||8000,()=>{
    console.log("Servicio iniciado")
});