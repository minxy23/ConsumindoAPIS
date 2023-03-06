//fetch para chamar API

fetch('dados.json')
    .then(response => response.json())
    .then(corpo => {

        document.getElementById('imagemUm').innerHTML = corpo.imagemUm;
        document.getElementById('nomeUm').innerHTML = corpo.nameUm;
        document.getElementById('desenvolvedoraUm').innerHTML = corpo.desenvolvedoraUm;
        document.getElementById('precoUm').innerHTML = corpo.priceUm;

        document.getElementById('imagemDois').innerHTML = corpo.imagemDois;
        document.getElementById('nomeDois').innerHTML = corpo.nameDois;
        document.getElementById('desenvolvedoraDois').innerHTML = corpo.desenvolvedoraDois;
        document.getElementById('precoDois').innerHTML = corpo.priceDois;

        document.getElementById('imagemTres').innerHTML = corpo.imagemTres;
        document.getElementById('nomeTres').innerHTML = corpo.nameTres;
        document.getElementById('desenvolvedoraTres').innerHTML = corpo.desenvolvedoraTres;
        document.getElementById('precoTres').innerHTML = corpo.priceTres;
    });
