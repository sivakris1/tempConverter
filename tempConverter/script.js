function convertTemp() {
  const temp = parseFloat(document.getElementById("inputTemp").value);
  const from = document.getElementById("unitFrom").value;
  const to = document.getElementById("unitTo").value;

  if (isNaN(temp)) {
    document.getElementById("result").innerText = "Please enter a valid number.";
    return;
  }

  let result;

  // Convert input to Celsius first
  let tempInCelsius;
  if (from === "celsius") tempInCelsius = temp;
  else if (from === "fahrenheit") tempInCelsius = (temp - 32) * (5 / 9);
  else if (from === "kelvin") tempInCelsius = temp - 273.15;

  // Convert Celsius to target
  if (to === "celsius") result = tempInCelsius;
  else if (to === "fahrenheit") result = tempInCelsius * 9 / 5 + 32;
  else if (to === "kelvin") result = tempInCelsius + 273.15;

  document.getElementById("result").innerText =
    `${temp} ${from} = ${result.toFixed(2)} ${to}`;
}
