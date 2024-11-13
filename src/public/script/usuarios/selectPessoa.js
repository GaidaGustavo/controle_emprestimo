// script/itens/cadastrar.js

async function carregarPessoas() {
    try {
        const response = await fetch('http://localhost:3011/pessoas');
        if (!response.ok) throw new Error('Erro ao carregar pessoas');

        const pessoas = await response.json();
        const pessoasSelect = document.getElementById('pessoa');
        
        // Limpar as opções anteriores e adicionar a opção padrão
        pessoasSelect.innerHTML = '<option selected>Selecione o colaborador</option>';
        
        // Inserir cada tipo como uma opção no select
        pessoas.forEach(pessoa => {
            const option = document.createElement('option');
            option.value = pessoa.id;
            option.textContent = pessoa.nome;
            pessoasSelect.appendChild(option);
        });
    } catch (error) {
        console.error('Erro:', error);
    }
}

// Chama a função quando a página é carregada
window.onload = function(){
    carregarPessoas();
}