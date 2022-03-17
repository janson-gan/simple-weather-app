const apiKey = config.apiKey;

// Set default temperature to Singapore start.
const weatherApi = "https://api.openweathermap.org/data/2.5/weather?q=singapore&appid=" + apiKey +"&units=metric";
const weatherIconUrl = "http://openweathermap.org/img/wn/";

// retrieve data from api. Server will response back a promise back to client.
// Then get the response and display in json format.
// Get the json file and display to screen.
fetch(weatherApi).then(response => response.json()).then(info => {
    let temperature = Math.round(info.main.temp);
    let tempIcon = weatherIconUrl + info.weather[0].icon + "@2x.png";
    let tempDescription = (info.weather[0].description);
    let maxTemp = Math.round(info.main.temp_max);
    let minTemp = Math.round(info.main.temp_min);

    //Display info to html
    document.querySelector("#temperature").innerHTML = temperature + " &#8451;";
    document.querySelector("#maxTemp").innerHTML = maxTemp + " &#8451;";
    document.querySelector("#minTemp").innerHTML = minTemp + " &#8451;";
    document.querySelector("#weatherIcon").setAttribute("src", tempIcon);
    document.querySelector("#tempDescription").innerHTML = tempDescription;
});
// Set default temperature to Singapore end.

//Function to query country temperature
function weatherQuery() {
    const country = document.querySelector("#country").value;
    const weatherApi = "https://api.openweathermap.org/data/2.5/weather?q=" + country + "&appid=" + apiKey +"&units=metric";

    fetch(weatherApi).then(response => response.json()).then(info => {

        let temperature = Math.round(info.main.temp);
        let tempIcon = weatherIconUrl + info.weather[0].icon + "@2x.png";
        let tempDescription = (info.weather[0].description);
        let maxTemp = Math.round(info.main.temp_max);
        let minTemp = Math.round(info.main.temp_min);

        //Display info to html
        document.querySelector("#temperature").innerHTML = temperature + " &#8451;";
        document.querySelector("#maxTemp").innerHTML = maxTemp + " &#8451;";
        document.querySelector("#minTemp").innerHTML = minTemp + " &#8451;";
        document.querySelector("#weatherIcon").setAttribute("src", tempIcon);
        document.querySelector("#tempDescription").innerHTML = tempDescription;
        document.querySelector("h1").innerHTML = country;
    });
}