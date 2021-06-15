// массивы в js являются обьектами
const cars = ["Мазда", "Форд", "БМВ", "Мерседес"];
const fib = [1, 1, 2, 3, 5, 8, 13];

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

console.log(cars.indexOf("БМВ")); //находим индекс позиции
const index = cars.indexOf("БМВ");
cars[index] = "Porshe";
console.log(cars); //3.21.14
