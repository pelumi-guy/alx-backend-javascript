// In a folder 9-api, reusing the previous project in 8-api (package.json, api.js and api.test.js)
// Add a new endpoint: GET /cart/:id
// :id must be only a number (validation must be in the route definition)
// When access, the endpoint should return Payment methods for cart :id

const express = require('express')
const app = express()
const port = 7865

app.get('/', (req, res) => {
  res.send('Welcome to the payment system')
});

app.get('/cart/:id', (req, res) => {
  const id = Number(req.params.id);

if (isNaN(id)) {
  res.status(404).send();
} else {
res.send(`Payment methods for cart ${id}`);
}

})

app.listen(port, () => {
  console.log(`API available on localhost port 7865`)
});
