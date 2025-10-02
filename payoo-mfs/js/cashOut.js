document
  .getElementById("btn-cashout")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const addcashout = document.getElementById("add-cashout").value;
    // console.log(addcashout);
    const cashoutpassword = document.getElementById("cashout-password").value;
    // console.log(cashoutpassword);
    if (cashoutpassword === "1234") {
      const availablebalanc =
        document.getElementById("available-balance").innerText;
      const finalBalance = parseFloat(availablebalanc) - parseFloat(addcashout);
      document.getElementById("available-balance").innerText = finalBalance;
      console.log(availablebalanc);
    } else alert("worng password please try again");
  });
