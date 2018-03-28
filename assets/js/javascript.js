function numberConversion() {
  let myNumber = parseInt(document.getElementById("number").value);
  if (numberValidation(myNumber)) {
    let hexadecimal = myNumber.toString(16);
    let octal = myNumber.toString(8);
    let binary = myNumber.toString(2);
    if (myNumber < 0) {
      myNumber = -myNumber;
      hexadecimal = hexadecimal.slice( 1 );
      octal = -octal;
      binary = -binary;
    }
    document.getElementById("result").innerHTML = myNumber + " = " +
    myNumber + " Decimal, " +
    hexadecimal + " Hexadecimal, " +
    octal + " Octal, " +
    binary + " Binary."
  } else {
    document.getElementById("result").innerHTML = "Your query wasn't a number";
  }
}

function numberValidation(myNumber) {
  if (isNaN(myNumber)) {
    return false;
  } else {
    return true;
  }
}
