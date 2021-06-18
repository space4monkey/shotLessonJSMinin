// массивы в js являются обьектами
const cars = ["Мазда", "Форд", "БМВ", "Мерседес"];
const fib = [1, 1, 2, 3, 5, 8, 13];
// const people = [
//   { name: "Vladilen", budget: 4200 },
//   { name: "Elena", budget: 3500 },
//   { name: "Victoria", budget: 1700 },
// ];
// console.log(cars);
// console.log(cars.length); // выводит размер массива

//Function это функция
// function addItemToEnd() {}

//Method это метод
// cars.push("Рено"); // добовляем в конец массива
// console.log(cars);

// cars.unshift("Волга"); // добовляем в начало
// console.log(cars);

// const firstCar = cars.shift(); //удаляет первое значение из массива
// const lastCar = cars.pop(); //удаляет последнее значение из массива
// console.log(firstCar); //есть возможность поработать с удаляемым значением
// console.log(lastCar);
// console.log(cars);

// console.log(cars.reverse()); // реверс массива
// console.log(cars);

//Задача 1
// const text = "Привет, мы изучаем JavaScript";
// const reverseText = text.split(","); // расечем текст по ','
// const reverseText = text.split(" "); // расечем текст по ' '
// const reverseText = text.split(""); // расечем текст на состовляющие(буквы)
// const reverseText = text.split("").reverse(); // расечем текст на состовляющие(буквы)
// const reverseText = text.split("").reverse().join(); //соединяет через запятую
// const reverseText = text.split("").reverse().join(" "); //соединяет через пробел

// const reverseText = text.split("").reverse().join(""); //соединяет без пробелов и запятых
// console.log(reverseText);

// console.log(cars.indexOf("БМВ")); //находим индекс позиции
// const index = cars.indexOf("БМВ"); //  при введение 'БМВ!!' дожен выдовать -1, не выводит :(
// cars[index] = "Porshe";
// console.log(cars); //3.21.14
//indexOf работает с примитивами числа, строки и т.д.

// const index = people.findIndex(function (person) {
//   //   console.log(person); // выводим всех
//   return person.budget === 3500; // возрощаем того у кого budget = 3500
// });

// console.log(index); // получаем индекс budget = 3500
// console.log(people[index]); // получаем даннаые из массива по индексу

// const person = people.find(function (person) {
//   return person.budget === 3500; // возрощаем того у кого budget = 3500
// }); // тоже что вуше только через find
// console.log(person);

// Тоже что выше только через цикл for of
// let findedPerson;
// for (const person of people) {
//   console.log(person); //выводим всех на экран
//   if (person.budget === 3500) {
//     findedPerson = person;
//   }
// }
// console.log("findedPerson");
// console.log(findedPerson); //3.26.46

// let findedPerson;
// for (const person of people) {
//   console.log(person); //выводим всех на экран
//   if (person.budget === 3500) {
//     findedPerson = person;
//   }
// }
// console.log("findedPerson");
// console.log(findedPerson); //3.26.46

// const person = people.find((person) => person.budget === 3500); // лямбда код*
// console.log(person);

// console.log(cars.includes("Мазда")); // проверяет наличие элемента. boolean

// const upperCaseCars = cars.map((car) => {
// .map создает новый массив
// return car.toUpperCase();
// });
// console.log(upperCaseCars);
// console.log(cars); // остался без изменения

// const pow2Fib = fib.map((num) => num ** 2); // возводим в квадрат массив фибоначи
// const pow2 = (num) => num ** 2; // функция
// const sqrt = (num) => Math.sqrt(num);
// const pow2Fib = fib.map(pow2); //предаем а не вызываем функциию pow2
// console.log(pow2Fib);

// const pow2 = (num) => num ** 2; // функция
// const sqrt = (num) => Math.sqrt(num);
// const pow2Fib = fib.map(pow2).map(sqrt); //предаем а не вызываем функциию pow2 затем берем квадратный корень

// const pow2Fib = fib.map(pow2).map(Math.sqrt); // или
// console.log(pow2Fib); //3.34.51

// const pow2 = (num) => num ** 2;
// const pow2Fib = fib.map(pow2);
// const filteredNumders = pow2Fib.filter((num) => {
//   //фильтруем массив filter возрощает новый массив
//   return num > 20;
// });
// console.log(pow2Fib);
// console.log(filteredNumders);

const people = [
  { name: "Vladilen", budget: 4200 },
  { name: "Elena", budget: 3500 },
  { name: "Victoria", budget: 1700 },
];

// people.reduce(function (acc, person) {}, 0);// функция
// people.reduce((acc, person) => {}, 0); // стрелочная функция

/* const allBudget = people.reduce((acc, person) => {
   if (person.budget > 2000) {
     // не правельно с точки зрения продвинутого программ использовать if
     acc += person.budget;
   }
   return acc;
 }, 0);
 console.log(allBudget);*/

const allBudget = people
  .filter((person) => person.budget > 2000)
  .reduce((acc, person) => {
    //https://learn.javascript.ru/array-iteration
    acc += person.budget;
    return acc;
  }, 0);
console.log(allBudget);
