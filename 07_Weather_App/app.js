const form = document.querySelector("form");
const input = document.querySelector("#input-alani");
const message = document.querySelector(".msg-hata");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // console.log(e.target)
    // console.log(e.currentTarget)
    // form.reset()

    // e.target.reset();
    // click se event
    // e.currentTarget.reset()

    getWeatherDataApi();

    input.value = "";
});

const getWeatherDataApi = async () => {
    const apiKey = "66d68b83cc1917c740dcc7ba91c868a1";
    const cityName = input.value;

    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric&lang=tr`;

    try {
        const res = await fetch(URL);
        // console.log(res)
        if (!res.ok) {
            throw new Error("err");
        }
        const data = await res.json();
        weatherDom(data);
    } catch (err) {
        console.log(err);
    }
};

const weatherDom = (data) => {
    const { name, weather, main, wind, sys } = data;

    //  console.log(weather, name, main.tepm, main.feels_like, sys.country, wind)

    const cardImg = document.querySelector(".card-img-top");
    const container = document.querySelector(".container");
    // container.innerHTML = `
    // <div class="card p-4 " style="width: 18rem;">
    // <!--* Resim Alanı -->
    // <img src="" class="card-img-top" alt="...">
    // <!--* Şehir-Ulke-Alani -->
    // <div class="card-body">
    //   <h2 class="card-title " id="şehir-adi">${name} </h2><span class="ülke" id="ülke">${sys.country}</span>
    // </div>
    // <ul class="list-group list-group-flush h3">
    //   <li class="list-group-item ">
    //       <div class="div">
    //             <p class="hava-durumu-derece"> <span id="derece" class="h1">${main.temp} </span></p> <i class="fa-regular fa-circle"></i>  <i class="fa-solid fa-c"></i>
    //      </div>
    //   </li>
    //   <li class="list-group-item">
    // <div class="hava-nasil mt-3">
    //       <p class="hava-nasil-text text-capitalize" id="hissedilen-hava">${main.feels_like}</p>
    // </div>
    // </li>
    //   <li class="list-group-item">
    //       <div class="div">
    //             <p class="hava-durumu-derece"> <span id="hissedilen-derece" class="h1"> ${weather[0].description} </span></p> <i class="fa-regular fa-circle"></i>  <i class="fa-solid fa-c"></i>
    //      </div>
    //   </li>
    // </ul>

    // <div class="card-body d-flex justify-content-between border  p-4 ">
    // <div class="rüzgar-hizi d-flex align-items-center gap-1 ">
    // <img src="indir.png" alt="" width="40%" class="mt-4">
    //              <div class=" mt-4">
    //                    <div class="d-flex align-items-center">
    //                         <span class="wind h1" id="rüzgar-hizi">${wind.speed} </span> <strong class="h3 mx-2">km/h</strong>
    //                   </div>
    //              </div>

    //             </div>

    // <div class="nem-durumu d-flex align-items-center mx-5  gap-1 ">
    //       <img src="images.jpg" alt="" width="50%" class="mt-4">

    //       <div class="d-flex mt-4">
    //             <span class="wind h1" id="nem-orani">${main.humidity}</span> <span class="h1">%</span>
    //       </div>
    // </div>

    // </div>

    // </div>
    // `

    // const {name, weather, main, wind, sys } = data;
    const şehir = document.querySelector("#şehir-adi");
    // const ülke = document.querySelector(".ülke")
    const havaDerece = document.querySelector("#derece");
    const havaDescription = document.querySelector("#hissedilen-hava");
    const hissedilenHavaDerece = document.querySelector("#hissedilen-derece");
    const rüzgarHizi = document.querySelector("#rüzgar-hizi");
    const nemOrani = document.querySelector("#nem-orani");

    şehir.innerText = name;
    ülke.innerHTML = data.sys.country;
    havaDerece.innerText = main.temp;
    havaDescription.innerText = weather[0].description;
    hissedilenHavaDerece.innerText = main.feels_like;
    rüzgarHizi.innerText = wind.speed;
    nemOrani.innerText = main.humidity;

    if (weather[0].main == "Clouds") {
        cardImg.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
        cardImg.src = "images/clear.png";
    } else if (data.weather[0].main == "Rain") {
        cardImg.src = "images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
        cardImg.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
        cardImg.src = "images/mist.png";
    }
};
