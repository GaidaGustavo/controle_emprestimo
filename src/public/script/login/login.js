// Login
async function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    try {
        const response = await fetch('http://localhost:3011/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        if (response.ok) {
            const data = await response.json(); // Converte o corpo da resposta para um objeto JSON
            alert('Login efetuado com sucesso');
            alert(data.token); // Acesse o token da resposta

            // Aqui você pode armazenar o token no localStorage ou cookie, por exemplo
            // localStorage.setItem('token', data.token);
        } else {
            throw new Error('Erro ao efetuar login');
        }
    } catch (error) {
        console.error('Erro ao efetuar login', error);
        alert('Erro ao efetuar login');
    }
}


// Função para verificar autenticação e redirecionar se não estiver logado
function checkAuth() {
    const isAuthenticated = localStorage.getItem('auth');
    if (!isAuthenticated) {
        window.location.href = 'login.html'; // Redireciona para login se não autenticado
    }
}

// Logout
function logout() {
    localStorage.removeItem('auth');  // Remove o token de autenticação
    alert('Você foi desconectado!');
    window.location.href = 'login.html';  // Redireciona para a página de login
}