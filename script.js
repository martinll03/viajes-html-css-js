let n_aleatorio = getNumberRandom();
let elementmsj =  document.getElementById("mensaje");
function chequearResultado(){
    let number = parseInt(document.getElementById("numeroEntrada").value);
    let messaje ='';
    elementmsj.style.color="black";
    if(number<0||number>100||isNaN(number)){
        messaje ='valor no valido'+number;
        elementmsj.style.color="red";
    }else if(n_aleatorio===number){
        messaje = 'Número a acertado, gansate el juego!!! '+n_aleatorio;
        n_aleatorio = getNumberRandom();
        document.getElementById("numeroEntrada").value='';
        elementmsj.style.color="green";
    }else if(n_aleatorio>number){
        messaje = 'el número ingresado es menor!!! '+n_aleatorio;
    }else if(n_aleatorio<number){
        messaje = 'el número ingresado es mayor!!! '+n_aleatorio;
    }
    elementmsj.textContent = messaje;
}
function getNumberRandom(){
    return Math.floor(Math.random() * 100) + 1;
}
function verificarEnter(event){
    if(event.key==='Enter'){
        chequearResultado();
    }

    }
console.log(n_aleatorio);