const api = {
    endpoint: "https://api.openweathermap.org/data/2.5/",
    key: "6c74283324cd69fdc5b82ed21e8768f0"
}

const input = document.querySelector("#input");
input.addEventListener("keydown", enter);

function enter(e){
    if(e.keyCode === 13){
        getInfo(input.value);
    }
}


async function getInfo(data){
    const res = await fetch(`${api.endpoint}weather?q=${data}&units=metric&appID=${api.key}`);
    const result = await res.json();
    displayResult(result);
}

function displayResult(result){
    let city = document.querySelector("#city");
    city.textContent = `${result.name}, ${result.sys.country}`;

    let temperature = document.querySelector("#temperature");
    temperature.innerHTML = `${Math.round(result.main.temp)}<span>°C</span>`;

    let feelsLike = document.querySelector("#feelsLike");
    feelsLike.innerHTML ="Feels like: " + `${Math.round(result.main.feels_like)}<span>°C</span>`;

    let conditions = document.querySelector("#conditions");
    conditions.textContent = `${result.weather[0].main}`;

    let variation = document.querySelector("#variation");
    variation.innerHTML = "Min: " + `${Math.round(result.main.temp_min)} <span>°C</span>,` + "  " + "  Max: " + `${Math.round(result.main.temp_max)} <span>°C</span>`; 

    getOurDate();
}

function getOurDate(){
    const myDate = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let day = days[myDate.getDay()];
    let month = months[myDate.getMonth()];
    let todayDate = myDate.getDate();
    let year = myDate.getFullYear();

    let showDate = document.querySelector("#date");
    showDate.textContent = `${day},` + " " + `${month}` + " " + `${todayDate},` + " " + `${year}`;
}