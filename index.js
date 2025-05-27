console.log("script iniciado...");

const inputNome = document.getElementById("inputNome");
const inputIdade = document.getElementById("inputIdade");
const btnSalvar = document.getElementById("btnSalvar");
const divResponse = document.getElementById("responsiveContainer")

btnSalvar.addEventListener("click", btnAction);

function btnAction(){
    console.log("teste");

    let nome = inputNome.value;
    let idade = inputIdade.value;

    console.log(nome);
    console.log(idade);

    inputNome.value = "";
    inputIdade.value = "";

    divResponse.innerHTML += `<strong> ${nome} </strong>`;
    divResponse.innerHTML += `<strong> ${idade} </strong`;
}
