 // Get elements by ID
 var inputE = document.getElementById("input");
 var buttonE = document.getElementById("btn");
 var msgE = document.getElementById("msg");
 
 // Event: click on button
 buttonE.onclick = function() {
     // Get value from input
     var inputEValue = inputE.value;
     
     // Display value in paragraph
     msgE.innerHTML = inputEValue;
     
     // Empty input
     inputE.value = "";
 };