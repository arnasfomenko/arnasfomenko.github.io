function numberConversion() {
  var myNumber = parseInt(document.getElementById("number").value);
  if (numberValidation(myNumber)) {
    document.getElementById("result").innerHTML = myNumber + " = " + myNumber + " Decimal, " +
    myNumber.toString(16) + " Hexadecimal, " +
    myNumber.toString(8) + " Octal, " +
    myNumber.toString(2) + " Binary."
  }
}

function numberValidation(myNumber) {
  if (isNaN(myNumber)) {
    return false;
  } else {
    return true;
  }
}
