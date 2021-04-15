// let day = document.getElementById("days");
// let hour = document.getElementById("hours");
// let minute = document.getElementById("minutes");

setInterval(() => {
  let second = document.getElementById("seconds");
  second.innerText = new Date().getSeconds();
}, 1000);
setInterval(() => {
  let day = document.getElementById("days");
  let hour = document.getElementById("hours");
  let minute = document.getElementById("minutes");

  let dayText = ["Su", "MO", "TU", "WE", "TH", "FR", "SA"];

  day.innerText = dayText[new Date().getDay()];
  hour.innerText = new Date().getHours();
  minute.innerText = new Date().getMinutes();
}, 1000);
///////////////////
let count = 0;
function clickup() {
  let ketqua = document.getElementById("ketqua");
  count++;
  ketqua.innerText = count;
}
function clickdown() {
  let ketqua = document.getElementById("ketqua");
  count--;
  ketqua.innerText = count;
}
////////////

function buttonStart() {}

function buttonStop() {}
///////////////
//////////////

/////////////////

function reset() {
  console.log(arr);
  console.log(arr[12].quoteText);
  let qAuthor = document.getElementById("quoteAuthor");
  let qText = document.getElementById("quoteText");
  let soRamdom = Math.round(Math.random() * 65);
  console.log(soRamdom);
  qText.innerText = arr[soRamdom].quoteText;
  qAuthor.innerText = arr[soRamdom].quoteAuthor;
}
