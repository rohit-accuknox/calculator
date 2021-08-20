let calculate = document.getElementById("calculate");
document.getElementById("history").style.display = "none";
buttons = document.querySelectorAll("button");

// let calculateValue ="";
let historyData = [];
let expressionData = "";
let resultData = "";
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
      // let addHistory = document.getElementById("addHistory");
      // if (addHistory.style.display === "none") {
      //   addHistory.style.display = "none";
      // } else {
      //   addHistory.style.display = "none";
      // }
      // let subHistory = document.getElementById("subHistory");
      // if (subHistory.style.display === "none") {
      //   subHistory.style.display = "none";
      // } else {
      //   subHistory.style.display = "none";
      // }
      // let mulHistory = document.getElementById("mulHistory");
      // if (mulHistory.style.display === "none") {
      //   mulHistory.style.display = "none";
      // } else {
      //   mulHistory.style.display = "none";
      // }
      // let divHistory = document.getElementById("divHistory");
      // if (divHistory.style.display === "none") {
      //   divHistory.style.display = "none";
      // } else {
      //   divHistory.style.display = "none";
      // }
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
        // expressionData = calculateValue;d
        // resultData = calculate.innerText; d
        // resultData = result;
        // historyData.push(expressionData + "=" + resultData);
        // localStorage.setItem("history", JSON.stringify(historyData));
        // console.log(historyData);
        // resultData = "";
        // expressionData = "";
        // History();d
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
  // let his = document.getElementById("his");
  // let x = JSON.parse(localStorage.getItem("history"));
  // his.innerText = x;
  let targetDiv = document.getElementById("history");
  // let history = document.getElementById("his");
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

  // if (history.style.display === "none") {
  //   history.style.display = "block";
  // } else {
  //   history.style.display = "none";
  // }

  // let addHistory = document.getElementById("addHistory");
  // let addHis = JSON.parse(localStorage.getItem("add"));
  // addHistory.innerText = addHis;
  // if (addHistory.style.display === "none") {
  //   addHistory.style.display = "block";
  // } else {
  //   addHistory.style.display = "none";
  // }

  // let subHistory = document.getElementById("subHistory");
  // let subHis = JSON.parse(localStorage.getItem("sub"));
  // subHistory.innerText = subHis;
  // if (subHistory.style.display === "none") {
  //   subHistory.style.display = "block";
  // } else {
  //   subHistory.style.display = "none";
  // }
  // let mulHistory = document.getElementById("mulHistory");
  // let mulHis = JSON.parse(localStorage.getItem("mul"));
  // mulHistory.innerText = mulHis;
  // if (mulHistory.style.display === "none") {
  //   mulHistory.style.display = "block";
  // } else {
  //   mulHistory.style.display = "none";
  // }
  // let divHistory = document.getElementById("divHistory");
  // let divHis = JSON.parse(localStorage.getItem("div"));
  // divHistory.innerText = divHis;
  // if (divHistory.style.display === "none") {
  //   divHistory.style.display = "block";
  // } else {
  //   divHistory.style.display = "none";
  // }
};

let clearLocalStorage = () => {
  localStorage.clear();
  let targetDiv = document.getElementById("history");

  if (targetDiv.style.display == "block") {
    targetDiv.style.display = "none";
  } 
};
