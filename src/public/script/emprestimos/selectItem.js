// script/itens/cadastrar.js

async function carregarItens() {
    try {
        const response = await fetch('http://localhost:3011/itens');
        if (!response.ok) throw new Error('Erro ao carregar itens');

        const itens = await response.json();
        console.log(itens);

        const itensSelect = document.getElementById('itens');
        
        // Limpar as opções anteriores e adicionar a opção padrão
        itensSelect.innerHTML = '<option selected>Selecione</option>';
        
        // Inserir cada tipo como uma opção no select
        itens.forEach(item => {
            const option = document.createElement('option');
            option.value = item.id;
            option.textContent = item.name;
            itensSelect.appendChild(option);
        });
    } catch (error) {
        console.error('Erro:', error);
    }
}

// Chama a função quando a página é carregada
document.addEventListener('DOMContentLoaded', carregarItens);
