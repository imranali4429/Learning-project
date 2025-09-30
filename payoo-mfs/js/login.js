// console.log("button autocomplete work")

// step: event handler
document
  .getElementById("btn-login")
  .addEventListener("click", function (event) {
    // step 2 : prevent default behavior (prevent loading brower)
    event.preventDefault();
    console.log("button autocomplete work");
    //   step 3 : get the phone number
    const mobileNumber = document.getElementById("mobile-number").value;
    console.log(mobileNumber);
    const password = document.getElementById("password").value;
    console.log(password);
  });
