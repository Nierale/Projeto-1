function pause(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const usuarioSalvo = localStorage.getItem("app_user");
const senhaSalva = localStorage.getItem("app_password");