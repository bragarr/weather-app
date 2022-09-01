const formulario = document.querySelector(".campo__busca");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    const inputCidade = document.getElementById("campo__busca");
    const apiKey = "13e2d569c4b820d2080738f98d8b6b1e";
    const inputVal = inputCidade.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })


})