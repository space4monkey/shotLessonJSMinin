// массивы в js являются обьектами
const cars = ["Мазда", "Форд", "БМВ", "Мерседес"];
// const fib = [1, 1, 2, 3, 5, 8, 13];

console.log(cars);
console.log(cars.length); // выводит размер массива

//Function это функция
function addItemToEnd() {}

//Method это метод
cars.push("Рено"); // добовляем в конец массива
console.log(cars);

cars.unshift("Волга"); // добовляем в начало
console.log(cars);

const firstCar = cars.shift(); //удаляет первое значение из массива
const lastCar = cars.pop(); //удаляет последнее значение из массива
console.log(firstCar); //есть возможность поработать с удаляемым значением
console.log(lastCar);
console.log(cars);
// не работет git!
