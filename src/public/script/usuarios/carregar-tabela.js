
// ===================Função para carregar usuários do servidor e preencher a tabela========================
function carregarUsuarios() {
    fetch('http://localhost:3011/usuario')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('tableBody');
            tableBody.innerHTML = ''; // Limpa o conteúdo existente

            data.forEach(usuario => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${usuario.id}</td>
                    <td>${usuario.pessoa.nome}</td>
                    <td>${usuario.nome}</td>
                    <td>
                        <button class="btn btn-success orientacao" onclick="modalEdicao('${usuario.id}', '${usuario.nome}', '${usuario.pessoa.id}')")">Editar</button>
                        <button class="btn btn-danger orientacao" data-bs-toggle="modal" data-bs-target="#confirmDeleteModal" onclick="modalExclusaoUsuario('${usuario.id}')">Excluir</button>
                    </td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Erro ao carregar usuários:', error));
}

// Chama a função ao carregar a página
window.onload = function () {
    carregarUsuarios();
};

function openEditModal(id, nome) {
    const username = document.getElementById('editUserName').value;
    const pessoaId = document.getElementById('editUserPessoa').value;
    const editModal = new bootstrap.Modal(document.getElementById('editItemModal'));
    editModal.show();
}
