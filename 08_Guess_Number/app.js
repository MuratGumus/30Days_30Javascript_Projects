let min = 1;
let max = 10;
let kazananSayi = rastgeleKazananSayi(min, max);
let tahminHakki = 3;
const minSayi = document.querySelector(".min");
const maxSayi = document.querySelector(".max");
const tahminInput = document.querySelector("#tahmin-input");
const tahminBtn = document.querySelector("#tahmin-btn");
const oyun = document.querySelector(".oyun");
const mesaj = document.querySelector(".mesaj");
minSayi.textContent = min;
maxSayi.textContent = max;
oyun.addEventListener("mousedown", function (e) {
    if (e.target.className === "tekrar-oyna") {
        window.location.reload();
    }
});
tahminBtn.addEventListener("click", function () {
    const tahminEdilenSayi = tahminInput.value;
    if (
        tahminEdilenSayi === "" ||
        tahminEdilenSayi < min ||
        tahminEdilenSayi > max
    ) {
        mesajYazdir(
            "Hata! Boş alan biraktiniz veya min-max sayi araliğini geçtiniz.",
            "red"
        );
    } else if (tahminEdilenSayi == kazananSayi) {
        oyunBitti(false, "Başarili! Doğru tahmin...");
    } else {
        tahminHakki = tahminHakki - 1;
        if (tahminHakki == 0) {
            oyunBitti(
                true,
                `Tahmin hakkiniz kalmadi... Kazanan Sayi: ${kazananSayi}`
            );
            mesajYazdir("Tahmin hakkiniz kalmadi...", "red");
        } else {
            mesajYazdir(`Tahmin hakkiniz ${tahminHakki} kaldi...`, "red");
        }
    }
});
function oyunBitti(kontrol, msj) {
    let color;
    kontrol == true ? (color = "red") : (color = "green");
    tahminInput.disabled = true;
    tahminInput.style.borderColor = color;
    mesajYazdir(msj, color);
    tahminBtn.textContent = "Tekrar Oyna";
    tahminBtn.className = "tekrar-oyna";
}
function mesajYazdir(msj, color) {
    mesaj.style.color = color;
    mesaj.textContent = msj;
}
function rastgeleKazananSayi(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
