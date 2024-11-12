// =====================Função para buscar dados do servidor e preencher a tabela pessoas===========================
function carregarPessoas() {
    fetch('http://localhost:3011/pessoas')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('tableBody');
            tableBody.innerHTML = ''; // Limpa o conteúdo existente

            data.forEach(pessoa => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${pessoa.id}</td>
                    <td>${pessoa.nome}</td>
                    <td>${pessoa.documento}</td>
                    <td>
                        <button class="btn btn-success orientacao">Editar</button>
                        <button class="btn btn-danger orientacao" data-bs-toggle="modal" data-bs-target="#confirmDeleteModal" onclick="setItemId(${pessoa.id})">Excluir</button>
                    </td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Erro ao carregar pessoas:', error));
}

// Chama a função ao carregar a página
window.onload = function () {
    carregarPessoas();
};