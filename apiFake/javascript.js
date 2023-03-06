//const com dados dos poke

const cartaUm = '{"Nome": "Pikachu", "Tamanho": "40cm", "Tipo": "Elétrico", "Fraqueza": "Chão"}'

const cartaDois = '{"Nome": "Evee", "Tamanho": "30cm", "Tipo": "Normal", "Fraqueza": "Brigar"}'

const cartaTres = '{"Nome": "Psyduck", "Tamanho": "80cm", "Tipo": "Água", "Fraqueza": "Grama, elétrico"}'

const cartaQuatro = '{"Nome": "Charizard", "Tamanho": "1.70cm", "Tipo": "Fogo, voador", "Fraqueza": "Água, elétrico, pedra"}'

const cartaCinco = '{"Nome": "Porygon", "Tamanho": "80cm", "Tipo": "Normal", "Fraqueza": "Brigar"}'

const cartaSeis = '{"Nome": "MewTwo", "Tamanho": "2 m", "Tipo": "Psíquico", "Fraqueza": "Fantasma, escuro, inseto"}'

const jsonUm = JSON.parse(cartaUm);
const jsonDois = JSON.parse(cartaDois);
const jsonTres = JSON.parse(cartaTres);
const jsonQuatro = JSON.parse(cartaQuatro);
const jsonCinco = JSON.parse(cartaCinco);
const jsonSeis = JSON.parse(cartaSeis);

//function para função para apresentar dados dos poke
function myFunctionUm() {
    document.getElementById("nome").innerHTML = jsonUm.Nome;
    document.getElementById("tamanho").innerHTML = jsonUm.Tamanho;
    document.getElementById("tipo").innerHTML = jsonUm.Tipo;
    document.getElementById("fraqueza").innerHTML = jsonUm.Fraqueza;
    document.getElementById("img").src = "midia/pika.png"
}

function myFunctionDois() {
    document.getElementById("nome").innerHTML = jsonDois.Nome;
    document.getElementById("tamanho").innerHTML = jsonDois.Tamanho;
    document.getElementById("tipo").innerHTML = jsonDois.Tipo;
    document.getElementById("fraqueza").innerHTML = jsonDois.Fraqueza;
    document.getElementById("img").src = "midia/eevee.png"
}

function myFunctionTres() {
    document.getElementById("nome").innerHTML = jsonTres.Nome;
    document.getElementById("tamanho").innerHTML = jsonTres.Tamanho;
    document.getElementById("tipo").innerHTML = jsonTres.Tipo;
    document.getElementById("fraqueza").innerHTML = jsonTres.Fraqueza;
    document.getElementById("img").src = "midia/psyduck.png"
}

function myFunctionQuatro() {
    document.getElementById("nome").innerHTML = jsonQuatro.Nome;
    document.getElementById("tamanho").innerHTML = jsonQuatro.Tamanho;
    document.getElementById("tipo").innerHTML = jsonQuatro.Tipo;
    document.getElementById("fraqueza").innerHTML = jsonQuatro.Fraqueza;
    document.getElementById("img").src = "midia/charizard.png"
}

function myFunctionCinco() {
    document.getElementById("nome").innerHTML = jsonCinco.Nome;
    document.getElementById("tamanho").innerHTML = jsonCinco.Tamanho;
    document.getElementById("tipo").innerHTML = jsonCinco.Tipo;
    document.getElementById("fraqueza").innerHTML = jsonCinco.Fraqueza;
    document.getElementById("img").src = "midia/porygon.png"
}

function myFunctionSeis() {
    document.getElementById("nome").innerHTML = jsonSeis.Nome;
    document.getElementById("tamanho").innerHTML = jsonSeis.Tamanho;
    document.getElementById("tipo").innerHTML = jsonSeis.Tipo;
    document.getElementById("fraqueza").innerHTML = jsonSeis.Fraqueza;
    document.getElementById("img").src = "midia/mewtwo.png"
}

//console.log
console.log(jsonUm);
console.log(jsonDois);
console.log(jsonTres);
console.log(jsonQuatro);
console.log(jsonCinco);
console.log(jsonSeis);