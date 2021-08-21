let calculate = document.getElementById("calculate");
document.getElementById("history").style.display = "none";
buttons = document.querySelectorAll("button");

let historyData = [];
let expressionData = "";
let result = "";
let addData = [];
let subData = [];
let mulData = [];
let divData = [];

for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    console.log("Button text is", buttonText);
    if (buttonText == "X") {
      buttonText = "*";
      calculate.innerText += buttonText;
    } else if (buttonText == "C") {
      calculate.innerText = "";
      let history = document.getElementById("history");
      if (history.style.display === "block") {
        history.style.display = "none";
      }
    } else if (buttonText == "DEL") {
      newValue = calculate.innerText.slice(0, -1);
      calculate.innerText = newValue;
      console.log(calculateValue);
    } else if (buttonText == "=") {
      try {
        evaluate = eval(calculate.innerText);
        result = evaluate;
        expressionData = calculate.innerText;
        calculate.innerText = result;
        if (
          expressionData.includes("+") &&
          !expressionData.includes("-") &&
          !expressionData.includes("*") &&
          !expressionData.includes("/")
        ) {
          addData.push(expressionData + "=" + result);
          localStorage.setItem("add", JSON.stringify(addData));
          console.log(addData);
          result = "";
          expressionData = "";
        } else if (
          expressionData.includes("-") &&
          !expressionData.includes("+") &&
          !expressionData.includes("*") &&
          !expressionData.includes("/")
        ) {
          subData.push(expressionData + "=" + result);
          localStorage.setItem("sub", JSON.stringify(subData));
          console.log(subData);
          result = "";
          expressionData = "";
        } else if (
          expressionData.includes("*") &&
          !expressionData.includes("-") &&
          !expressionData.includes("+") &&
          !expressionData.includes("/")
        ) {
          mulData.push(expressionData + "=" + result);
          localStorage.setItem("mul", JSON.stringify(mulData));
          console.log(mulData);
          result = "";
          expressionData = "";
        } else if (
          expressionData.includes("/") &&
          !expressionData.includes("-") &&
          !expressionData.includes("*") &&
          !expressionData.includes("+")
        ) {
          divData.push(expressionData + "=" + result);
          localStorage.setItem("div", JSON.stringify(divData));
          console.log(divData);
          result = "";
          expressionData = "";
        } else if (
          expressionData.includes("+") ||
          expressionData.includes("-") ||
          expressionData.includes("*") ||
          expressionData.includes("/")
        ) {
          historyData.push(expressionData + "=" + result);
          localStorage.setItem("history", JSON.stringify(historyData));
          console.log("hsi", historyData);
          result = "";
          expressionData = "";
        } else {
          result = "";
          expressionData = "";
        }
      } catch {
        calculate.innerText = "ERROR";
      }
    } else {
      calculate.innerText += buttonText;
      calculate.innerText += expressionData;
    }
  });
}

let History = () => {
  let targetDiv = document.getElementById("history");
  if (targetDiv.style.display !== "block") {
    targetDiv.style.display = "block";
  } else {
    targetDiv.style.display = "none";
  }
  mixedHistory.innerText = JSON.parse(localStorage.getItem("history"));
  addHistory.innerText = JSON.parse(localStorage.getItem("add"));
  subHistory.innerText = JSON.parse(localStorage.getItem("sub"));
  mulHistory.innerText = JSON.parse(localStorage.getItem("mul"));
  divHistory.innerText = JSON.parse(localStorage.getItem("div"));
};

let clearLocalStorage = () => {
  localStorage.clear();
  let targetDiv = document.getElementById("history");

  if (targetDiv.style.display == "block") {
    targetDiv.style.display = "none";
  }
};
