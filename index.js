console.log("script iniciado...");

const inputNome = document.getElementById("inputNome");
const inputCPF = document.getElementById("inputCPF");
const btnSalvar = document.getElementById("btnSalvar");
const inputIdade = document.getElementById("inputIdade");
const divResponse = document.getElementById("responsiveContainer");

btnSalvar.addEventListener("click", btnAction);

function btnAction() {
    console.log("TESTE!");

    let nome = inputNome.value;
    let cpf = inputCPF.value;
    let idade = inputIdade.value;

    console.log(nome);
    console.log(cpf);
    console.log(idade);

    inputNome.value = "";
    inputIdade.value = "";
    inputCPF.value = "";

    divResponse.innerHTML += `<strong>Seu nome é:  ${ nome }</strong><br></br>`;
    divResponse.innerHTML += `<strong>Você tem:  ${ idade } anos</strong><br></br>`;
    divResponse.innerHTML += `<strong>Seu cpf é:  ${ cpf } SEU CPF JA ERA!</strong><br></br>`;
}
