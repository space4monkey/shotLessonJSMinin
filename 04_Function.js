// 1 Функция
//Function Declaration обращаемся когда за хотим (откуда хотим)
// function greet(name) {
//   console.log("Привет - ", name);
// }
//Function Expression
// const greet2 = function greet2(name) {
//   console.log("Привет 2 - ", name);
// };

// greet((name = "Лена"));
// greet2("Lena");

//Function Declaration обращаемся когда за хотим (откуда хотим)
// function greet(name) {
//   console.log("Привет - ", name);
// }

// console.log(typeof greet); //проверка что это, но такова типа данных нет!
// console.dir(greet); // функция это обьекты*

// 2 Анонимные функции
// let counter = 0;//работает без остановки
// setInterval(
//   (handel = function () {
//     console.log(++counter);
//   }),
//   (timeout = 1000)
// );

// let counter = 0;
// const interval = setInterval(
//   (handel = function () {
//     if (counter === 3) {
//       clearInterval(interval); //по аналогии clearTimeout
//     } else {
//       console.log(++counter);
//       if (counter === 3) {
//         console.log("Stop");
//       }
//     }
//   }),
//   (timeout = 1000)
// );

// 3 Стрелочные функции
// function greet(name) {
//   console.log("Hello - ", name);
// }

// const arrow = (name) => {
//   //индентична функции с верху
//   console.log("Hello - ", name);
// };

// //short
// const arrow2 = (name) => console.log("Hello2 - ", name);
// arrow("Vlad");
// arrow2("Vlad");

// const pow2 = (num) => {
//   return num ** 2;
// };
// // console.log(pow2((num = 5)));
// console.log(pow2(5));

// // 4 Парметры по умолчанию
// const sum = (a = 40, b = a * 2) => a + b; //a=40 значение по умолчанию
// console.log(sum());
// console.log(sum(3, 4));

// function sumAll(...all) {
// console.log(all);
// let result = 0;
//   for (let num of all) {
//     result += num;
//   }
//   return result;
// }
// const res = sumAll(1, 2, 3, 4, 5);
// console.log(res);

// 5 Замыкание
function createMember(name) {
  //нет возможности получить доступ к name, получаем приватную переменную
  return function (lastName) {
    //  варьрируется
    console.log(name + lastName);
  };
}

const logWithLastName = createMember("Vladilen" + " ");
console.log(logWithLastName("Vladimerovich"));
console.log(logWithLastName("Borisovna"));
