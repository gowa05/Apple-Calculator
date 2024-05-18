

const display = document.getElementById("display");


function appendToDisplay(input){
    display.value+=input;

}
function clearDisplay(){
    display.value = "";
}
function calculate(){
    try{
        var result = eval(display.value);
        var roundedResult = Math.round(result * 100) / 100; 
        display.value = roundedResult;
    }
    catch(error){
        display.value = "Error";
    }
}


