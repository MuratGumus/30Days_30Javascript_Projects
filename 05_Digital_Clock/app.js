const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const seconds = document.getElementById('seconds');

const clock = setInterval(()=>{
    const dateNow = new Date();
    let hr = dateNow.getHours();
    let min = dateNow.getMinutes()
    let sec = dateNow.getSeconds();

    hr = hr.toString().padStart(2, "0")
    min = min.toString().padStart(2, "0")
    sec = sec.toString().padStart(2, "0")

    const timeString = `${hr}:${min}:${sec}:`;
    hour.textContent = hr;
    minute.textContent = min;
    seconds.textContent = sec;
}, 1000);