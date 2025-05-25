function teste1() {
    let mensagemlogin = "Usuário não cadastrado!"
    let nomeuser = document.getElementById("user").value;
    document.getElementById("mensagemlogin").textContent = nomeuser;
}

function show_pass(event) {
    const input = document.getElementById("password");
    const icon = event.target;

    if (input.type === "password") {
        input.type = "text";
        icon.classList.remove("bi-lock");
        icon.classList.add("bi-unlock");
    } else {
        input.type = "password";
        icon.classList.remove("bi-unlock");
        icon.classList.add("bi-lock");
    }
}