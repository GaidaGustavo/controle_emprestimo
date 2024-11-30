// script/itens/cadastrar.js

async function carregarItens() {
    try {
        const response = await fetch('http://localhost:3011/itens');
        if (!response.ok) throw new Error('Erro ao carregar itens');

        const itens = await response.json();
        const itensSelect = document.getElementById('itens');
        
        // Limpar as opções anteriores e adicionar a opção padrão
        itensSelect.innerHTML = '<option selected>Selecione o item</option>';
        
        // Inserir cada tipo como uma opção no select
        itens.forEach(item => {
            const option = document.createElement('option');
            option.value = item.id;
            option.textContent = item.nome;
            itensSelect.appendChild(option);
        });
    } catch (error) {
        console.error('Erro:', error);
    }
}

// Chama a função quando a página é carregada
window.onload = function() {
    carregarItens(); // Nome da função corrigido
};
