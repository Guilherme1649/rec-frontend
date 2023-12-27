const emailInput = document.getElementById('email')
const senhaInput = ducument.getElementById('senha')

function login() {
    if(emailInput.value == 'admin@email.com' && senhaInput.value == '1234') {
        window.location.href = "painel.html"
    } else {
        alert('Email ou senha incorretos')
    }
    }