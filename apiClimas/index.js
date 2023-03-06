//criando consts e querySelector
//QUERYSELECTOR -> Retorna o primeiro elemento dentro do documento (usando ordenação em profundidade, pré-ordenada e transversal dos nós do documento) 
//que corresponde ao grupo especificado de seletores.

const container = document.querySelector('.container');
const busca = document.querySelector('.caixa-busca button');
const climaBox = document.querySelector('.caixa-clima');
const climaDetalhes = document.querySelector('.clima-detalhes');
const error404 = document.querySelector('.not-found');

busca.addEventListener('click', () => {

    //API KEY - usada para melhor segurança e autenticação
    const APIKey = '53f5f9f2b8693f553955ff00d2cfdc76';
    const cidade = document.querySelector('.caixa-busca input').value;

    if (cidade === '')
        return;

    //fetch para chamar API e incluir cidade + apiKey
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=${APIKey}`)
        .then(response => response.json())
        .then(json => {

        //error 404 - "SE" estiver escrito errado
            if (json.cod === '404') {
                container.style.height = '400px';
                climaBox.style.display = 'none';
                climaDetalhes.style.display = 'none';
                error404.style.display = 'block';
                error404.classList.add('fadeIn');
                return;
            }

            error404.style.display = 'none';
            error404.classList.remove('fadeIn');

        //const para imagem, temperatura, descrição, umidade e velocidade do vento
            const image = document.querySelector('.caixa-clima img');
            const temperatura = document.querySelector('.caixa-clima .temperatura');
            const descricao = document.querySelector('.caixa-clima .descricao');
            const umidade = document.querySelector('.clima-detalhes .umidade span');
            const vento = document.querySelector('.clima-detalhes .vento span');

        //switch que muda conforme o valor da temperatura - Limpo, chuvoso, nevando, nuvens, neblinado
            switch (json.weather[0].main) {
                case 'Clear':
                    image.src = 'img/clear.png';
                    break;

                case 'Rain':
                    image.src = 'img/rain.png';
                    break;

                case 'Snow':
                    image.src = 'img/snow.png';
                    break;

                case 'Clouds':
                    image.src = 'img/cloud.png';
                    break;

                case 'Haze':
                    image.src = 'img/mist.png';
                    break;

                default:
                    image.src = '';
            }

            //parte dedicada para imprimir dados
            temperatura.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            descricao.innerHTML = `${json.weather[0].description}`;
            umidade.innerHTML = `${json.main.humidity}%`;
            vento.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

            climaBox.style.display = '';
            climaDetalhes.style.display = '';
            climaBox.classList.add('fadeIn');
            climaDetalhes.classList.add('fadeIn');
            container.style.height = '590px';


        });


});