// Login
async function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch('http://localhost:3011/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });
    } catch {
        // Corrigido: Certifique-se de exibir apenas informações úteis
        console.error('Erro ao tentar efetuar login:', error);
        alert('Erro ao tentar efetuar login. Verifique o console para mais detalhes.');
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