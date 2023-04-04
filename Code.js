 function convertTemp(){
  let inputTemp = document.getElementById("inputTemp").value;
  let inputUnit = document.getElementById("inputUnit").value;
 
  let outputTemp;
  if (inputUnit === "Celsius") {
    outputTemp = (inputTemp * 9/5) + 32;
    outputTemp = outputTemp.toFixed(2) + " Fahrenheit";
  } else {
    outputTemp = (inputTemp - 32) * 5/9;
    outputTemp = outputTemp.toFixed(2) + " Celsius";
  }
 
  // Display output
  document.getElementById("output").innerHTML = outputTemp;
}