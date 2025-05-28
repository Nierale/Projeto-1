async function wait() {
    await pause(2000);
    window.location.href = "../login/index.html";
}

// Validação do formulário de cadastro
function cadastrar() {
    const user = document.getElementById("user").value;
    const password = document.getElementById("password").value;
    const repassword = document.getElementById("re-password").value;

    // Verifica campos vazios
    if (!user && !password && !repassword) {
        document.getElementById("mensagem").innerText = "Preencha todos os campos!";
        applyerror("user", "border-styleerror");
        applyerror("luser", "bg-styleerror");
        applyerror("password", "border-styleerror");
        applyerror("lpassword", "bg-styleerror");
        applyerror("re-password", "border-styleerror");
        applyerror("lre-password", "bg-styleerror");
        return;
    }
    if (!user) {
        document.getElementById("mensagem").innerText = "Preencha o campo de Usuário!";
        applyerror("user", "border-styleerror");
        applyerror("luser", "bg-styleerror");
        return;
    }
    if (user && !password && !repassword) {
        document.getElementById("mensagem").innerText = "Preencha os campos de Senha!";
        applyerror("password", "border-styleerror");
        applyerror("lpassword", "bg-styleerror");
        applyerror("re-password", "border-styleerror");
        applyerror("lre-password", "bg-styleerror");
        return;
    }
    if (user && !password && repassword) {
        document.getElementById("mensagem").innerText = "Preencha o campo de Senha!";
        applyerror("password", "border-styleerror");
        applyerror("lpassword", "bg-styleerror");
        return;
    }
    if (!repassword) {
        document.getElementById("mensagem").innerText = "Preencha o campo de Confirmar senha!";
        applyerror("re-password", "border-styleerror");
        applyerror("lre-password", "bg-styleerror");
        return;
    }

    // Verifica se a senha e confirmação de senha são iguais
    if (password !== repassword) {
        document.getElementById("mensagem").innerText = "Digite a mesma senha nos campos!"
        applyerror("password", "border-styleerror");
        applyerror("lpassword", "bg-styleerror");
        applyerror("re-password", "border-styleerror");
        applyerror("lre-password", "bg-styleerror");
        return;
    }

    // Cadastro ok, redirecionamento para Login
    document.getElementById("mensagem").classList.remove("mensagem");
    document.getElementById("mensagem").innerText = "Cadastro realizado com sucesso!";
    wait();
}

// Muda o estilo da borda para vermelho
function applyerror(idCampo, Tipo) {
    document.getElementById(idCampo).classList.add(Tipo);
    document.getElementById("mensagem").classList.add("mensagem");
}

//Reinicia o estilo da borda para o padrão CSS
function removeerror(idCampo, Tipo) {
    document.getElementById(idCampo).classList.remove(Tipo);
    console.log(idCampo, Tipo);
}

["user", "password", "re-password"].forEach((id) => {
    const input = document.getElementById(id);
    const label = document.querySelector(`label[for="${id}"]`);
    input.addEventListener("blur", () => {
        removeerror(id, "border-styleerror");      // remove da borda do input
        removeerror(label.id, "bg-styleerror");  // remove do label (ex: luser)
    });
});

// Clicar no icone para mostrar senha
function show_pass(event) {
    const input = document.getElementById("password");
    const icon = event.target;

    if (input.type === "password") {
        input.type = "text";
        icon.classList.remove("bi-key");
        icon.classList.add("bi-eye-slash");
    }
    else {
        input.type = "password";
        icon.classList.remove("bi-eye-slash");
        icon.classList.add("bi-key");
    }
}
function show_repass(event) {
    const input = document.getElementById("re-password");
    const icon = event.target;

    if (input.type === "password") {
        input.type = "text";
        icon.classList.remove("bi-key");
        icon.classList.add("bi-eye-slash");
    }
    else {
        input.type = "password";
        icon.classList.remove("bi-eye-slash");
        icon.classList.add("bi-key");
    }
}