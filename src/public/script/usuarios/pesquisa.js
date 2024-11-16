// Função para carregar um usuário do backend e preencher a tabela
function loadUsuario() {
    const id = document.getElementById('searchId').value; // Obtém o ID do input

    fetch(`http://localhost:3011/usuario/${id}`) // Faz a requisição para o backend
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao buscar o usuário do servidor.');
            }
            return response.json(); // Converte a resposta em JSON
        })
        .then(usuario => {
            const tableBody = document.getElementById('tableBody'); // Seleciona o corpo da tabela
            tableBody.innerHTML = ''; // Limpa o conteúdo existente na tabela

            // Cria uma nova linha com os dados do usuário
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${usuario.id}</td>
                <td>${usuario.pessoa.nome}</td>
                <td>${usuario.nome}</td>
                <td>
                    <button class="btn btn-success btn-sm" onclick="openEditModal('${usuario.id}')">
                        Editar
                    </button>
                    <button class="btn btn-danger btn-sm" data-bs-toggle="modal" 
                        data-bs-target="#confirmDeleteModal" onclick="setItemId('${usuario.id}')">
                        Excluir
                    </button>
                </td>
            `;
            tableBody.appendChild(row); // Adiciona a linha ao corpo da tabela
        })
        .catch(error => {
            console.error('Erro ao carregar o usuário:', error); // Log do erro
            alert('Erro ao carregar o usuário. Verifique se o ID está correto.');
        });
}

