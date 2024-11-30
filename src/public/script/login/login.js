// Login
async function login() {
    username = document.getElementById('username').value;
    password = document.getElementById('password').value
    token = await fetch('http://localhost:3011/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, password})
    })
    .then(response => {
        if (response.ok) {
            alert('Login efetuado com sucesso');
            alert(token)
        } else {
            throw new Error('Erro ao efetuar login');
        }
    })
    .catch(error => console.error('Erro ao efetuar login', error));
    alert(token.token)
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