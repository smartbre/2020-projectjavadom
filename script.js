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
let sum=0

rw1cl1.addEventListener("click", (e) => {
  check.classList.add("#soda")
  console.log("#1 clicked");
})

// rw1cl1.addEventListener("click", (e) => {
//   check.classList.add("#salad")
//   console.log("#1 clicked");
// });rw1cl1.addEventListener("click", (e) => {
//   check.classList.add("#chicken")
//   console.log("#1 clicked");
// });rw1cl1.addEventListener("click", (e) => {
//   check.classList.add("#burger")
//   console.log("#1 clicked");
// });rw1cl1.addEventListener("click", (e) => {
//   check.classList.add("#fries")
//   console.log("#1 clicked");
// });rw1cl1.addEventListener("click", (e) => {
//   check.classList.add("#hotdog")
//   console.log("#1 clicked");
// });rw1cl1.addEventListener("click", (e) => {
//   check.classList.add("#mustard")
//   console.log("#1 clicked");
// });rw1cl1.addEventListener("click", (e) => {
//   check.classList.add("#ketchup")
//   console.log("#1 clicked");
// });rw1cl1.addEventListener("click", (e) => {
//   check.classList.add("#shake")
//   console.log("#1 clicked");
// });

