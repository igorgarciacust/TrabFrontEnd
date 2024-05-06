document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;

    const regexNome = /^[^\d]{1,100}$/;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexTelefone = /^\d{2}\d{4,5}\d{4}$/;

    if (!regexNome.test(nome)) {
        alert('O nome não pode conter números e deve ter no máximo 100 caracteres.');
        return;
    }

    if (!regexEmail.test(email)) {
        alert('Por favor, insira um email válido.');
        return;
    }

    if (!regexTelefone.test(telefone)) {
        alert('Por favor, insira um número de telefone válido (DDD + 8 ou 9 dígitos).');
        return;
    }

    // Se passar pelas validações, pode enviar o formulário
    alert('Formulário válido! Dados enviados: Nome: ' + nome + ', Email: ' + email + ', Telefone: ' + telefone);
});