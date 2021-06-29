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
  addStylesTo(heading, (text = "JavaScript"));
}, 1000);

setTimeout(() => {
  addStylesTo(heading2, (text = "Тренеруйся"), (color = "yellow")), "0";
}, 1500);

setTimeout(() => {
  addStylesTo(heading3, (text = "И все получится"), (color = "blue"), "3rem");
}, 2000);

function addStylesTo(node, text, color = "red", fontSize) {
  node.textContent = text;
  node.style.color = color;
  node.style.textAlign = "center";
  node.style.backgroundColor = "green";
  node.style.padding = "2rem";
  // falsy: '', undefined, null, 0, false
  if (fontSize) {
    node.style.fontSize = fontSize;
  }
}

heading.onclick = () => {
  // Меняем цвет background и color по клику
  console.log("click");
  if (heading.style.color === "red") {
    heading.style.color = "#000";
    heading.style.backgroundColor = "#fff";
  } else {
    heading.style.color = "red";
    heading.style.backgroundColor = "green";
  }
};

heading2.addEventListener("dblclick", () => {
  console.log("click");
  if (heading2.style.color === "yellow") {
    heading2.style.color = "#000";
    heading2.style.backgroundColor = "#fff";
  } else {
    heading2.style.color = "yellow";
    heading2.style.backgroundColor = "green";
  }
});
