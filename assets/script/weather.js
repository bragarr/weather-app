const formulario = document.querySelector(".campo__busca");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    const inputCidade = document.getElementById("campo__busca");
    const apiKey = "13e2d569c4b820d2080738f98d8b6b1e";
    const inputVal = inputCidade.value;
    const list = document.getElementById("list");
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const {main, name, sys, weather } = data;
            const icon = `https://openweathermap.org/img/wn/${weather[0]["icon"]}@2x.png`;

            const li = document.createElement("li");
            li.classList.add("dados__cidade");
            const paginaWeb = `
                <h2 class="nome__cidade" data-name="${name}, ${sys.country}">
                    <span class="cidade">${name}</span>
                    <sup class="abrev__pais">${sys.country}</sup>
                </h2>
                <span class="temperatura__cidade">${Math.round(main.temp)}<sup class="celsius__simbolo">°c</sup>
                </span>
                <figure>
                    <img src=${icon} Alt=${weather[0]["main"]} class="icone__previsao--tempo">
                    <figcaption class="descricao_tempo">${weather[0]["description"]}</figcaption>
                </figure>
            `;
            li.innerHTML = paginaWeb;
            list.appendChild(li);
            console.log(data);
        })  
})