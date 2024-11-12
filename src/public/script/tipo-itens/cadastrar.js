//=============funcao para cadastro tipo item============================================================================================================================

document.getElementById('formCadastroTipo').addEventListener('submit', function(event) {
    event.preventDefault();  // Evita o recarregamento da página

    // Captura o valor do campo de tipo de item
    const tipoItem = document.getElementById('tipoItem').value;

    // Cria o objeto a ser enviado
    const data = {
         nome: tipoItem 
        };

    // Envia a requisição para o servidor
    fetch('http://localhost:3011/tipoItens', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            alert('Tipo de Item cadastrado com sucesso!');
            document.getElementById('formCadastroTipo').reset();  // Limpa o formulário
        } else {
            throw new Error('Erro ao cadastrar Tipo de Item');
        }
    })
    .catch(error => console.error('Erro aquiiiiiiiiiiiiiiiiiiiiiiiiiiii', error));
});