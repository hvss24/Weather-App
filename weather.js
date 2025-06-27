let input = document.querySelector("input");
let button = document.querySelector("button");
let weathercard = document.querySelector("#weathercard");


button.addEventListener("click", async ()=>{
    let city = input.value.trim();
    if (!city) return;

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b8417e1cc0f31ff990e7783145023ca9&units=metric`;
    let result = await weather(url);
    weathercard.innerHTML = "";
    let card = document.createElement("div");
    card.className = "card";
    
    if (Object.keys(result).length > 0){
        card.innerHTML=`<h2>Weather in ${city}</h2>
                        <p>Temperature : ${result.temp} °C</p>
                        <p>Feels Like : ${result.feels_like} °C</p>
                        <p>Minimum Temperature : ${result.temp_min} °C</p>
                        <p>Maximum Temperature : ${result.temp_max} °C</p>
                        <p>Pressure : ${result.pressure} hPa</p> 
                        <p>Humidity: ${result.humidity} %</p>
                        ${result.sea_level ? `<p>Sea Level : ${result.sea_level} hPa</p>` : ""}
                        ${result.grnd_level ? `<p>Ground Level : ${result.grnd_level} hPa</p>` : ""}`
    }
    weathercard.appendChild(card);
});



async function weather(url){
    try{
       main = await axios.get(url);
       return main.data.main;
    }
    catch(err){
       alert("City not found or API Error.")
       return {};
    }
}



