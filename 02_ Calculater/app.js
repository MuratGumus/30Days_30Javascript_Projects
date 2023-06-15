const previous = document.querySelector(".previous-display");
const current = document.querySelector(".current-display");
const buton = document.querySelector(".buttons-container");

let altsatır = ''
let üstsatır = ''
let operator= ''

buton.addEventListener('click',(e)=>{
   if(e.target.classList.contains('num')){
    sayıyıAl(e.target.textContent);
    yazdır()
   };

   if(e.target.classList.contains('operator')){
    choose(e.target.textContent);
    yazdır();
   };

   if(e.target.classList.contains('equal')){
    hesapla();
    yazdır();
   };

   if (e.target.classList.contains("pm")){
    if(!altsatır) return;
    altsatır *= -1;
    yazdır();
   };

   if (e.target.classList.contains("percent")){
    if(!altsatır) return;
    altsatır = altsatır /100;
    yazdır();
   };

   if(e.target.classList.contains('ac')){
    altsatır='';
    üstsatır='';
    operator='';
    yazdır();
   };


});
const sayıyıAl = (num)=> {
    if (altsatır==='0' && num === "0") return;
    if (altsatır==='0' && num !== ".") {

      altsatır=num;
      return
    };
       
    if(num ==='.' && altsatır.includes('.'))return;
    if(altsatır.length>10)return;
    altsatır += num;
    
};
const yazdır = ()=> {
    current.textContent = altsatır;
    previous.textContent = `${üstsatır} ${operator}` ;
};
const choose = (op)=>{
    operator=op;
    üstsatır = altsatır ;
    altsatır=''
};


const hesapla = () => {
let calculation=0;
const sayı1 = Number(üstsatır);
const sayı2 = Number(altsatır);

    switch (operator) {
      case "+":
        calculation = sayı1 + sayı2;
        break;
      case "-":
        calculation = sayı1 - sayı2;
        break;
      case "x":
        calculation = sayı1 * sayı2;
        break;
      case "÷":
        calculation = sayı1 / sayı2;
        break;

      default:
        return;
    };
   altsatır = calculation;
   üstsatır='';
   operator='';
};
 
 