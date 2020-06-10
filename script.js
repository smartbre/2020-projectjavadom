/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("working");

let rw1cl1 = document.querySelector("#soda");
let rw1cl2 = document.querySelector("#salad");
let rw1cl3 = document.querySelector("#chicken");
let rw2cl1 = document.querySelector("#burger");
let rw2cl2 = document.querySelector("#fries");
let rw2cl3 = document.querySelector("#hotdog");
let rw3cl1 = document.querySelector("#mustard");
let rw3cl2 = document.querySelector("#ketchup");
let rw3cl3 = document.querySelector("#shake");
let check = document.querySelector("#check");
let sum = 0;

rw1cl1.addEventListener("click", e => {
  check.classList.add("#soda");
  console.log("#soda clicked");
  console.log(check.classList);
  sum += 1;
  check.innerHTML = `Your total is $${sum}`;
});

rw1cl2.addEventListener("click", e => {
  check.classList.add("#salad");
  console.log("salad clicked");
  console.log(check.classList);
  sum += 0.5;
  check.innerHTML = `Your total is $${sum}`;
});

rw1cl3.addEventListener("click", e => {
  check.classList.add("#chicken");
  console.log("chicken clicked");
  console.log(check.classList);
  sum += 2;
  check.innerHTML = `Your total is $${sum}`;
});

rw2cl1.addEventListener("click", e => {
  check.classList.add("#burger");
  console.log("#urger clicked");
  console.log(check.classList);
  sum += 2;
  check.innerHTML = `Your total is $${sum}`;
});

rw2cl2.addEventListener("click", e => {
  check.classList.add("#fries");
  console.log("fries clicked");
  console.log(check.classList);
  sum += 1;
  check.innerHTML = `Your total is $${sum}`;
});

rw2cl3.addEventListener("click", e => {
  check.classList.add("#hotdog");
  console.log("hotdog clicked");
  console.log(check.classList);
  sum += 1;
  check.innerHTML = `Your total is $${sum}`;
});

rw3cl1.addEventListener("click", e => {
  check.classList.add("#mustard");
  console.log("mustard clicked");
  console.log(check.classList);
  sum += 0;
  check.innerHTML = `Your total is $${sum}`;
});

rw3cl2.addEventListener("click", e => {
  check.classList.add("#ketchup");
  console.log("ketchup clicked");
  console.log(check.classList);
  sum += 0;
  check.innerHTML = `Your total is $${sum}`;
});

rw3cl3.addEventListener("click", e => {
  check.classList.add("#shake");
  console.log("shake clicked");
  console.log(check.classList);
  sum += 3;
  check.innerHTML = `Your total is $${sum}`;
});
