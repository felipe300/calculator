
// Obtiene el valor de cualquier botón
function getValue (buttonValue) {
	var key = document.getElementById(buttonValue.innerText).value
	var screen = document.getElementById("screen").innerText
	document.getElementById('screen').innerHTML = screen + key
}

// Ingresa el valor del botón cero.
function getZero () {
	var key = "0"
	var screen = document.getElementById("screen").innerHTML
	document.getElementById('screen').innerHTML = screen + key
}

//Agrega un decimal.
function addDecimal () {
	var screen = document.getElementById("screen").innerHTML
	document.getElementById("screen").innerHTML = screen + "."
}

//Borra o limpia toda la pantalla.
function clearScreen () {
	document.getElementById("screen").innerHTML = "0"
}

// calculate without using eval
// https://javascript.info/new-function
function evil (fn) {
	return new Function(`return ${fn}`)()
}

//Resuelve las operaciones aritméticas
function solve () {
	var screen = document.getElementById("screen").innerHTML

	var screen = document.getElementById("screen").innerHTML = evil(screen)
}
