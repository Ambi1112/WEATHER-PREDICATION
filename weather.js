let city = document.getElementById("city_input");
let type= document.getElementById("description");
let temp= document.getElementById("temperature");
let country= document.getElementById("country");
let image= document.getElementById("image");
let input= document.getElementById("city_input").value;
let API = "b74751c73ddfec52f547b3172f0ff5f5";
const data= async function (){
    let getdata= await fetch(`https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=${API}& units=metric`)
    console.log(getdata);
    let jsondata= await getdata.json();
    console.log(jsondata);
    console.log(jsondata.name);
    city_input.innerHTML=jsondata.name;
    description.innerHTML=jsondata.main.temperatur;
    temperatur.innerHTML=jsondata.main.weather[0].main;

      
}
data();