//https://www.youtube.com/watch?v=Bluxbh9CaQ0&t=9116s

// const name = "Игорь";
// const age = 32;

// // const output = "Привет, меня зовут " + name + " и мой возрост " + age + " лет.";
// // console.log(output);

// function getAge() {
//   return age;
// }

// const output = `Привет, меня зовут ${name} и мой возрост ${age} лет.`;
// const output01 = `Привет, меня зовут ${name} и мой возрост ${
//   age < 30 ? "A" : "B"
// } лет.`; // `` позволяет использовать динамику
// console.log(output);
// console.log(output01);

// const output02 = `<div>This is div</div>
// <p>this is p</p>`;

// console.log(output02);

// const name = "Игорь";
// console.log(name.length);
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());
// console.log(name.charAt(2)); // что находится на позиции 2
// console.log(name.indexOf("о")); //поиск значения
// console.log(name.indexOf("Иг")); // выдает значение индекса откуда начинается
// console.log(name.indexOf("орь"));
// console.log(name.indexOf("!")); // выдает значение -1 если отсутствует
// console.log(name.startsWith("игорь")); //проверяет стартует ли втрока со строчки
// console.log(name.startsWith("Игорь"));
// console.log(name.toLowerCase().startsWith("игорь"));
// console.log(name.endsWith("орь")); //заканчивается ли строка данными символами
// console.log(name.endsWith("орь!"));
// console.log(name.repeat((count = 3)));
// const string = "        password    ";
// console.log(string);
// console.log(string.trimStart());
// console.log(string.trimRight());

// console.log(string.trim()); // trim удаляет все пробелы
// //2:35:13

function logPerson(s, name, age) {
  //   console.log(s, name, age);
  // return "Info about persone";
  if (age < 0) {
    age = "Еще не родился";
  }
  return `${s[0]}${name}${s[1]}${age}${s[2]}`; //позволяет валедироать значения
}
const personName = "Igor";
const personName2 = "Ivan";
const personAge = 32;
const personAge2 = -32;
const output = logPerson`Name: ${personName}, Age: ${personAge}!`;
const output2 = logPerson`Name: ${personName2}, Age: ${personAge2}!`;
console.log(output);
console.log(output2);
