function validateForm() {
  var numberA = parseInt(document.getElementById("numberA").value);
  var numberB = parseInt(document.getElementById("numberB").value);

  if (numberB > numberA) {
    alert("O valor do campo B é maior que o do campo A.");    
  } else {
    alert("O valor do campo A é maior que o do campo B.");
  }  
}