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

// function changeEven(numbers, value) {
//   // Change code below this line
//   let num = numbers
//   for (let i = 0; i < num.length; i += 1) {
//     if (num[i] % 2 === 0) {
//       num[i] = num[i] + value;
//     }
//   }

//   return num
//   // Change code above this line
// }

// console.log(changeEven([1,23,4,5,6], 10));
//=====================task=====================================
// const math = (a, b, foo) => {
//   const result = foo(a, b);
//   console.log("Такий вот результат 😋🤡🤓", result);
// }

// math(5, 7, (x, y) => x + y);
// math(7,2, (x, y) => x + y);
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$Модуль 4. Заняття 7. Коллбеки. Стрілочні функції. forEach===============================

// Example 1 - Коллбек функції
// Напишіть наступні функції:

// createProduct(obj, callback) - приймає об'єкт товару без id, а також коллбек.
//Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор у властивість id
//та викликає коллбек передаючи йому створений об'єкт.
// logProduct(product) - колббек приймаючий об'єкт продукту і логуючий його в консоль
// logTotalPrice(product) - колббек, що приймає об'єкт продукту і логіює загальну вартість товару в консоль
// Рішення

// function createProduct (obj, callback) {
//   const product = {
//     id: Date.now(),
//     ...obj
//   }
//   callback(product)
// }

// const logProduct = (product) => console.log(product);;
// const logTotalPrice = ({quantity, price}) => console.log(quantity * price);;

// createProduct({name: "🍌", quantity: 6, price: 15,}, logProduct);
// createProduct({name: "🍓", quantity: 6, price: 15,}, logTotalPrice);
//==================================Example 2 - Коллбек функції
/*Додайте об'єкт account методи withdraw(amount, onSuccess, onError) 
та deposit(amount, onSuccess, onError), де перший параметр це сума операції, а другий та третій - коллбеки.*/

/*Метод withdraw викликає onError якщо amount більше 
TRANSACTION_LIMIT або this.balance, і onSuccess в іншому випадку.*/

/*Метод deposit викликає onError якщо amount більше 
TRANSACTION_LIMIT або менше або дорівнює нулю, і onSuccess в іншому випадку.*/

// Рішення
// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: 'Jacob',
//   balance: 600,
//   withdraw(amount, onSuccess, onError) {
//     if(amount > TRANSACTION_LIMIT || amount > this.balance) {
//       return onError(`Transition limit ${TRANSACTION_LIMIT}$, your balance ${this.balance}`)
//     }
//     return onSuccess("Congratulations, the transaction was successful.")
//   },
//   deposit(amount, onSuccess, onError) {
//     if(amount > TRANSACTION_LIMIT || amount <= 0) {
//       return onError(`Transition limit ${TRANSACTION_LIMIT}$, your balance ${this.balance}`)
//     }
//      return onSuccess("Congratulations, the transaction was successful.")
//   },
// };

// function handleSuccess(message) {
//   console.log(`✅ Success! ${message}`);
// }
// function handleError(message) {
//   console.log(`❌ Error! ${message}`);
// }

// account.withdraw(200, handleSuccess, handleError);
// // account.withdraw(600, handleSuccess, handleError);
// // account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// // account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);

//===========================================================================
// Example 3 - Коллбек функції
//1. Напишіть функцію each(array, callback),
//2. Першим параметром очікує масив,
//3. Другим - функцію, яка застосовується до кожного елемента масиву.
//4. Функція each повинна повернути новий масив, елементами якого будуть результати виклику коллбека.

// function each(array, callback) {
//   const newArray = []

//   for(const arr of array) {
//     newArray.push(callback(arr))
//   }

//   return newArray
// }

// console.log(each([2, 4, 5, 6, 8], (value) => value * 2 ));
// console.log(each([22, 4, 53, 9, 88], (value) => value + 5 ));
// console.log(each([345, 55, 35, 611, 554], (value) => value / 2 ));

//================================================================================
// Example 4 - Стрілочні функції
// Виконайте рефакторинг коду за допомогою стрілочних функцій.

// const createProduct = (partialProduct, callback) => {
//   const product = { id: Date.now(), ...partialProduct };
//   callback(product);
// }

// const logProduct = product => console.log(product);
// const logTotalPrice = product => console.log(product.price * product.quantity);

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);
//=======================================================

// Example 5 - Стрілочні функції
// Виконайте рефакторинг коду за допомогою стрілочних функцій.

// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: 'Jacob',
//   balance: 400,
//   withdraw(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount > this.balance) {
//       onError(`Amount can't exceed account balance of ${this.balance} credits`);
//     } else {
//       this.balance -= amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },
//   deposit(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount <= 0) {
//       onError(`Amount must be more than 0 credits`);
//     } else {
//       this.balance += amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },
// };

// const handleSuccess = (message) => console.log(`✅ Success! ${message}`);
// const handleError = (message) => console.log(`❌ Error! ${message}`);

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);
//====================================================================
// Example 6 - Інлайн стрілочні функції
// Виконайте рефакторинг коду за допомогою стрілочних функцій.

// const each = (array, callback) => {
//   const newArr = [];
//   for (const el of array) {
//     newArr.push(callback(el));
//   }
//   return newArr;
// };

// console.log(each([64, 49, 36, 25, 16], value => value * 2));
// console.log(each([64, 49, 36, 25, 16], value => value - 10));
// console.log(each([64, 49, 36, 25, 16], value => Math.sqrt(value)));
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.ceil(value)));
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.floor(value)));
//======================================================

// Example 7 - Метод forEach
// Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.

// const logItems = (items) => {
//   items.forEach( (item, idx) => console.log(`${idx + 1} - ${item}`) );
// }

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);
//=======================================================
// Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.

// function printContactsInfo({ names, phones }) {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');

//   nameList.forEach((name, idx) => console.log(`${name} : ${phoneList[idx]}`))
// }

// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });
//=======================================================================

// Example 9 - Метод forEach
// Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.

// const calсulateAverage = (...args) => {
//   let total = 0;

//   args.forEach((item, index) => total += item)
//   return total / args.length;
// }

// console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
// console.log(calсulateAverage(14, 8, 2)); // 8
// console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2