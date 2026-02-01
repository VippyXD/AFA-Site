// se já estiver logado, pula o login
if (localStorage.getItem("afa_logged") === "true") {
    window.location.href = "dashboard.html";
}

const form = document.getElementById("loginForm");

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

const openRegister = document.getElementById("openRegister");
const backToLogin = document.getElementById("backToLogin");

const errorMessage = document.getElementById("errorMessage");

const loginUser = document.getElementById("loginUser");
const loginPass = document.getElementById("loginPass");

const registerUser = document.getElementById("registerUser");
const registerPass = document.getElementById("registerPass");
const registerConfirm = document.getElementById("registerConfirm");

/* Utilidades */
function clearErrors() {
    errorMessage.textContent = "";
    errorMessage.style.color = "#ff6b6b";

    document.querySelectorAll("input").forEach(input => {
        input.classList.remove("input-error");
    });
}

/* Alternar para cadastro */
openRegister.addEventListener("click", () => {
    clearErrors();
    loginForm.classList.add("hidden");
    registerForm.classList.remove("hidden");
});

/* Voltar para login */
backToLogin.addEventListener("click", () => {
    clearErrors();
    registerForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
});

/* CADASTRO */
registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    clearErrors();

    if (
        registerUser.value === "" ||
        registerPass.value === "" ||
        registerConfirm.value === ""
    ) {
        errorMessage.textContent = "Preencha todos os campos";
        return;
    }

    if (registerPass.value !== registerConfirm.value) {
        errorMessage.textContent = "As senhas não coincidem";
        registerPass.classList.add("input-error");
        registerConfirm.classList.add("input-error");
        registerPass.value = "";
        registerConfirm.value = "";
        return;
    }

    localStorage.setItem("afa_user", registerUser.value);
    localStorage.setItem("afa_pass", registerPass.value);

    errorMessage.textContent = "Cadastro autorizado";
    errorMessage.style.color = "#8aff8a";

    registerForm.reset();
});

/* LOGIN */
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    clearErrors();

    const savedUser = localStorage.getItem("afa_user");
    const savedPass = localStorage.getItem("afa_pass");

    if (
        loginUser.value !== savedUser ||
        loginPass.value !== savedPass
    ) {
        errorMessage.textContent = "Usuário ou senha inválidos";

        loginUser.classList.add("input-error");
        loginPass.classList.add("input-error");

        loginUser.value = "";
        loginPass.value = "";
        return;
    }

    window.location.href = "dashboard.html";
});

// login bem-sucedido
localStorage.setItem("afa_logged", "true");

// redireciona para o dashboard
window.location.href = "dashboard.html";
