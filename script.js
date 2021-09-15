let botaoEnviar = document.getElementById(botaoEnviar);
let formulario = document.getElementsByClassName("contato_formulario");

botaoEnviar.addEventListener("click", (event) => {
  let campoNome = document.getElementById("nome");
  let mensagemNome = document.getElementById("mensagemNome");

  let campoEmail = document.getElementById("email");
  let mensagemEmail = document.getElementById("mensagemEmail");

  let campoMensagem = document.getElementById("mensagem");
  let mensagemMensagem = document.getElementById("mensagemMensagem");

  campoNome.value = "";

  if (campoNome.value.length === 0) {
    mensagemNome.innerHTML = "Digite seu nome";
  } else {
    mensagem.innerHTML = "";
  }

  //campoEmail.value = "";
  if (campoEmail.value === "") {
    mensagemEmail.innerHTML = "Digite seu email";
  } else {
    mensagemEmail.innerHTML = "";
  }

  if (campoMensagem.value.length === 0) {
    mensagemMensagem.innerHTML = "Digite sua mensagem";
  } else {
    mensagemMensagem.innerHTML = "";

    event.preventDefault();
  }
});

let promessa = fetch("https://api-github.com/users/ciprianalombendo/repos");

let containerRepositorios = document.getElementById("containerGithub");

promessa
  .then(function (retorno) {
    return retorno.json();
  })

  .then(function (repositorios) {
    let nomes = {};

    for (let repositorio of repositorios) {
      console.log(repositorio.html_url);

      nomes.push(
        "<li>" + repositorio.name + " " + repositorio.html_url + "</li>"
      );
    }

    containerRepositorios.innerHTML = nomes;
  });