//Функція з побічними ефектами=============================

// const dirtyMultiply = (array, value) => {
//   for (let i = 0; i < array.length; i += 1) {
//     array[i] = array[i] * value;
//   }
// };

// const numbers = [1, 2, 3, 4, 5];
// dirtyMultiply(numbers, 2);
// // Відбулася мутація вихідних даних - масиву numbers
// console.log(numbers);

//Чиста функція (pure function)============================

// const dirtyMultiply = (array, value) => {
//   let arr = []

//   for (let i = 0; i < array.length; i += 1) {
//     arr.push(array[i] * value);
//   }
//   return arr
// };

// const numbers = [1, 2, 3, 4, 5];
// const num = dirtyMultiply(numbers, 2);

// // Відбулася мутація вихідних даних - масиву numbers
// console.log("numbers -",numbers);
// console.log("num -", num);

//Метод map()====================================================

// const planets = ["Земля", "Марс", "Венера", "Юпітер"];

// const planetsInUpperCase = planets.map(item => item.toUpperCase())
// console.log(planetsInUpperCase);

// const planets = ["земля", "марс", "венера", "юпітер"];
// const users = ["микола", "катя"];

// const foo = (arr, foo1, foo2) => {
//   const result1 = foo1(arr);
//   const result2 = foo2(result1)

//   return result2
// }

// const splitFoo = (arrs) => {
//   const result = []
//   arrs.map(element => result.push(element.split("")));
//   return result;
// };

// const spliceFoo = (arrs) => {
//   const qwerty = [];
//   arrs.map(element => {
//     element.splice(0, 1, element[0].toUpperCase());
//     qwerty.push(element.join(""));
//   })
//   return qwerty
// };

// console.log(foo(planets, splitFoo, spliceFoo));
// console.log(foo(users, splitFoo, spliceFoo));

//-----------
// const arr = [1, 2, 3, 4, 5, 6];

// const result = arr.map((item, idx, arr) => {
//   return item + 2
// })

// console.log(result);
//=========================================================

// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];

// const studentsName = students.map((student) => student.score);
//===========================Метод flatMap()=================================

//Метод map()##########################
// const students = [
//   { name: "Манго", courses: ["математика", "фізика"] },
//   { name: "Полі", courses: ["інформатика", "математика"] },
//   { name: "Ківі", courses: ["фізика", "біологія"] },
// ];
// const studentsCourses = students.map(cors => cors.courses)

// console.log(studentsCourses);

//Метод flatMap()#########################

// const flatCourses = students.flatMap(function (element, idx, arr) {

//   return element.courses
// })
// console.log(flatCourses);

// const result = []
// for(const el of flatCourses) {
//   if(!result.includes(el)) {
//     result.push(el)
//   }
// }

// console.log(result);
//================================================
//Метод filter()################################
// const allCourses = students.flatMap(element => element.courses)

// console.log(allCourses);

// const courses = allCourses.filter((element, idx, arrey) => arrey.indexOf(element) === idx)

// console.log(courses);

// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];

// const highScore = students.filter(({ score }) => score >= HIGH_SCORE);
// console.log(highScore);
// const lowScore = students.filter(({ score }) => score <= LOW_SCORE);
// console.log(lowScore);
// const mediumScore = students.filter(({score}) => score >= LOW_SCORE && score <= HIGH_SCORE)
// console.log(mediumScore);

//===========Метод find()====================================

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

// const result = colorPickerOptions.find(({color}) => color === "#2196F3")

// console.log(result);

//===========Метод find()====================================

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

// const colorIndex = colorPickerOptions.findIndex(element => element.label === "pink")
// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     return this.pizzas.includes(pizzaName) ? onSuccess(pizzaName)
//     : onError(`There is no pizza with a name ${pizzaName} in the assortment.`)
//   },
// };
// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
// console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
// console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
// console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));;
//===================================================
function changeEven(numbers, value) {
  const result = [];

  for (const num of numbers) {
    !(num % 2) ? result.push(num + value) : result.push(num);
  }
  return result
}
console.log(changeEven([1, 2, 3, 4, 5], 10));