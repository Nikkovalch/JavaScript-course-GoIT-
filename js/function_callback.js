//Колбек-функції

/*function greet(name) {
  return `Ласкаво просимо ${name}`
}

function returnFoo(name, foo) {
  console.log(foo(name));
} 

returnFoo("Petro", greet);*/

//Інлайн колбеки
/*function registerGuest(name, callback) {
  callback(name);
}

// Передаємо інлайн функцію greet у якості колбека
registerGuest("Манго", function greet(name) {
  console.log(`Ласкаво просимо ${name}.`);
});*/

//Декілька колбеків
// function processCall(recipient, onAvailable, onNotAvailable) {
//   // Імітуємо доступність абонента випадковим числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }

//   onAvailable(recipient);
// }

// function takeCall(name) {
//   console.log(`З'єднуємо з ${name}, очікуйте...`);
//   // Логіка прийняття дзвінка
// }

// function activateAnsweringMachine(name) {
//   console.log(`Абонент ${name} недоступний, залиште повідомлення.`);
//   // Логіка активації автовідповідача
// }

// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступний, записуємо голограму.`);
//   // Логіка запису голограми
// }

// processCall("Манго", takeCall, activateAnsweringMachine);
// processCall("Полі", takeCall, leaveHoloMessage);

//Приклад, тест.......///////////////////////////

// function foo(value) {
//   console.log(`Hello ${value}!`);
// }
// function fooSecond(value) {
//   console.log(`I don't now you ${value}!!!`);
// }

// function helloUser(callback, doNot, name){

//   name === "Mykola" ? callback(name) : doNot(name)
// }

// helloUser(foo, fooSecond, "Petro")
// helloUser(foo, fooSecond, "Mykola")

//Матиматичні приклади........./////////////////////

// const numb = [2, 6, 1, 7, 3];

// function math(arr, foo) {
//   let total = arr[0]

//   for(let i = 1; i < arr.length; i += 1) {
//     total = foo(total, arr[i])
//   }
//   return total
// }

// console.log(math(numb, addition));;
// console.log(math(numb, mult));

// function addition(num1, num2) {
//   return num1 + num2;
// };

// function mult(num1, num2) {
//   return num1 * num2
// }

//Метод forEach..............................
/*Метод перебирання масиву, який використовується 
для заміни циклів for і for...of в роботі з колекцією даних.*/

// const num = [3, 11, 6, 7, 8, 9, 2];

// num.forEach(function(element, index, arr) {
//   arr[index] = element + 2
// })

// console.log(num);