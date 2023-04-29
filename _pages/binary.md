---
title: Binary Buttons 
layout: page
permalink: /BinaryButtons/
---

<html>
<form>
      <label for="1binary">FIRST Binary Number:</label>
      <input type="text" id="1binary" name="1binary"><br><br>
      <label for="2binary">SECOND Binary Number:</label>
      <input type="text" id="2binary" name="2binary"><br><br>
      <input type="button" value="Multiply" onclick="binaryMultiply()">
      <input type="button" value="Divide" onclick="binaryDivide()">
      <p id="Bresult"></p>
      <p id="Dresult"></p>
</form>

<script>
  
  function binaryMultiply() {
  var 1binary = document.getElementById("1binary").value;
  var 2binary = document.getElementById("2binary").value;
  
  var decimalProduct = parseInt(1binary, 2) * parseInt(2binary, 2);
  
  var binaryProduct = decimalProduct.toString(2);
  
  document.getElementById("Bresult").innerHTML = "Product of binary numbers: " + binaryProduct;
  document.getElementById("Dresult").innerHTML = "Product in base 10: " + decimalProduct;
}

  function binaryDivide() {
  var 1binary = document.getElementById("1binary").value;
  var 2binary = document.getElementById("2binary").value;

  var decimalQuotient = parseInt(1binary, 2) / parseInt(2binary, 2);

  if (decimalQuotient % 1 === 0) {
    var binaryQuotient = decimalQuotient.toString(2);
    document.getElementById("Bresult").innerHTML = "Quotient of binary numbers: " + binaryQuotient;
    document.getElementById("Dresult").innerHTML = "Quotient in base 10: " + decimalQuotient;
  } else {
    document.getElementById("Bresult").innerHTML = "The binary division is not exact.";
    document.getElementById("Dresult").innerHTML = "The quotient is a decimal number.";
  }
}

    </script>
</html>