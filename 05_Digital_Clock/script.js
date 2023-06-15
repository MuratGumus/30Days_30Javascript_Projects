// ? Dom ile çektik
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const seconds = document.getElementById('seconds');


const callBack = ()=>{
    //? Güncel zamanı aldık
    const dateNow = new Date();
    let hr = dateNow.getHours();
    let min = dateNow.getMinutes();
    let sec = dateNow.getSeconds()

// ? Zaman bilgilerini yazdıracağımız format haline getirdik
    hr = hr.toString().padStart(2, "0")
    min = min.toString().padStart(2, "0")
    sec = sec.toString().padStart(2, "0")

// ? Ekrana yazdırdık
    hour.textContent = hr;
    minute.textContent = min;
    seconds.textContent = sec;
}
const clock = setInterval(callBack);


// * padStart' incelemek isteyenler için w3school linki
// * https://www.w3schools.com/jsref/jsref_string_padstart.asp