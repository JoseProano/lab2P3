const express = require('express');
const app = express();
const PORT = process.env.PORT;

//endpoint de respuesta
app.get('/', (_req, res) => {
  res.send('Integración continua funcionando!');
});

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});