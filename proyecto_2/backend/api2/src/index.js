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




//-----------------------------------
// Define el esquema para la colección
const proyectoSchema2 = new mongoose.Schema({
  cargo: String,
  nombre: String,
  descripcion: String,
  imagen: String

});

// Crea el modelo para la colección
const Proyecto2 = mongoose.model('proyecto2_redes2', proyectoSchema2);



//-----------------------------------
// Define el esquema para la colección
const modelo1 = new mongoose.Schema({
  imagen: String
});

// Crea el modelo para la colección
const Proyecto3 = mongoose.model('fondos', modelo1);




//-----------------------------------
// Define el esquema para la colección
const modelo2 = new mongoose.Schema({
  titulo: String,
  descripcion: String
});

// Crea el modelo para la colección
const Proyecto4 = mongoose.model('proyecto2_redes2_noticias', modelo2);

//********************************************************************************************************************************************** */



// YA NO FUNCIONA------------------------

// Define el esquema para la colección
const proyectoSchemaZ = new mongoose.Schema({
  nombre: String,
  descripcion: String,
  imagen: String
});

// Crea el modelo para la colección
const Proyecto666 = mongoose.model('proyecto2_funcs', proyectoSchemaZ);


//----------------------
//proyecto2_finanzas
const proyectoSchemaZ1 = new mongoose.Schema({
  tipo: String,
  valor: [Number]
});

// Crea el modelo para la colección
const Proyecto6666 = mongoose.model('proyecto2_finanzas', proyectoSchemaZ1);


//----------------------
//proyecto2_finanzas
const proyectoSchemaZ12 = new mongoose.Schema({
  valor: Number
});

// Crea el modelo para la colección
const Proyecto66662 = mongoose.model('proyecto2_finanzas222', proyectoSchemaZ12);




//------------------------------------
const app = express();

const cors = require('cors');

app.use(cors({
  origin: '*'
}));





app.get('/', function (req, res) {
  res.send('Server on port 5000')
})


app.get('/getDevops', async (req, res) => {
  try {
    const proyectos = await Proyecto.find({});
    console.log("getDevops!")
    console.log(proyectos)
    res.send(proyectos);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error en el servidor');
  }
});


//getCEO
app.get('/getCEO', async (req, res) => {
  try {
    const proyectos = await Proyecto2.find({});
    console.log("getDevops!")
    console.log(proyectos)
    res.send(proyectos);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error en el servidor');
  }
});


//getWallp
app.get('/getWallp', async (req, res) => {
  try {
    const proyectos0 = await Proyecto3.find({});
    console.log("getWallp!")
    console.log(proyectos0)
    res.send(proyectos0);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error en el servidor');
  }
});



//getNoticias
app.get('/getNoticias', async (req, res) => {
  try {
    const proyectos0 = await Proyecto4.find({});
    console.log("getNoticias!")
    console.log(proyectos0)
    res.send(proyectos0);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error en el servidor');
  }
});


app.get('/getFuncs', async (req, res) => {
  try {
    const proyectos = await Proyecto666.find({}).exec(); // agrega ".exec()" para resolver la promesa
    console.log("getFuncs!")
    console.log(proyectos)
    res.send(proyectos);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error en el servidor');
  }
});



app.get('/getFuncsF', async (req, res) => {
  try {
    const proyectos = await Proyecto6666.find({}).exec(); // agrega ".exec()" para resolver la promesa
    console.log("getFuncsF!")
    console.log(proyectos)
    res.send(proyectos);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error en el servidor');
  }
});



app.get('/getFuncsF222', async (req, res) => {
  try {
    const proyectos = await Proyecto66662.find({}).exec(); // agrega ".exec()" para resolver la promesa
    console.log("getFuncsF222!")
    console.log(proyectos)
    res.send(proyectos);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error en el servidor');
  }
});




app.listen
  (
    5000,
    () => console.log("Server on port 5000")
  )

