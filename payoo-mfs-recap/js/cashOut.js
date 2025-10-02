document
  .getElementById("cashout-money-button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    // using function from utilites.js
    const addMoneylabel = getInputById("cashout-money-input");
    const addmoneypasswordinput = getInputById("cashout-password-input");
    // console.log(addMoneylabel, addmoneypasswordinput);

    if (addmoneypasswordinput === 1234) {
      const totalBalance = document.getElementById("total-balance").innerText;
      const finalbalance = parseFloat(totalBalance) - addMoneylabel;
      console.log(finalbalance);
      document.getElementById("total-balance").innerText = finalbalance;
    } else {
      alert("wrong password try again");
    }
  });
