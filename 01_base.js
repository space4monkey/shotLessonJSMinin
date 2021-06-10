// // 5 Приоритет опреаторов
// const fullAge = 32;
// const birthYear = 1988;
// const currentYear = 2021;
// // > < >= <=
// const isFullAge = currentYear - birthYear >= fullAge; // 33>=32 =>true
// console.log(isFullAge);

// // 6 Условные операторы
// const a = "ready";
// const b = "pending";
// const c = "fail";
// const courseStatus = c;

// if (courseStatus === a) {
//   console.log("Курс уже готов и его можно походить");
// } else if (courseStatus === b) {
//   console.log("Курс пока находится в разработке");
// } else {
//   console.log("Курс не удался");
// }

// const num1 = 42;
// const num2 = "42";
// console.log(num1 == num2); //приводит к значению string и сравнивает
// console.log(num1 === num2); //сравнивает по типу данных и сравнивает

// const isReady = false;
// if (isReady) {
//   console.log("all ready!");
// } else {
//   console.log("all is not ready!");
// }
// //Тернарные вырожения
// isReady ? console.log("all ready!") : console.log("all is not ready!");

// 7 Булевая логика
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Expressions_and_Operators

// 8 Функции

// function calculateAge(year) {
//   return 2021 - year;
// }

// // const myAge = calculateAge((year = 1988));
// // console.log(myAge);

// console.log(calculateAge((year = 1980)));
// console.log(calculateAge((year = 1999)));
// console.log(calculateAge((year = 2000)));

// function logInfoAbout(name, year) {
//   const age = calculateAge(year);
//   if (age > 0) {
//     console.log("Человек по имени " + name + " сечас возростом " + age);
//   } else {
//     console.log("Вообще-то это уже будущее!");
//   }
// }

// logInfoAbout("Игорь", (year = 1988));
// logInfoAbout("Наталья", (year = 1989));
// logInfoAbout("Валентина", (year = 2022));

// // 9 Массивы
// const cars = ["Мазда", "Мерседес", "Форд"];
// console.log(cars);
// // const cars = new Array("Мазда", "Мерседес", "Форд");
// // console.log(cars);
// console.log(cars[1]);
// console.log(cars[0]);
// console.log(cars[2]);
// console.log(cars.length);

// cars[0] = "Porsche"; //заменяет
// cars[3] = "Mazda"; //записывает в ячейку 3
// cars[cars.length] = "vw"; //записываеит в конец массива
// console.log(cars);

// 10 Циклы
const carss = ["Мазда", "Мерседес", "Форд", "Porsche"];

for (let i = 0; i < carss.length; i++) {
  const car = carss[i];
  console.log(car);
}

for (let car of carss) {
  //тоже самое что выше
  console.log(car);
}

// 11 Объекты
const person = {
  firstName: "Igor",
  lastName: "Lapov",
  year: 1988,
  languages: ["Ru", "En", "De"],
  hasWife: true,
  greet: function () {
    console.log("greet from person");
  },
};
console.log(person);
console.log(person.firstName);
console.log(person["lastName"]);
const key = "languages";
console.log(person[key]);
person.greet();
person.hasWife = false;
person.isProgrammer = true;

console.log(person);

//
