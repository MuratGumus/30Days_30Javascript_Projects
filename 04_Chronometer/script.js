// * let [milliseconds, seconds, minutes, hours] = [0,0,0,0] //* alternatif tanımlama

let milliseconds = 0,
    seconds = 0,
    minutes = 0,
    hours = 0,
    flag = null,
    counter = 0;

console.log(milliseconds);
console.log(seconds);
console.log(minutes);
console.log(hours);

let timerRef = document.querySelector(".timer-display");
let id = document.getElementById('id');

document.getElementById("start-timer").addEventListener("click", () => {
    if (flag !== null) {
        clearInterval(flag);
    }
    flag = setInterval(displayTimer, 10);
});


function displayTimer() {
    milliseconds += 10;
    seconds = milliseconds == 1000 ? (seconds+1) %60 : seconds
    minutes = seconds == 60 ? (minutes +1) %60 : minutes
    hours = minutes==60 ? (hours+1)%24 : hours
    milliseconds = milliseconds == 1000 ? 0 : milliseconds

    let h = String(hours).padStart(2, "0");
    let m = String(minutes).padStart(2, "0");
    let s = String(seconds).padStart(2, "0");
    let ms = String(milliseconds).padStart(3, "0");

    timerRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}

document.getElementById("pause-timer").addEventListener("click", () => {
    clearInterval(flag);
});

document.getElementById("reset-timer").addEventListener("click", () => {
    clearInterval(flag);
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    timerRef.innerHTML = "00 : 00 : 00 : 000";
});

//? istek halinde tur süresi olarak
document.getElementById("tur-timer").addEventListener("click", () => {
    // clearInterval(flag);
    counter++;
    console.log(`${counter}. tur süresi:  ${hours} saat: ${minutes} dakika : ${seconds} saniye : ${milliseconds} ms `);
});
