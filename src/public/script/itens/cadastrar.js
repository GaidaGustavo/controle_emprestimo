document.getElementById('cadastroItem').addEventListener('submit', function(event) {
    event.preventDefault();  // Evita o recarregamento da página

    // Captura o valor do campo de tipo de item
    const nome = document.getElementById('nome').value;
    const tipoItemId = document.getElementById('tipoItem').value;
    const ca = document.getElementById('ca').value;
    const validade = document.getElementById('validade').value;


    // Cria o objeto a ser enviado
    const itemEPI = {
        ca: ca,
        validade: validade
    }

    const data = {
         nome: nome,
         tipoItemId: tipoItemId,
         itemEPI
        };

    // Envia a requisição para o servidor
    fetch('http://localhost:3011/itens', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            alert('Item cadastrado com sucesso!');
            document.getElementById('cadastroItem').reset();  // Limpa o formulário
        } else {
            throw new Error('Erro ao cadastrar Item');
        }
    })
    .catch(error => console.error('Erro aquiiiiiiiiiiiiiiiiiiiiiiiiiiii', error));
});
