let visor = document.getElementById("visor")

let btn0 = document.getElementById("btn-0")
let btn1 = document.getElementById("btn-1")
let btn2 = document.getElementById("btn-2")
let btn3 = document.getElementById("btn-3")
let btn4 = document.getElementById("btn-4")
let btn5 = document.getElementById("btn-5")
let btn6 = document.getElementById("btn-6")
let btn7 = document.getElementById("btn-7")
let btn8 = document.getElementById("btn-8")
let btn9 = document.getElementById("btn-9")

let btnClean = document.getElementById("btn-clean")
let btnAbre = document.getElementById("btn-abre-parentese")
let btnFecha = document.getElementById("btn-fecha-parentese")
let btnDividir = document.getElementById("btn-dividir")
let btnMultiplicar = document.getElementById("btn-multiplicar")
let btnSubtrair = document.getElementById("btn-subtrair")
let btnSomar = document.getElementById("btn-somar")
let btnPonto = document.getElementById("btn-ponto")
let btnApagar = document.getElementById("btn-apagar")
let btnIgual = document.getElementById("btn-igual")

function mostrar(valor) {
    if (visor.value !== "0") {
        visor.value += valor
    } else {
        visor.value = valor
    }
}

function calcular() {
    visor.value = eval(visor.value)
}

btn0.addEventListener("click", function () { mostrar(this.value) })
btn1.addEventListener("click", function () { mostrar(this.value) })
btn2.addEventListener("click", function () { mostrar(this.value) })
btn3.addEventListener("click", function () { mostrar(this.value) })
btn4.addEventListener("click", function () { mostrar(this.value) })
btn5.addEventListener("click", function () { mostrar(this.value) })
btn6.addEventListener("click", function () { mostrar(this.value) })
btn7.addEventListener("click", function () { mostrar(this.value) })
btn8.addEventListener("click", function () { mostrar(this.value) })
btn9.addEventListener("click", function () { mostrar(this.value) })

btnAbre.addEventListener("click", function () { mostrar(this.value) })
btnFecha.addEventListener("click", function () { mostrar(this.value) })
btnDividir.addEventListener("click", function () { mostrar(this.value) })
btnMultiplicar.addEventListener("click", function () { mostrar("*") })
btnSomar.addEventListener("click", function () { mostrar(this.value) })
btnSubtrair.addEventListener("click", function () { mostrar(this.value) })
btnPonto.addEventListener("click", function () { mostrar(this.value) })

btnClean.addEventListener("click", function () {
    visor.value = "0"
})
btnApagar.addEventListener("click", function () {
    visor.value = visor.value.slice(0, -1)
})
btnIgual.addEventListener("click", function () { calcular() })