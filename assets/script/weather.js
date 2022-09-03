const formulario = document.querySelector(".campo__busca");
const cidadePais = [];

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    const inputCidade = document.getElementById("campo__busca");
    const apiKey = "13e2d569c4b820d2080738f98d8b6b1e";
    const inputVal = inputCidade.value;
    const list = document.getElementById("list");
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&lang=pt_br&appid=${apiKey}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById("mensagem").innerHTML = "";
            const {main, name, sys, weather } = data;
            const icon = `./assets/img/${weather[0]["icon"]}.png`;

            const li = document.createElement("li");
            if(cidadePais.includes(`${name}${sys.country}`)) {
                document.getElementById("mensagem").innerHTML = "Opa! Esta consulta já foi feita😉";
                inputCidade.value = "";
                inputCidade.focus();
            } else {
                li.classList.add("dados__cidade");
            const containerDadosTempo = `
                <h2 class="nome__cidade" data-name="${name}, ${sys.country}">
                    <span class="cidade">${name}</span>
                    <sup class="abrev__pais">${sys.country}</sup>
                </h2>
                <span class="temperatura__cidade">${Math.round(main.temp)}<sup class="celsius__simbolo">°c</sup>
                <p class="info__detail">Máxima: ${Math.round(main.temp_max)}°c</p>
                <p class="info__detail">Miníma: ${Math.round(main.temp_min)}°c</p>
                <p class="info__detail">Umidade: ${Math.round(main.humidity)}%</p>
                </span>
                <figure>
                    <img src=${icon} Alt=${weather[0]["main"]} class="icone__previsao--tempo">
                    <figcaption class="descricao_tempo">${weather[0]["description"]}</figcaption>
                </figure>
            `;
            li.innerHTML = containerDadosTempo;
            list.appendChild(li);
            cidadePais.push(`${name}${sys.country}`);
            inputCidade.value = "";
            inputCidade.focus();
            console.log(data);
            }
        }) 
        .catch(() => {
            document.getElementById("mensagem").innerHTML = "Opa! Digite um nome válido para cidade😩";
            inputCidade.value = "";
            inputCidade.focus();
        })
})