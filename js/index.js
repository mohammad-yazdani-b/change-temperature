let $ = document;

let resultTemp = $.querySelector(".change-temp");

// celsius convert

function celsiusToFahrenheit(c) {
  let f = c * 1.8 + 32;
  resultTemp.innerHTML = `${c}°C to ${f.toFixed(2)}°F`;
}

// fahrenheit convert

function fahrenheitToCelsius(f) {
  let c = (f - 32) / 1.8;
  resultTemp.innerHTML = `${f}°F to ${c.toFixed(2)}°C`;
}

let convertBTN = $.querySelector(".convert");
let restBTN = $.querySelector(".reset");
let changeBTN = $.querySelector(".change");
let titleConvert = $.querySelector(".title-convert");
let inputtemp = $.querySelector(".input-value");

// change event

changeBTN.addEventListener("click", () => {
  if (titleConvert.innerHTML === "converter °C to °F") {
    titleConvert.innerHTML = "converter °F to °C";
    inputtemp.setAttribute("placeholder", "°F");
    resultTemp.innerHTML = "";
  } else {
    titleConvert.innerHTML = "converter °C to °F";
    inputtemp.setAttribute("placeholder", "°C");
    resultTemp.innerHTML = "";
  }
});

// reset event

restBTN.addEventListener("click", () => {
  inputtemp.value = "";
  resultTemp.innerHTML = "";
});

// convert event

convertBTN.addEventListener("click", () => {
  let inputValue = inputtemp.value;
  if (inputtemp.value === "") {
    resultTemp.innerHTML = "please inter the correct value";
    resultTemp.style.color = "#851f1a";
  } else {
    if (titleConvert.innerHTML === "converter °C to °F") {
      celsiusToFahrenheit(inputValue);
      resultTemp.style.color = "#bebe1d";
    } else {
      fahrenheitToCelsius(inputValue);
      resultTemp.style.color = "#bebe1d";
    }
  }
});
