async function wait() {
    await pause(2000);
    window.location.href = "../login/index.html";
}

function cadastrar() {
    const user = document.getElementById("user").value;
    const password = document.getElementById("password").value;
    const repassword = document.getElementById("re-password").value;

    if (!user || !password || !repassword) {
        document.getElementById("mensagem").innerText = "Preencha todos os campos.";
        applyerror("user", "border-styleerror");
        applyerror("luser", "bg-styleerror");
        applyerror("password", "border-styleerror");
        applyerror("lpassword", "bg-styleerror");
        applyerror("re-password", "border-styleerror");
        applyerror("lre-password", "bg-styleerror");
        return;
    }

    if (password !== repassword) {
        document.getElementById("mensagem").innerText = "Digite a mesma senha nos campos."
        applyerror("password", "border-styleerror");
        applyerror("lpassword", "bg-styleerror");
        applyerror("re-password", "border-styleerror");
        applyerror("lre-password", "bg-styleerror");
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
/*-- Muda o estilo da borda para vermelho --*/

function applyerror(idCampo, Tipo) {
    document.getElementById(idCampo).classList.add(Tipo);
}

/*-- Reinicia o estilo da borda para o padrão CSS --*/

function removeerror(idCampo, Tipo) {
    document.getElementById(idCampo).classList.remove(Tipo);
    console.log(idCampo, Tipo);
}

/*["user", "luser", "password", "lpassword", "re-password", "lre-password"].forEach((id) => {
    const campo = document.getElementById(id);
    campo.addEventListener("blur", () => {
        removeerror(id, "border-styleerror");
        removeerror(label.id, "bg-styleerror");
    })
})*/
["user", "password", "re-password"].forEach((id) => {
    const input = document.getElementById(id);
    const label = document.querySelector(`label[for="${id}"]`);

    input.addEventListener("blur", () => {
        removeerror(id, "border-styleerror");      // remove da borda do input
        removeerror(label.id, "bg-styleerror");  // remove do label (ex: luser)
    });
});


/*----------------------------------------------------*/

function show_pass(event) {
    const input = document.getElementById("password");
    const icon = event.target;

    if (input.type === "password") {
        input.type = "text";
        icon.classList.remove("bi-key");
        icon.classList.add("bi-eye-slash");
    } else {
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
    } else {
        input.type = "password";
        icon.classList.remove("bi-eye-slash");
        icon.classList.add("bi-key");
    }
}