// getElementById and parseFloat method are used in this function 

function getInputById(id) {
  const inputValue = document.getElementById(id).value;
//   console.log(typeof inputValue);
  const inputNumber = parseFloat(inputValue);
  return inputNumber;
}
