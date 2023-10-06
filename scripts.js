function limpaTela() {
    const display = document.querySelector(".display").value = "";
    console.log("limpei")
}

function PosNeg() {
    const display = document.querySelector(".display").value
    document.querySelector(".display").value = display * -1 /*como a variável é uma constante, estou pegando no doc. html (document.) c/ o querySelector na classe (".display") o valor 
    e transformando em valor em + ou - */
}

function AddCaracter(caracter) {
    const display = document.querySelector(".display").value
    document.querySelector(".display").value = display + caracter /* essa funçao irá add o caracter no display */
}
function Calcular() {
    const display = document.querySelector(".display").value
    document.querySelector(".display").value = eval(display)
}

