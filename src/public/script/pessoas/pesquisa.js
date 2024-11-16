// Função para carregar uma pessoa do backend e preencher a tabela
function loadPessoa() {
    const id = document.getElementById('searchId').value; // Obtém o ID do input

    fetch(`http://localhost:3011/pessoas/${id}`) // Faz a requisição para o backend
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao buscar a pessoa no servidor.');
            }
            return response.json(); // Converte a resposta em JSON
        })
        .then(pessoa => {
            const tableBody = document.getElementById('tableBody'); // Seleciona o corpo da tabela
            tableBody.innerHTML = ''; // Limpa o conteúdo existente na tabela

            // Cria uma nova linha com os dados da pessoa
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${pessoa.id}</td>
                <td>${pessoa.nome}</td>
                <td>${pessoa.documento}</td>
                <td>
                    <button class="btn btn-success btn-sm" onclick="abrirModalEdicao(${pessoa.id})">
                        Editar
                    </button>
                    <button class="btn btn-danger btn-sm" data-bs-toggle="modal" 
                        data-bs-target="#confirmDeleteModal" onclick="setItemId(${pessoa.id})">
                        Excluir
                    </button>
                </td>
            `;
            tableBody.appendChild(row); // Adiciona a linha ao corpo da tabela
        })
        .catch(error => {
            console.error('Erro ao carregar a pessoa:', error); // Log do erro
            alert('Erro ao carregar os dados da pessoa. Verifique se o ID está correto.');
        });
}
