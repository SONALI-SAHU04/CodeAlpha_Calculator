const display =
document.getElementById("display");

function appendValue(value){

  let lastChar =
  display.value.slice(-1);

  let operators =
  ['+','-','*','/','%'];

  if(
    operators.includes(lastChar) &&
    operators.includes(value)
  ){
    return;
  }

  display.value += value;
}

function clearDisplay(){
  display.value = "";
}

function deleteLast(){

  display.value =
  display.value.slice(0,-1);

}

function calculate(){

  try{

    display.value =
    eval(display.value);

  }

  catch{

    display.value = "Error";

  }

}

document.addEventListener(
  "keydown",
  (e)=>{

    if(
      !isNaN(e.key) ||
      "+-*/.%".includes(e.key)
    ){

      appendValue(e.key);

    }

    else if(e.key === "Enter"){

      calculate();

    }

    else if(e.key === "Backspace"){

      deleteLast();

    }

    else if(e.key === "Escape"){

      clearDisplay();

    }

  }
);

setInterval(()=>{

  const now = new Date();

  let time =
  now.toLocaleTimeString();

  document.getElementById("clock")
  .innerText = time;

},1000);