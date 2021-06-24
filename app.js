// window.alert("1"); // window опускается тк глобальная функция

// window.prompt("как тебя зовут?");
// window.confirm("как тебя зовут?");
// const heading = document.getElementById("hello"); //возрощает ссылку на элемент
// console.log(heading);
// console.dir(heading); //раскрывает*
// console.dir(heading.id); //получаем свойство id
// console.dir(heading.textContent); // получаем контент

// heading.textContent = "Changed from JavaScript!";
// heading.style.color = "red";
// heading.style.textAlign = "center";
// heading.style.backgroundColor = "green";
// heading.style.padding = "2rem";

// setTimeout(() => {
//   heading.textContent = "Changed from JavaScript!";
//   heading.style.color = "red";
//   heading.style.textAlign = "center";
//   heading.style.backgroundColor = "green";
//   heading.style.padding = "2rem";
// }, 1000);

// const heading = document.getElementById("hello");
// const heading2 = document.getElementsByTagName("h2")[0];
// const heading2 = document.getElementsByClassName("h2-class")[0]; //получаем по классу, получаем псевдо массив, [0] получаем первый элемент массива, метод устаревший
// const heading2 = document.querySelector(".h2-class"); // через class, querySelector() всегда возращает один элемент
// const heading2 = document.querySelector("#sub-hello"); // через id
// const heading3 = heading2.nextElementSibling; // получаем следующий элемент
// console.log(heading2);
// console.log(heading3);

const h2List = document.querySelectorAll("h2"); //принемает множество значений, получаем псевдомассив
console.log(h2List);
const heading2 = h2List[0];
const heading3 = h2List[1]; //или
const heading4 = h2List[h2List.length - 1];
console.log(heading3);
console.log(heading4);

const heading = document.getElementById("hello");
setTimeout(() => {
  addStylesTo(heading);
}, 1000);

setTimeout(() => {
  addStylesTo(heading2);
}, 1500);

setTimeout(() => {
  addStylesTo(heading3);
}, 2000);

function addStylesTo(node) {
  node.textContent = "Changed from JavaScript!";
  node.style.color = "red";
  node.style.textAlign = "center";
  node.style.backgroundColor = "green";
  node.style.padding = "2rem";
}
