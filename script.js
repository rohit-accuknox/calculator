let calculate = document.getElementById("calculate");

buttons = document.querySelectorAll("button");

let calculateValue ="";

for (item of buttons){
    item.addEventListener("click",(e)=>{
        buttonText = e.target.innerText;
        console.log("Button text is",buttonText);
        if(buttonText =='X'){
            buttonText="*";
            calculateValue += buttonText
            calculate.innerText = calculateValue;
        }
        else if(buttonText=="C"){
            calculateValue =""
            calculate.innerText = calculateValue;
        }
        else if( buttonText == "DEL"){
            newValue = calculate.innerText.slice(0,-1);
            calculateValue=newValue;
            calculate.innerText = calculateValue;
            console.log(calculateValue)
        }
        else if(buttonText=="="){
            try{
                calculate.innerText = eval(calculateValue);
            }catch{
                calculate.innerText = "ERROR";
            }
        }
        else{
            calculateValue += buttonText
            calculate.innerText = calculateValue;
        }
    })
}