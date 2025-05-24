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
    // Salvar no firebase
    firebase.auth().createUserWithEmailAndPassword(user, password)
        .then((userCredential) => {
            document.getElementById("mensagem").innerText = "Cadastro realizado com sucesso!";
            console.log(userCredential.user);
            wait();
        })
        .catch((error) => {
            document.getElementById("mensagem").innerText = "Erro: " + error.message;
        });
}
