document
  .getElementById("btn-show-cashout")
  .addEventListener("click", function () {
    document.getElementById("cashout-modal").classList.remove("hidden");
    document.getElementById("add-money-modal").classList.add("hidden");
  });
document
  .getElementById("btn-show-add-money")
  .addEventListener("click", function () {
    document.getElementById("cashout-modal").classList.add("hidden");
    document.getElementById("add-money-modal").classList.remove("hidden");
  });
