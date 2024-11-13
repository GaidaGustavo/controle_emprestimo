document.getElementById('cadastroUsuario').addEventListener('submit', function(event) {
    event.preventDefault();  // Evita o recarregamento da página

    // Captura o valor do campo de tipo de item
    const nome = document.getElementById('nome').value;
    const pessoaId = document.getElementById('pessoa').value;

    // Cria o objeto a ser enviado
    const data = {
         username: nome,
         pessoaId: pessoaId
        };

    // Envia a requisição para o servidor
    fetch('http://localhost:3011/usuario', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            alert('Usuario cadastrado com sucesso!');
            document.getElementById('cadastroUsuario').reset();  // Limpa o formulário
        } else {
            throw new Error('Erro ao cadastrar Usuario');
        }
    })
    .catch(error => console.error('Erro aquiiiiiiiiiiiiiiiiiiiiiiiiiiii', error));
});