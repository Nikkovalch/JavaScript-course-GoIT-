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

const planets = ["земля", "марс", "венера", "юпітер"];
const users = ["микола", "катя"];

const foo = (arr, foo1, foo2) => {
  const result1 = foo1(arr);
  const result2 = foo2(result1)

  return result2
} 

const splitFoo = (arrs) => {
  const result = []
  arrs.map(element => result.push(element.split("")));
  return result;
};

const spliceFoo = (arrs) => {
  const qwerty = []; 
  arrs.map(element => {
    element.splice(0, 1, element[0].toUpperCase());
    qwerty.push(element.join(""));
  })
  return qwerty
};

console.log(foo(planets, splitFoo, spliceFoo));
console.log(foo(users, splitFoo, spliceFoo));