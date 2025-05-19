async function wait() {
    await pause(2000);
    window.location.href = "../login/index.html";
}

function cadastrar() {
    const user = document.getElementById("user").value;
    const password = document.getElementById("password").value;

    if (!user || !password) {
        document.getElementById("mensagem").innerText = "Preencha todos os campos.";
        return;
    }

    // Salva no LocalStorage
    const dados = {
        user: user,
        password: password
    };

    localStorage.setItem("usuarioCadastrado", JSON.stringify(dados));
    document.getElementById("mensagem").innerText = "Cadastro realizado com sucesso!";
    wait();
}