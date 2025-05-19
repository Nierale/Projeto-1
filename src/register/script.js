async function wait() {
    await pause(2000);
    window.location.href = "../login/index.html";
}

function cadastrar() {
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    if (!usuario || !senha) {
        document.getElementById("mensagem").innerText = "Preencha todos os campos.";
        return;
    }

    // Salva no LocalStorage
    const dados = {
        usuario: usuario,
        senha: senha
    };

    localStorage.setItem("usuarioCadastrado", JSON.stringify(dados));
    document.getElementById("mensagem").innerText = "Cadastro realizado com sucesso!";
    wait();
}