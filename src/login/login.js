async function wait() {
    await pause(2000);
    window.location.href = "../home/home.html"
}

function login() {
    const usuario = document.getElementById("user").value;
    const senha = document.getElementById("password").value;
    if (usuario === usuarioSalvo && senha === senhaSalva) {
        //let mensagemlogin = "Usuário não cadastrado!"
        document.getElementById("mensagemlogin").textContent = `Seja bem vindo ${usuario}!`;
        wait();
    }
}

// Clicar no icone para mostrar senha
function show_pass(event) {
    const input = document.getElementById("password");
    const icon = event.target;

    if (input.type === "password") {
        input.type = "text";
        icon.classList.remove("bi-eye");
        icon.classList.add("bi-eye-slash");
    }
    else {
        input.type = "password";
        icon.classList.remove("bi-eye-slash");
        icon.classList.add("bi-eye");
    }
}