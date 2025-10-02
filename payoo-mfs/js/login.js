// console.log("button autocomplete work")

// step: event handler
// document
//   .getElementById("btn-login")
//   .addEventListener("click", function (event) {
//     // step 2 : prevent default behavior (prevent loading brower)
//     event.preventDefault();

//     //   step 3 : get the phone number
//     const mobileNumber = document.getElementById("mobile-number").value;
//     const password = document.getElementById("password").value;
//     console.log(mobileNumber, password);

//     if (mobileNumber === "01744813929" && password === "123456") {
//       console.log("you are login successfully");
//     } else {
//       console.log("worng phone number or password");
//     }
//   });

// document
//   .getElementById("btn-login")
//   .addEventListener("click", function (event) {
//     event.preventDefault();

//     // get phone number and pin
//     const mobileNumber = document.getElementById("mobile-number").value;
//     const password = document.getElementById("password").value;
//     // console.log(mobileNumber, password);

//     // bad way to validate
//     if (mobileNumber === "01744813929" && password === "123456") {
//       console.log("you are login successfully");
//     } else {
//       alert("worng phone number or password");
//     }
//   });

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("btn-login")
    .addEventListener("click", function (event) {
      event.preventDefault();

      // get phone number and pin
      const mobileNumber = document.getElementById("mobile-number").value;
      const password = document.getElementById("password").value;
      // console.log(mobileNumber, password);

      // bad way to validate
      if (mobileNumber === "01744813929" && password === "123456") {
        console.log("you are login successfully");
        window.location.href = "bank.html";
        window.location.href = '/home.html'
      } else {
        alert("wrong phone number or password");
      }
    });
});
