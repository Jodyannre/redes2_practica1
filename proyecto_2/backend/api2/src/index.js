const express = require('express');
const mongoose = require('mongoose');


// Conecta con la base de datos
mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://bases2:QsKjmPUVQ5RfRmFL@cluster1.5hiyabu.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//-----------------------------------


// Define el esquema para la colección
const proyectoSchema = new mongoose.Schema({
    cargo: String,
    nombre: String,
    carnet: String,
    curso: String,
    imagen: String
  });
  
  // Crea el modelo para la colección
  const Proyecto = mongoose.model('proyecto2_redes2_grupo6', proyectoSchema);
  

  

  


//------------------------------------
const app = express();

const cors = require('cors');

app.use(cors({
    origin: '*'
}));

app.get('/', function(req, res)
{
    res.send('Server on port 5000')
})


app.get('/getDevops', async (req, res) => {
    try {
      const proyectos = await Proyecto.find({});
      console.log("getDevops!")
      res.send(proyectos);
    } catch (err) {
      console.error(err);
      res.status(500).send('Error en el servidor');
    }
  });


  //getCEO
  app.get('/getCEO', async (req, res) => {
    try {
      const proyectos = await Proyecto.find({});
      console.log("getDevops!")
      res.send(proyectos);
    } catch (err) {
      console.error(err);
      res.status(500).send('Error en el servidor');
    }
  });


app.listen
(
    5000,
    ()=>console.log("Server on port 5000")
)

