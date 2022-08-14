const inputEl = document.getElementById("input-num")
const BtnEl = document.getElementById("convert-btn")
let P1 = document.getElementById("p1")
let P2 = document.getElementById("p2")
let P3 = document.getElementById("p3")
BtnEl.addEventListener("click",function(){
    let mToFeet = inputEl.value * 3.28084
    let feetToM = inputEl.value * 0.3048
    P1.innerHTML = `${inputEl.value} meters = ${mToFeet.toFixed(3)} feets | ${inputEl.value} feets = ${feetToM.toFixed(3)} meters`
    let lToGallon = inputEl.value * 0.264172
    let gToLiter = inputEl.value * 3.78541103373138
    P2.innerHTML = `${inputEl.value} liters = ${lToGallon.toFixed(3)} gallons | ${inputEl.value} gallons = ${gToLiter.toFixed(3)} liters`
    let kToPounds = inputEl.value * 2.20462
    let poundsToK = inputEl.value * 0.453592
    P3.innerHTML = `${inputEl.value} kilos = ${kToPounds.toFixed(3)} pounds | ${inputEl.value} pounds = ${poundsToK.toFixed(3)} kilos`
})