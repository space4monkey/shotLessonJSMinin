const person = {
  name: "Igor",
  age: 32,
  isProgrammer: true,
  languages: ["ru", "en", "de"],

  //   "complex key": "CompuTed Key",
  //   ["key_" + (1 + 3)]: "Competed Key", //key_4

  // greet: function(){// является методом т.к. находится внутри объекъта person
  // }
  //тоже что выше только кроче
  //   greet() {
  //     console.log("greeT froM persoN");
  //   },
  info() {
    // console.info("информация про человека по имени:", person.name);//не уневерсально
    // console.log("this:", this);
    console.info("информация про человека по имени:", this.name); //this указывает на обьект person
  },
};

// console.log(person.name);
// const ageKey = "age";
// console.log(person[ageKey]);
// console.log(person["complex key"]); // вызываем "complex key"
// console.log(person);
// person.greet();

// person.age++;
// person.languages.push("by");
// console.log(person);
// // хотим удалить ключ key_4
// // person["key_4"] = undefined;
// delete person["key_4"];

//Деструктуризация
//код дублируется для этого использум детруктуризацию
// const name = person.name;
// const age = person.age;
// const languages = person.languages;
// используем деструктуризацию

// const { name, age: personAge = 10, languages } = person;

// console.log(name, personAge, languages);

// for (let key in person) {
//   //опасен! может заходить в прототип для того чтобы защитить делаем защиту => if (person.hasOwnProperty(key))
//   if (person.hasOwnProperty(key)) {
//     console.log("key:", key);
//     console.log("value:", person[key]);
//   }
// }

// const keys = Object.keys(person); //получем ключи в виде массива. Не бежит по прототипу защита не обязательна
// console.log(keys);
// keys.forEach((key) => {
//   console.log("key:", key);
//   console.log("value:", person[key]);
// });

//Context
// person.info();

// const logger = {
//   keys(obj) {
//     console.log("Object Keys: ", Object.keys(obj));
//   },
// };
// logger.keys(person);

// const logger = {
//   keys() {
//     console.log("Object Keys: ", Object.keys(this)); // this будет объектом который мы предодим
//   },
//   keysAndValues() {
//     Object.keys(this).forEach((key) => {
//       // стрелочная функция не создает свой контекст
//       console.log(`"${key}": ${this[key]}`);
//     });
//   },
// };

// const logger = {
//   keys() {
//     console.log("Object Keys: ", Object.keys(this)); // this будет объектом который мы предодим
//   },
//   // не понял очем тут было
//   keysAndValues() {
//     // const self = this; //сщхронятем контекст
//     Object.keys(this).forEach(
//       function (key) {
//         //function создает свой контекст
//         console.log(`"${key}": ${this[key]}`);
//       }.bind(this)
//     );
//   },
// };

const logger = {
  keys() {
    console.log("Object Keys: ", Object.keys(this));
  },
  keysAndValues() {
    Object.keys(this).forEach((key) => {
      console.log(`"${key}": ${this[key]}`);
    });
  },

  withParams(top = false, between = false, bottom = false) {
    if (top) {
      console.log("---- Start ----");
    }
    Object.keys(this).forEach((key, index, array) => {
      console.log(`"${key}": ${this[key]}`);
      if (between && index !== array.length - 1) {
        console.log("--------");
      }
    });
    if (bottom) {
      console.log("---- End ----");
    }
  },
};

// logger.keys(person);
// const bound = logger.keys.bind(person); // метод bind возрощает новую функцию.
// bound(); //получаем ключи объекта person
//по аналогии
// logger.keys.call(person);
// logger.keysAndValues.call(logger);
// logger.keysAndValues.call(person);
// logger.keysAndValues.call({ a: 1, c: { b: 2 } });
logger.withParams.call(person, true, true, true); //принемает не огрониченное количество параметров
logger.withParams.apply(person, [true, true, true]); // всегда принемает два параметра
