
const express = require('express')
const app = express()
const port = 3000
var body_parser = require('body-parser');

app.use(body_parser.urlencoded({extended:false}))

app.get('/', (req, res) => {
	let usuario = "<form action='' method='post'><h2>Introduce tu nombre</h2><input type='text' name='usuario'><input type='submit' name='boton' value='Enviar'></form>"
  res.send(usuario);
})

app.post('/', (req, res) => {
	let nombre = req.body.usuario
	res.send(`<h2>Hola ${nombre}</h2>`);

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
