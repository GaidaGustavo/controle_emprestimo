function cadastrarEmprestimo(event) {
    event.preventDefault();  // Evita o envio padrão do formulário

    // Captura os dados do formulário
    const nomePessoa = document.getElementById('pessoa').value;

    // Valida os campos obrigatórios
    if (!nomePessoa) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;  // Não envia o formulário se algum campo estiver vazio
    }

    // Captura os itens da lista, pegando apenas o ID (sem o objeto)
    const itens = [];
    document.querySelectorAll('#listaItens li').forEach(item => {
        const itemId = item.getAttribute('data-id'); // Pegando o valor de data-id
        const id = itemId;
        itens.push({id}); // Adicionando como um objeto ao array
    });

    alert('cadastro realizado com sucesso');

    const emprestimo = {
        pessoaId: nomePessoa,
        usuarioId: "550e8400-e29b-41d4-a716-446655440017",  // Exemplo de usuário
        itensId: itens,  // Passando a lista de IDs
    };

    // Envia os dados para o servidor
    fetch('http://localhost:3011/emprestimo', {  
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(emprestimo)  // Envia o objeto JSON com os IDs
    })
    .then(response => response.json())  // Espera a resposta como JSON
    .then(data => {
        if (data.mensagem) {
            alert(data.mensagem);  // Mostra a mensagem de sucesso ou erro
            document.getElementById('emprestimoForm').reset();  // Limpa o formulário
            document.getElementById('listaItens').innerHTML = '';  // Limpa a lista de itens
        } else {
         
        }
    })
    .catch(error => console.error('Erro:', error));  // Caso haja erro no fetch
}



function adicionarItem() {
    const inputItem = document.getElementById("itens");
    const itemNome = inputItem.value.trim();

    if (itemNome) {
        const listaItens = document.getElementById("listaItens");
        const li = document.createElement("li");
        li.className = "list-group-item";
        
        // Atribui o ID ao elemento LI através do atributo data-id
        li.setAttribute('data-id', itemNome); // Atribui o nome do item como ID (você pode modificar para usar IDs reais se preferir)

        li.textContent = itemNome;  // Coloca o nome do item no texto do LI

        // Botão de remoção para cada item adicionado
        const botaoRemocao = document.createElement("button");
        botaoRemocao.className = "btn btn-danger btn-sm float-end";
        botaoRemocao.textContent = "Remover";
        botaoRemocao.onclick = () => listaItens.removeChild(li); // Remover o item quando clicado

        li.appendChild(botaoRemocao); // Adiciona o botão de remoção ao LI
        listaItens.appendChild(li); // Adiciona o LI à lista

        inputItem.value = ""; // Limpa o campo de input após adicionar o item
    }
}



