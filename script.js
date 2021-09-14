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
campoNome.addEventListener("keyup", funcion() {
    // Apagar a mensagem caso o nome seja válido
    // ou seja, tenha mais de uma letra.



    if (campoNome.value.length === 0) ,3
{ 
        // alert("mensagem");
        mensagem.innerHTML = "Digite seu nome";
        } else {
            mensagem.innerHTML = "";
            };
    
    // chamando API do GitHub

    // Get https://api-github.com/users/ciprianalombendo/repos

    /* <div id="github"></div> */
    let promessa = fetch("https://api-github.com/users/ciprianalombendo/repos")
    let githubNoHTML = document.getElementById("github");

    promessa
    .then(funcion(retorno) {
            return retorno.json();
        })
        // repositório é um Array de JSONS
        .then(function (repositorios) {
            let NOMES = {};

            for (let repositorio of repositorios) {
                // rePositorio.full_name
                nomes.push(repositorio.full_name);
            }

            githubNoHTML.innerHTML = nomes;
           
    });

    //console.log(retorno);
