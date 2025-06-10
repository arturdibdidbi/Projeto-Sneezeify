document.getElementById('cadastroForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const mensagemErro = document.getElementById('mensagemErro');

    
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuarioExistente = usuarios.find(user => user.email === email);

    if (usuarioExistente) {
        mensagemErro.textContent = 'E-mail já cadastrado!';
        return;
    }

   
    usuarios.push({ nome, email, senha });
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    mensagemErro.textContent = 'Cadastro realizado com sucesso! Redirecionando para login...';
    mensagemErro.style.color = 'green';


    setTimeout(() => {
        window.location.href = "login.html"
    }, 2000);
});


document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const mensagemErro = document.getElementById('mensagemErro');


    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuario = usuarios.find(user => user.email === email && user.senha === senha);

    if (usuario) {
        mensagemErro.textContent = `Bem-vindo, ${usuario.nome}! Redirecionando...`;
        mensagemErro.style.color = 'green';
        setTimeout(() => { window.location.href = "login.html";
            alert('Login bem-sucedido!'); 
        }, 2000);
    } else {
        mensagemErro.textContent = 'E-mail ou senha incorretos!';
    }
});