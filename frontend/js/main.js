const balanco = document.getElementById('valorCarteira');

      balanco.innerHTML = 'Carregando...';

      const pegarBalanco = async () => {
        const response = await fetch('http://localhost:3000/game', {
          method: 'GET',
        });

        const responseJson = await response.json();

        balanco.innerHTML = responseJson.user.carteira.toFixed(2);
      };

      const adicionarBalanco = async () => {
        const balanco = document.getElementById('valorGanhoFinal').value;

        const response = await fetch('http://localhost:3000/adicionarBalanco', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            saldo: Number(balanco),
          }),
        });

        pegarBalanco();
      };

      const removerBalanco = async () => {
        const balanco = document.getElementById('entrada').value;

        const response = await fetch('http://localhost:3000/removerBalanco', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            saldo: Number(balanco),
          }),
        });

        pegarBalanco();
      };