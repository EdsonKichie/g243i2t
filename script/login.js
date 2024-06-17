const btnLogin = document.querySelector("#btnLogin");
const inputUsuario = document.querySelector("#usuario");
const inputSenha = document.querySelector("#senha");
let usuarioLogado = null;

(() => {
    usuarioLogado = localStorage.getItem("usuario");
    if (usuarioLogado) {
        window.location.href = "/home/aluno/Downloads/g243i2t-main/logado.html";
    }
})();

btnLogin.onclick = (e) => {
    e.preventDefault();
    let usuario = inputUsuario.value;
    let senha = inputSenha.value;
    if (usuario) {
        if (usuario === "user") {
            if (senha === "123") {
                localStorage.setItem("usuario", usuario);
                window.location.href = "/home/aluno/Downloads/g243i2t-main/logado.html";
            }
        } else {
            inputUsuario.focus();
        }
    }
}
