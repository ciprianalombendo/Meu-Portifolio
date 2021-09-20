function validar() {
  let nome = formulario.nome.value;
  let email= formulario.email.value;
  let mensagem = formulario.mensagem.value;

if(nome === "") {
  alert('Preencha o campo nome.');
  formulario.nome.focus();
  return false;
}
if(email === "") {
  alert('Preencha o campo email.');
  formulario.email.focus();
  return false;
}
if(mensagem === "") {
  alert('Preencha o campo mensagem.');
  formulario.mensagem.focus();
  return false;
}
}

let promessa = fetch("https://api.github.com/users/ciprianalombendo/repos");

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
      
    }

    containerRepositorios.innerHTML = nomes;
  });
