//Arro_functions......................
// let res;
// const foo = (a, b) => {
//   return a + b;
// };

// console.log(foo(4, 8));

//не явне повернення................

// const total = (a, b) => a + b;

// console.log(total(4, 6));

//Операція ...rest щоб зібрати всі аргументи в масив
// const foo = (...rest) => {
//   console.log(rest);
// }

// foo(2,3,4,5,65,6,7)

//Стрілочні функції як колбеки..........................
// const numbers = [5, 10, 15, 20, 25];

// numbers.forEach(function(item, idx, arg){
//   console.log(item);
// }) 

// numbers.forEach((item, idx, arg) => {
//   console.log(item);
// })

//Стрілочну колбек-функцію також можна оголошувати окремо і передавати на неї посилання. ..............
// const numbers = [5, 10, 15, 20, 25];
// const num = [15, 102, 153, 290, 245];

// const logMessage = (number, index) => {
//   console.log(`Індекс ${index}, значення ${number}`);
// };

// numbers.forEach(logMessage);

// num.forEach(logMessage)


// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = numbers.filter((value) => value > 3);
// console.log(filteredNumbers); 


//===================task========================
// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//       if(!this.pizzas.includes(pizzaName)) {
//         return onError(`There is no pizza with a name ${pizzaName} in the assortment.`)
//       }
//         return onSuccess(pizzaName)
//   },
// };
// // Change code above this line


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
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);

//=========================task==============================

function changeEven(numbers, value) {
  // Change code below this line
  let num = numbers
  for (let i = 0; i < num.length; i += 1) {
    if (num[i] % 2 === 0) {
      num[i] = num[i] + value;
    }
  }

  return num
  // Change code above this line
}

console.log(changeEven([1,23,4,5,6], 10));