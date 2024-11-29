// Função para carregar um empréstimo do backend e preencher a tabela
function pesquisaEmprestimo() {
    const id = document.getElementById('searchId').value; // Obtém o ID do input

    fetch(`http://localhost:3011/emprestimo/${id}`) // Endpoint do backend
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao buscar o empréstimo do servidor.');
            }
            return response.json(); // Converte a resposta em JSON
        })
        .then(emprestimo => {
            const tableBody = document.getElementById('tableBody'); // Seleciona o corpo da tabela
            tableBody.innerHTML = ''; // Limpa a tabela antes de inserir novos dados

            // Cria uma nova linha com os dados do empréstimo
            const row = document.createElement('tr');
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
            tableBody.appendChild(row); // Adiciona a linha à tabela
        })
        .catch(error => {
            console.error('Erro ao buscar os empréstimos:', error); // Log do erro
            alert('Erro ao carregar o empréstimo. Verifique se o ID está correto.');
        });
}

