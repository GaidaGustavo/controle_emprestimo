// Função para buscar informações da tabela de empréstimos
function fetchEmprestimos() {
    fetch('http://localhost:3011/emprestimo')  // Endpoint do backend
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('tableBody');
            tableBody.innerHTML = ''; // Limpa a tabela antes de inserir novos dados

            data.forEach(emprestimo => {
                const row = document.createElement('tr');x
                row.innerHTML = `
                    <td>${emprestimo.id}</td>
                    <td>${emprestimo.item.nome}</td>
                    <td>${emprestimo.pessoa.nome}</td>
                    <td>${emprestimo.item.itemEPI.validade}</td>
                    <td>${emprestimo.usuario.username}</td>
                    <td>${emprestimo.dataEmprestimo}</td>
                    <td>${emprestimo.dataDevolucao}</td>
                    <td>
                        <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#editModal" onclick="abrirModalEdicao(${emprestimo.id})">Editar</button>
                        <button class="btn btn-primary orientacao" data-bs-toggle="modal" data-bs-target="#confirmDeleteModal" onclick="setItemId(${emprestimo.id})">Devolver</button>
                    </td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Erro ao buscar os empréstimos:', error));
}

// Chama a função fetchEmprestimos ao carregar a página
window.onload = function() {
    fetchEmprestimos();
};