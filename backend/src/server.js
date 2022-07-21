const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const user = {
  carteira: 30,
};

app.get('/game', (req, res) => {
  return res.json({
    message: 'Inicio do game',
    user,
  });
});

app.post('/adicionarBalanco', (req, res) => {
  const { saldo } = req.body;

  if (saldo < 0) {
    return res.status(401).json({
      message: 'Saldo inválido, utilize valores superiores a 0',
    });
  }
  user.carteira += saldo;

  console.log(user);

  return res.json({
    message: 'Saldo adicionado',
    user,
  });
});

app.post('/removerBalanco', (req, res) => {
  const { saldo } = req.body;

  if (user.carteira < saldo) {
    return res.status(401).json({
      message: 'Saldo insuficiente',
    });
  }

  user.carteira -= saldo;

  console.log(user);

  return res.status(201).json({
    message: 'Saldo removido',
    user,
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
