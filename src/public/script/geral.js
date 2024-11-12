

// Modo Escuro / Claro
const toggleButton = document.getElementById('toggleDarkMode');
const body = document.body;
const navbar = document.querySelector('.navbar');
const table = document.querySelector('.table');
const formControls = document.querySelectorAll('.form-control');
const container = document.querySelector('.containerAlterado');

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    navbar.classList.toggle('dark-mode');
    container.classList.toggle('dark-mode');
    table.classList.toggle('dark-mode'); // Adiciona a classe dark-mode à tabela

    formControls.forEach(control => {
        control.classList.toggle('dark-mode');
    });

    // Mudar o texto do botão
    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Modo Claro';
    } else {
        toggleButton.textContent = 'Modo Escuro';
    }
});

// Login
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();  // Impede o envio padrão do formulário

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simples validação (pode ser substituída por uma chamada ao backend para autenticação)
    if (username === 'admin' && password === '1234') {
        localStorage.setItem('auth', 'true'); // Armazenar a autenticação no localStorage
        alert('Login realizado com sucesso!');
        window.location.href = 'visualizacaoemprestimo.html'; // Redireciona para outra página
    } else {
        alert('Nome ou senha incorretos.');
    }
});

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