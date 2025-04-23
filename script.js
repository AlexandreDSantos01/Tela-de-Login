function validarLogin() {
    const login = document.getElementById('login').value; // Pega o valor do campo de login
    const senha = document.getElementById('senha').value; // Pega o valor do campo de senha
    
    // Definindo os valores corretos
    const loginCorreto = 'login';
    const senhaCorreta = '1234';
    
    if (login === loginCorreto && senha === senhaCorreta) {
      alert('Parabéns, você está logando!'); // Exibe a mensagem de sucesso
      setTimeout(() => {
        location.reload(); // Reinicia a página após 2 segundos
      }, 2000);
    } else {
      alert('Login ou senha incorretos!');
    }
  }
  