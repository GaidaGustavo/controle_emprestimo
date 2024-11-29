//===============================função para buscar infos da tabela de itens=======

function carregarItens() {
    fetch('http://localhost:3011/itens')  // Requisição GET para o backend
        .then(response => response.json())  // Parse da resposta JSON
        .then(data => {
            const tableBody = document.getElementById('tableBody');
            tableBody.innerHTML = ''; // Limpa a tabela antes de inserir os novos dados

            // Preenche a tabela com os dados recebidos
            data.forEach(item => {
                const dataISO = item.itemEPI.validade;

                // Converter para objeto Date
                const data = new Date(dataISO);

                // Obter os componentes da data
                const dia = data.getUTCDate(); // Dia (UTC)
                const mes = data.getUTCMonth() + 1; // Mês (UTC, começa em 0)
                const ano = data.getUTCFullYear(); // Ano (UTC)

                // Formatar em dd/mm/yyyy
                var dataFormatada = `${dia.toString().padStart(2, '0')}/${mes.toString().padStart(2, '0')}/${ano}`;

                if(dataFormatada == '01/01/1970'){
                    dataFormatada = 'Sem validade';
                }

                var ca = item.itemEPI.ca

                if(ca == 'null' || !ca || ca == null || ca == undefined || ca == ''){
                    ca = 'Sem CA';
                }

                const row = document.createElement('tr');

                row.innerHTML = `
                    <td>${item.id}</td>
                    <td>${item.name}</td>
                    <td>${item.tipoItem.name}</td>
                    <td>${ca}</td>
                    <td>${dataFormatada}</td>
                    <td>
                        <button class="btn btn-success" onclick="modalEdicao('${item.id}', '${item.name}', '${item.tipoItem.id}', '${item.itemEPI.ca}' , '${item.itemEPI.validade}')">Editar</button>
                        <button class="btn btn-danger" data-bs-toggle="modal"
                            data-bs-target="#confirmDeleteModal" onclick="modalExclusaoItem('${item.id}')">Excluir</button>
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
window.onload = function () {
    carregarItens();
}
