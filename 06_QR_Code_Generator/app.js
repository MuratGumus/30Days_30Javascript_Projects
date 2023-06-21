const qrData = document.getElementById("qrData");
const test = document.getElementById("test");

const frm = document.querySelector(".frm");

const qrCode = document.querySelector(".qr_code");

const err = "Something Wrong !";

//? ADDEVENTLİSTENER İLE TEKTİKLEME YAP
frm.addEventListener("submit", (e) => {
    e.preventDefault();

    //qrcode oluştur
    createQR(qrData.value);
});

//? QR CODE OLUŞTUR
const createQR = (talep) => {
    fetch(
        `https://api.qrserver.com/v1/create-qr-code/?size150x150=&data=${talep}`
    )
        .then((response) => {
            if (!response.ok) {
                domaHataYaz();
            }

            return response;
        })
        .then((data) => domaYaz(data.url));
};

//? QR CODE ÇIKTISINI DOMA YAZ
const domaYaz = (data) => {
    const qrLink = document.getElementById("qrLink");
    const qrImg = document.getElementById("qrImage");

    qrLink.href = data;
    qrImg.src = data;

    qrData.value = "";
    qrData.focus();
};

//? QR CODE ÇIKTISINI DOMA YAZ
const domaHataYaz = () => {
    qrCode.innerHTML += `
    
    <p id="data">${err}</p>

    `;
};
