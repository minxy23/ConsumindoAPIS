//usar fetch para chamar API

fetch('https://viacep.com.br/ws/08090290/json/').then(response =>{
    return response.json()
}).then(corpo => {
    console.log(corpo)
})
