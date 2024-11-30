// script/itens/cadastrar.js

async function carregarTiposDeItem() {
    try {
        const response = await fetch('http://localhost:3011/tipoItens');
        if (!response.ok) throw new Error('Erro ao carregar tipos de item');

        const tipos = await response.json();
        const tipoItemSelect = document.getElementById('tipoItem');
        
        // Limpar as opções anteriores e adicionar a opção padrão
        tipoItemSelect.innerHTML = '<option selected></option>';
        
        // Inserir cada tipo como uma opção no select
        tipos.forEach(tipo => {
            const option = document.createElement('option');
            option.value = tipo.id;
            option.textContent = tipo.nome;
            tipoItemSelect.appendChild(option);
        });
    } catch (error) {
        console.error('Erro:', error);
    }
}

// Chama a função quando a página é carregada
window.onload = function(){
    carregarTiposDeItem();
}
