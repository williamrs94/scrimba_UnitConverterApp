/* 
1 meter = 3,28084 feet
1 feet = 0,3048 meter

1 liter = 0,264172 gallon 
1 galão = 3,78541 litros

1 kg = 2,20462 pounds
1 pound = 0,453592 kg
*/

let inputNumb = document.getElementById('inputNumb')
let meterFeetNumb = document.getElementById('meterFeetNumb')
let feetMeterNumb = document.getElementById('feetMeterNumb')
let litersGallonsNumb = document.getElementById('litersGallonsNumb')
let gallonsLitersNumb = document.getElementById('gallonsLitersNumb')
let kilogramsPoundsNumb = document.getElementById('kilogramsPoundsNumb')
let poundsKilogramsNum = document.getElementById('poundsKilogramsNumb')


/* uma função para calcular tudo */
function calculateBtn() {
    let resultMeterFeet = 3.28084 * inputNumb.value
    meterFeetNumb.textContent = `${inputNumb.value} meters = ${resultMeterFeet.toFixed(3).replace('.',',')} feet`
    let resultFeetMeter = inputNumb.value * 0.3048
    feetMeterNumb.textContent = ` | ${inputNumb.value} feet = ${resultFeetMeter.toFixed(3).replace('.',',')} meters`
    let resultLitersGallons = inputNumb.value * 0.264172 
    litersGallonsNumb.textContent = `${inputNumb.value} liters = ${resultLitersGallons.toFixed(3).replace('.',',')} gallons`
    let resultGallonsLiters = inputNumb.value * 3.78541
    gallonsLitersNumb.textContent = ` | ${inputNumb.value} gallons = ${resultGallonsLiters.toFixed(3).replace('.',',')} liters`
    let resultKilogramsPounds = inputNumb.value * 2.20462
    kilogramsPoundsNumb.textContent = `${inputNumb.value} kilos = ${resultKilogramsPounds.toFixed(3).replace('.',',')} pounds`
    let resultPoundsKilograms = inputNumb.value * 0.453592
    poundsKilogramsNumb.textContent = ` | ${inputNumb.value} pounds = ${resultPoundsKilograms.toFixed(3).replace('.',',')} kilos`
}



/* Comecei fazendo assim como está aqui embaixo para evoluir para o que está aqui em cima */


/* _____________________ Parte Length (Meter/Feet) */
/* let meterFeetNumb = document.getElementById('meterFeetNumb')
let feetMeterNumb = document.getElementById('feetMeterNumb')

function calculateMeterFeet() {
    let resultMeterFeet = 3.28084 * inputNumb
    meterFeetNumb.textContent = `20 meters = ${resultMeterFeet.toFixed(3).replace('.',',')} feet`
}
calculateMeterFeet()


function calculateFeetMeter() {
    let resultFeetMeter = inputNumb * 0.3048
    feetMeterNumb.textContent = ` | 20 feet = ${resultFeetMeter.toFixed(3).replace('.',',')} meters`
}
calculateFeetMeter() */

/* _______________________ Parte Volume (Liters/Gallons) */
/* let litersGallonsNumb = document.getElementById('litersGallonsNumb')
let gallonsLitersNumb = document.getElementById('gallonsLitersNumb')

function calculateLitersGallons() {
    let resultLitersGallons = inputNumb * 0.264172 
    litersGallonsNumb.textContent = `20 liters = ${resultLitersGallons.toFixed(3).replace('.',',')} gallons`
}
calculateLitersGallons()

function calculateGallonsLiters() {
    let resultGallonsLiters = inputNumb * 3.78541
    gallonsLitersNumb.textContent = ` | 20 gallons = ${resultGallonsLiters.toFixed(3).replace('.',',')} liters`
}
calculateGallonsLiters() */

/* ______________________ Parte Massa (KG / Pounds) */
/* let kilogramsPoundsNumb = document.getElementById('kilogramsPoundsNumb')
let poundsKilogramsNum = document.getElementById('poundsKilogramsNumb')

function calculateKilogramsPounds() {
    let resultKilogramsPounds = inputNumb * 2.20462
    kilogramsPoundsNumb.textContent = `20 kilos = ${resultKilogramsPounds.toFixed(3).replace('.',',')} pounds`
}
calculateKilogramsPounds()

function calculatePoundsKilograms() {
    let resultPoundsKilograms = inputNumb * 0.453592
    poundsKilogramsNumb.textContent = ` | 20 pounds = ${resultPoundsKilograms.toFixed(3).replace('.',',')} kilos`
}
calculatePoundsKilograms() */






