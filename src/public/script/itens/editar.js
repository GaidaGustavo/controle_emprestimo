function openEditModal(id, nome, tipoItemId, ca, validade) {

    console.log("Abrindo modalEpi");
    document.getElementById('id').value = id;
    document.getElementById('nome').value = nome;
    document.getElementById('tipoItemId').value = tipoItemId;
    document.getElementById('ca').value = ca 
    document.getElementById('validade').value = validade
    const editModal = new bootstrap.Modal(document.getElementById('modal'));
    editModal.show();
}


// Função para salvar a edição
function salvarEdicao() {
    const id = document.getElementById('id').value;
    const nome = document.getElementById('nome').value;
    const tipoItemId = document.getElementById('tipoItemId').value;
    var ca = document.getElementById('ca').value;
    var validade = document.getElementById('validade').value

    itemEPI = {
        ca: ca,
        validade: validade
    }

    if (ca == 'null' || !ca || validade == 'mm/dd/yyy' || !validade || validade == 'null') {
        fetch(`http://localhost:3011/itens/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome: nome,
                tipoItemId: tipoItemId,
            })
        })
            .then(response => {
                if (!response.ok){
                    throw new Error('Não foi possível realizar a edição');
                    alert("Erro ao salvar as alterações.");
                } 
                
                return response.json();
            })
            .then(() => {
                alert("Item atualizado com sucesso!");
                // Fechar modal
                const modal = bootstrap.Modal.getInstance(document.getElementById('modal'));
                modal.hide();

                // Atualize a tabela na interface ou recarregue os dados
                fetchItens();
            })
            .catch(error => {
                console.error("Erro ao salvar as alterações:", error);
                alert("Erro ao salvar as alterações");
            });


    }else if (ca && validade) {
        fetch(`http://localhost:3011/itens/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome: nome,
                tipoItemId: tipoItemId,
                itemEPI
            })
        })
            .then(response => {
                if (!response.ok){
                    alert("Erro ao salvar as alterações. Verifique o id do tipo de item.");
                    throw new Error("Erro ao salvar as alterações.");
                }
                return response.json();
            })
            .then(() => {
                alert("Item atualizado com sucesso!");
                // Fechar modal
                const modal = bootstrap.Modal.getInstance(document.getElementById('modal'));
                modal.hide();

                // Atualize a tabela na interface ou recarregue os dados
                fetchItens();
            })
            .catch(error => {
                console.error("Erro ao salvar as alterações:", error);
                alert("Erro ao salvar as alterações.");
            });
    }else{
        alert("Um Item não pode deixar de ser EPI e só pode ser EPI com os campos CA e VALIDADE preenchidos.");
    }
}