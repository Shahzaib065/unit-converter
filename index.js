/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const numEl = document.getElementById("convert-num")
const convertBtn = document.getElementById("convert-btn")

const meterEl = document.getElementById("meter-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

convertBtn.addEventListener("click", () => {
    const numEl = document.getElementById("convert-num");
    const num = Number(numEl.value);
    clickButton(num);
});


function clickButton(num) {
    
    const meterFtNum = meterToFeet(num)
    const feetMtNum = feetToMeter(num)
    
    meterEl.innerHTML = `${num} meters = ${meterFtNum} feet | ${num} feet = ${feetMtNum} meters`
    
    const literGalNum = litersToGallons(num)
    const galLitNum = gallonsToLiters(num)
    
    volumeEl.innerHTML = `${num} gallons = ${literGalNum} liters | ${num} liters = ${galLitNum} gallons`
    
    const kiloLbNum = kiloToPounds(num)
    const poundKiloNum = poundsToKilo(num)
    
    massEl.innerHTML = `${num} kilo = ${kiloLbNum} | ${num} pounds = ${poundKiloNum}`
}

function meterToFeet(num) {
    num = num * 3.281
    return num.toFixed(3)
}

function feetToMeter(num) {
    num = num / 3.281
    return num.toFixed(3)
}

function litersToGallons(num) {
    num = num * 0.264
    return num.toFixed(3)
}

function gallonsToLiters(num) {
    num = num / 0.264
    return num.toFixed(3)
}

function kiloToPounds(num) {
    num = num * 2.204
    return num.toFixed(3)
}

function poundsToKilo(num) {
    num = num / 2.204
    return num.toFixed(3)
}