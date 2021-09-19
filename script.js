let botaoEnviar = document.getElementById("botaoEnviar");
let formularioValido = document.getElementsByClassName("contato_formulario")

botaoEnviar.addEventListener('click', (event) => {
  event.preventDefault();
  //let  formularioValido = true;

  let campoNome = document.getElementById("nome");
  let mensagemNome = document.getElementById("mensagemNome");

  let campoEmail = document.getElementById("email");
  let mensagemEmail = document.getElementById("mensagemEmail");

  let campoMensagem = document.getElementById("mensagem");
  let mensagemMensagem = document.getElementById("mensagemMensagem");

  campoNome.value = "";

  if (campoNome.value.length === 0) {
    mensagemNome.innerHTML = "Digite seu nome";
    //formularioValido = false;

  } else {
    mensagemNome.innerHTML = "";
  }

   campoEmail.value = "";

  if (campoEmail.value === "") {
    mensagemEmail.innerHTML = "Digite seu email";
   // formularioValido = false;
  } else {
    mensagemEmail.innerHTML = "";
  }
  
  campoMensagem.value= "";
   
  if (campoMensagem.value.length === 0) {
    mensagemMensagem.innerHTML = "Digite sua mensagem";
    //formularioValido = false;
  } else {
    mensagemMensagem.innerHTML = "";
  //if (
     //campoMensagem.value.length === 0 &&
     //campoEmail.value === "" &&
     //campoNome.value.length === 0 
     //) {

     }
  //if (!formularioValido) {
    //event.preventDefault();
    }
  );

let promessa = fetch("https://api-github.com/users/ciprianalombendo/repos");

let containerRepositorios = document.getElementById("containerGithub");

promessa
  .then(function (retorno) { 
    return retorno.json();
  })

  .then(function (repositorios) {
    let nomes = [];

    for (let repositorio of repositorios) {
      let url = repositorio.html_url;
      let nome = repositorio.nome;

      nomes.push(`
        <li>
          ${nome} <a href="${url}">${url}</a>
        </li>
      `);
        //"<li>" + repositorio.name + " " + repositorio.html_url + "</li>"
      
    }

    containerRepositorios.innerHTML = nomes;
      });
