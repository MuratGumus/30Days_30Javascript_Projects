const play = document.querySelector(".btn1");
const reset = document.querySelector(".btn2");
const audio = document.querySelector(".audio");
const clock = document.querySelector("p");
const bg = document.querySelector(".container");
// ! ssati alacağımız tag
//! burası globel alanıdır

let min = 0;
let sec = 0;
let mSec = 0;

let run = false;
let timer;

const watchTimer = () => {
  mSec++;
  if (mSec == 100) {
    sec++;
    mSec = 0;
  }
  if (sec == 60) {
    min++;
    sec = 0;
  }

  min = String(min).length < 2 ? "0" + min : min;
  sec = String(sec).length < 2 ? "0" + sec : sec;
  mSec = String(mSec).length < 2 ? "0" + mSec : mSec;

  clock.textContent = `${min}:${sec}:${mSec}`;
};

play.addEventListener("click", () => {
  run = !run; //! run başlangıç değeri false idi ben bunu değerini true olarak değiştirdim
  if (run) {
    renk();
    timer = setInterval(watchTimer, 10);
    play.innerHTML = `<i class="fa-solid fa-circle-pause"></i>`;

    audio.play();
  } else {
    audio.pause();
    clearInterval(timer);
    play.innerHTML = `<i class="fa-solid fa-circle-play"></i>`;
  }
});

reset.addEventListener("click", () => {
  min = 0;
  sec = 0;
  mSec = 0;
  clearInterval(timer);
  audio.pause();
  clock.innerHTML = `0${min}:0${sec}:0${mSec}`;
  play.innerHTML = `<i class="fa-solid fa-circle-play"></i>`;
  run = false;
});

play.onmouseover = function () {
  play.style.color = "red";
  play.style.transform = "scale(1.4, 1.4)";
};
play.onmouseout = function () {
  play.style.color = "black";
  play.style.transform = "scale(1, 1)";
};
reset.onmouseover = function () {
  reset.style.color = "red";
  reset.style.transform = "scale(1.4, 1.4)";
};
reset.onmouseout = function () {
  reset.style.color = "black";
  reset.style.transform = "scale(1, 1)";
};

const renk = () => {

   setTimeout(() => {
    bg.style.backgroundColor = "darkorange";
    setTimeout(() => {
      bg.style.backgroundColor = "yellowgreen";
      setTimeout(() => {
        bg.style.backgroundColor = "blue";
        setTimeout(() => {
          bg.style.backgroundColor = "gray";
          setTimeout(() => {
            bg.style.backgroundColor = "lime";
            setTimeout(() => {
              bg.style.backgroundColor = "aqua";
              setTimeout(() => {
                bg.style.backgroundColor = "cadetblue";
                setTimeout(() => {
                  bg.style.backgroundColor = "coral";
                  setTimeout(() => {
                    bg.style.backgroundColor = "cornslik";
                    setTimeout(() => {
                      bg.style.backgroundColor = "crimson";
                      setTimeout(() => {
                        bg.style.backgroundColor = "yellow";
                        setTimeout(() => {
                          bg.style.backgroundColor = "darkorange";
                        }, 5000);
                      }, 5000);
                    }, 5000);
                  }, 5000);
                }, 5000);
              }, 5000);
            }, 5000);
          }, 5000);
        }, 5000);
      }, 5000);
    }, 5000);
  }, 5000);
};
