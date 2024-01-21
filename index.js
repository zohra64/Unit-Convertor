let convertBtn = document.getElementById("convert-btn");
let inputEl = document.getElementById("input");
let lengthEl = document.getElementById("length-el");
let volumeEl = document.getElementById("volume-el");
let massEl = document.getElementById("mass-el");

const meterToFeet =  3.281;
const feetToMeter = 0.3048;
const literToGallon =  0.264;
const gallonToLiter = 3.785411784;
const kiloToPound =  2.204;
const poundToKilo = 0.453592;


convertBtn.addEventListener("click", function(){
    let baseValue = inputEl.value;
    lengthEl.textContent = `${baseValue} meter = ${(baseValue * meterToFeet).toFixed(3)} feets | ${baseValue} feet = ${(baseValue * feetToMeter).toFixed(3)} foots `;
    volumeEl.textContent = `${baseValue} liters = ${(baseValue * literToGallon).toFixed(3)} Gallons | ${baseValue} Gallons = ${(baseValue * gallonToLiter).toFixed(3)} liters`
    massEl.textContent = `${baseValue} kilos = ${(baseValue * kiloToPound).toFixed(3)} pounds | ${baseValue} pounds = ${(baseValue * gallonToLiter).toFixed(3)} kilos`

});

