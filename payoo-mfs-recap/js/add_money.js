document
  .getElementById("add-money-button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    // using function from utilites.js
    const addMoneylabel = getInputById("add-money-input");
    const addmoneypasswordinput = getInputById("add-money-password-input");
    console.log(addMoneylabel, addmoneypasswordinput);

    if (addmoneypasswordinput === 1234) {
      const totalBalance = document.getElementById("total-balance").innerText;
      const finalbalance = parseFloat(totalBalance) + addMoneylabel;
      console.log(finalbalance);
      document.getElementById("total-balance").innerText = finalbalance;
    } else {
      alert("wrong password try again");
    }
  });
