document.getElementById('cadastroPessoa').addEventListener('submit', function(event) {
    event.preventDefault();  // Evita o recarregamento da página

    // Captura o valor do campo de tipo de item
    const nome = document.getElementById('nome').value;
    const documento = document.getElementById('documento').value;

    // Cria o objeto a ser enviado
    const data = {
         nome: nome,
         documento: documento
        };

    // Envia a requisição para o servidor
    fetch('http://localhost:3011/pessoas', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            alert('Pessoa cadastrada com sucesso!');
            document.getElementById('cadastroPessoa').reset();  // Limpa o formulário
        } else {
            throw new Error('Erro ao cadastrar Tipo de Item');
        }
    })
    .catch(error => console.error('Erro aquiiiiiiiiiiiiiiiiiiiiiiiiiiii', error));
});