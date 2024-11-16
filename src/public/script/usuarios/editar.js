// Função para abrir o modal com os dados preenchidos
async function editUser(userId) {
    try {
        // Faça uma requisição para obter os dados do usuário
        const response = await fetch(`/api/usuarios/${userId}`);
        const user = await response.json();

        if (response.ok) {
            // Preencher os campos do modal
            document.getElementById("editUserId").value = user.id;
            document.getElementById("editUserName").value = user.nome;
            document.getElementById("editUserLogin").value = user.login;

            // Abrir o modal
            const editUserModal = new bootstrap.Modal(document.getElementById("editUserModal"));
            editUserModal.show();
        } else {
            alert("Erro ao buscar usuário: " + user.message);
        }
    } catch (error) {
        console.error("Erro ao buscar dados do usuário:", error);
    }
}

// Função para salvar as alterações
async function saveUserEdit() {
    // Obter os valores dos campos do modal
    const userId = document.getElementById("editUserId").value;
    const userName = document.getElementById("editUserName").value;
    const userLogin = document.getElementById("editUserLogin").value;

    try {
        // Enviar os dados atualizados para a API
        const response = await fetch(`/api/usuarios/${userId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ nome: userName, login: userLogin }),
        });

        if (response.ok) {
            // Fechar o modal
            const editUserModal = bootstrap.Modal.getInstance(document.getElementById("editUserModal"));
            editUserModal.hide();

            // Atualizar a tabela
            alert("Usuário atualizado com sucesso!");
            carregarUsuarios(); // Recarrega a tabela
        } else {
            const errorData = await response.json();
            alert("Erro ao salvar usuário: " + errorData.message);
        }
    } catch (error) {
        console.error("Erro ao atualizar usuário:", error);
    }
}
