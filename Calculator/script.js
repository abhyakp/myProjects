function displayNum(num){
    document.getElementById("screen").value+=num
}

function clearBox(){
    document.getElementById("screen").value=""
}

function evaluateExpression(){
    // var text = document.getElementById("screen").value
    // var result = eval(text) - for evaluating the expression
    // document.getElementById("screen").value = result
    document.getElementById("screen").value = eval(document.getElementById("screen").value)
}
function removeLast(){

   str = document.getElementById("screen").value
   document.getElementById("screen").value=str.slice(0,-1)// prdefined function for removing last element
}