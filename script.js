/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("working");

let rw1cl1 = document.querySelector(".aa");
let rw1cl2 = document.querySelector(".ab");
let rw1cl3 = document.querySelector(".ac");
let rw2cl1 = document.querySelector(".ba");
let rw2cl2 = document.querySelector(".bb");
let rw2cl3 = document.querySelector(".bc");
let rw3cl1 = document.querySelector(".ca");
let rw3cl2 = document.querySelector(".cb");
let rw3cl3 = document.querySelector(".cc");

rw1cl1.addEventListener("click", e => {
  console.log("#1 clicked");
});
