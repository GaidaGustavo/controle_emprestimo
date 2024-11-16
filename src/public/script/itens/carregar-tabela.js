//===============================função para buscar infos da tabela de itens=======

function fetchItens() {
    fetch('http://localhost:3011/itens')  // Requisição GET para o backend
        .then(response => response.json())  // Parse da resposta JSON
        .then(data => {
            const tableBody = document.getElementById('tableBody');
            tableBody.innerHTML = ''; // Limpa a tabela antes de inserir os novos dados

            // Preenche a tabela com os dados recebidos
            data.forEach(item => {
                const row = document.createElement('tr');
                
                row.innerHTML = `
                    <td>${item.id}</td>
                    <td>${item.name}</td>
                    <td>${item.tipoItem.name}</td>
                    <td>${item.itemEPI.ca}</td>
                    <td>${item.itemEPI.validade}</td>
                    <td>
                        <button class="btn btn-success" onclick="openEditModal()">Editar</button>
                        <button class="btn btn-danger" data-bs-toggle="modal"
                            data-bs-target="#confirmDeleteModal" onclick="setItemId(${item.id})">Excluir</button>
                    </td>
                `;
                
                tableBody.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Erro ao buscar os itens:', error);
        });
}

// Chama a função quando a página é carregada
window.onload = function() {
    fetchItens();
}