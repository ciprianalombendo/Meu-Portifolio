import "./styles.css";

document.getElementById("app").innerHTML = '<h1>App!</h1>';

let aulaDeHoje = document.getElementById('aula-de-hoje');

aulaDeHoje.innerHTML = 'O que quiser';
document.getElementById('root')

let campoNome = document.getElementById("nome");
let mensagem = document.getElementById("mensagem")

//const input = {value: ""}



campoNome.value = "";
// Quero validar o campo nome, toda vez
// que o usuário digita alguma coisa no input
// nome.
// Conceito de evento
// Referencia de campo.
// DOM -> recebe esses eventos
campoNome.addEventListener("keyup", function () {
    // Apagar a mensagem caso o nome seja válido
    // ou seja, tenha mais de uma letra.

console.log(campoNome.value);

    if (campoNome.value.length === 0) 
{ 
        // alert("mensagem");
        mensagem.innerHTML = "Digite seu nome";
        } else {
            mensagem.innerHTML = "";
            }
});
    
    // chamando API do GitHub

    // Get https://api-github.com/users/ciprianalombendo/repos

    /* <div id="github"></div> */
    let promessa = fetch("https://api-github.com/users/ciprianalombendo/repos")
    let githubNoHTML = document.getElementById("github");

    promessa.then((retorno) => retorno.json() )
    
        // repositório é um Array de JSONS
        .then((repositorios) => {
            
            //let nomes = {};

            //for (let repositorio of repositorios) {
               // nomes.push("<li>" + repositorio.full_name + "<li>");
                // repositorio.full_name
            //}

            let nomes = repositorios.map(
                (repositorio) => "<li>" + repositorio.full_name + "<li>"
                );
            
  
            githubNoHTML.innerHTML = nomes;
           
    });

    //console.log(retorno);
