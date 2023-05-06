const express = require('express');
const mongoose = require('mongoose');


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
  consultarMongoDB('proyecto2_redes2_grupo6', 'proyecto2_redes2_grupo6')
  .then(docs => {
    console.log(docs);
    res.send(docs);
  })
  .catch(err => {
    console.error(err);
  });
});


//getCEO
app.get('/getCEO', async (req, res) => {
  consultarMongoDB('proyecto2_redes2', 'proyecto2_redes2')
  .then(docs => {
    console.log(docs);
    res.send(docs);
  })
  .catch(err => {
    console.error(err);
  });
});


//getWallp
app.get('/getWallp', async (req, res) => {
  consultarMongoDB('fondos', 'fondos')
  .then(docs => {
    console.log(docs);
    res.send(docs);
  })
  .catch(err => {
    console.error(err);
  });
});


//getNoticias
app.get('/getNoticias', async (req, res) => {
  consultarMongoDB('proyecto2_redes2_noticias', 'proyecto2_redes2_noticias')
  .then(docs => {
    console.log(docs);
    res.send(docs);
  })
  .catch(err => {
    console.error(err);
  });
});


app.get('/getFuncs', async (req, res) => {
  consultarMongoDB('fondos', 'proyecto2_funcs')
  .then(docs => {
    console.log(docs);
    res.send(docs);
  })
  .catch(err => {
    console.error(err);
  });
});


app.get('/getFuncsF', async (req, res) => {
  consultarMongoDB('fondos', 'proyecto2_finanzas')
  .then(docs => {
    console.log(docs);
    res.send(docs);
  })
  .catch(err => {
    console.error(err);
  });
});


app.get('/getFuncsF222', async (req, res) => {
  consultarMongoDB('fondos', 'proyecto2_finanzas222')
  .then(docs => {
    console.log(docs);
    res.send(docs);
  })
  .catch(err => {
    console.error(err);
  });
});


app.listen
  (
    5000,
    () => console.log("Server on port 5000")
  )

function consultarMongoDB(databaseName, collectionName) {
  // URL de la base de datos
  const url = `mongodb://54.210.78.233:27017/${databaseName}`;

  return new Promise((resolve, reject) => {
    // Conectarse a la base de datos
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function(err) {
      if (err) {
        reject(err);
      } else {
        // Seleccionar la colección
        const collection = mongoose.connection.collection(collectionName);

        // Consultar los datos
        collection.find({}).toArray(function(err, docs) {
          if (err) {
            reject(err);
          } else {
            // Cerrar la conexión
            mongoose.connection.close();

            // Resolver la promesa con los datos
            resolve(docs);
          }
        });
      }
    });
  });
}