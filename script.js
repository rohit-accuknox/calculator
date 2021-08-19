let calculate = document.getElementById("calculate");

buttons = document.querySelectorAll("button");

// let calculateValue ="";
let historyData = [];
let expressionData = "";
let resultData = "";

for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    console.log("Button text is", buttonText);
    if (buttonText == "X") {
      buttonText = "*";
      calculate.innerText += buttonText;
      // calculateValue += buttonText
      // calculate.innerText = calculateValue;
      // expressionData = calculateValue;
      // console.log(expressionData)
    } else if (buttonText == "C") {
      calculateValue = "";
      calculate.innerText = calculateValue;
      let history = document.getElementById("history");
      if (history.style.display === "none") {
        history.style.display = "none";
      } else {
        history.style.display = "none";
      }
    } else if (buttonText == "DEL") {
      newValue = calculate.innerText.slice(0, -1);
      calculateValue = newValue;
      calculate.innerText = calculateValue;
      console.log(calculateValue);
    } else if (buttonText == "=") {
      try {
        // calculate.innerText = eval(calculate.innerText);
        evaluate = Math.round(eval(calculate.innerText)).toFixed(1);
        result = evaluate;
        console.log(result);
        expressionData = calculate.innerText;
        calculate.innerText = result;
        console.log(expressionData);
        // expressionData = calculateValue;
        // resultData = calculate.innerText;
        resultData = result;
        historyData.push(expressionData + "=" + resultData);
        localStorage.setItem("history", JSON.stringify(historyData));
        console.log(historyData);
        resultData = "";
        expressionData = "";
        // History();
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
  let history = document.getElementById("history");
  let x = JSON.parse(localStorage.getItem("history"));
  history.innerText = x;
  if (history.style.display === "none") {
    history.style.display = "block";
  } else {
    history.style.display = "none";
  }
};

let clearLocalStorage =()=>{
    localStorage.clear();
}
