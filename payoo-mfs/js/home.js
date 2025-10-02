//  Add money to the account

// step 1 : add money an event handler to the add money butoon
document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    // step 2: get money added to the account
    const amountMoney = document.getElementById("add-money-amount").value;
    // console.log(amountMoney);
    //step 3: get password that obtain
    const inputPassword = document.getElementById("input-password").value;
    // console.log(inputPassword);

    // step 4 : verify pin number , worng way
    if (inputPassword === "123456") {
      console.log("add money to your account successfully");
      //   step 5 : get the current balance
      const availablebalanc =
        document.getElementById("available-balance").innerText;
      const finalBalance =
        parseFloat(availablebalanc) + parseFloat(amountMoney);
      console.log(finalBalance);
      // step 6:Update the balance to the UI? DOm
      document.getElementById("available-balance").innerText = finalBalance;
    } else {
      alert("worng password please try again");
    }
  });
