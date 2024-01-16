// const modelCar = "model";

// const car = {
//   name: "ford",
//   model: "focus",
//   year: 2006,
//   class: "c",
//   manufacturer: ["Russia", "Germani", "USA"],
//   color: "blue",
//   dimensions: {
//     mass: 1200,
//     qwe: 123,
//     asdfgh: 123456,
//   },
// }

// const bookShelf = {
//   books: ["The Last Kingdom", "Dream Guardian"],
//   // Це метод об'єкта
//   getBooks() {
//     console.log("Цей метод буде повертати всі книги - властивість books");
//   },
//   // Це метод об'єкта
//   addBook(bookName) {
//     console.log("Цей метод буде додавати нову книгу у властивість books");
//   },
// };

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На березі спокійних вод",
//     author: "Роберт Шеклі",
//     rating: 8.51,
//   },
//   {
//     title: "Сон смішної людини",
//     author: "Федір Достоєвський",
//     rating: 7.75,
//   },
// ];

// for (const book of books) {
//   // Об'єкт книги
//   console.log(book);
// }

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length - 1];
// console.log(lastTag);

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   for (const key in object) {
//     if(object.hasOwnProperties(key)) {
//       propCount += 1
//     }
//   }
//   // Change code above this line
//   return propCount;
// }

// countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
//   sayHello() {
//     console.log(this.rating);
//   },
//   iKnow() {
//     const keys = Object.keys(this.owner);
//     const values = Object.values(this.owner);

//     for (const key of keys) {
//       console.log(key);
//     }
//     for (const value of values) {
//       console.log(value);
//     }
//   },
// };

// apartment.iKnow()

// for(const key in apartment2) {
//   if(apartment2.hasOwnProperty(key)) {
//     console.log("apartment2", key)
//   } else {
//     console.log("apartment", key);
//   }
// }

// apartment.sayHello()
// // apartment2.sayHello()
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   let keys = Object.keys(salaries)
//   for(const key of keys) {
//       totalSalary += salaries[key]
//     }
//   // Change code above this line
//   return totalSalary;
// }

// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for(const color of colors) {
//   console.log(color.hex);
// }

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {

//   for(const product of products) {

//     if(product.name === productName) {
//         return product.price
//     }
//   }

//   return null

// }

// console.log(getProductPrice("Scanner"));

// function phoneticLookup(val) {
//   let result = "";

//   // Змініть код лише під цим рядком
//   const value = {
//     alpha: "Adams",
//     bravo: "Boston",
//     charlie: "Chicago",
//     delta: "Denver",
//     echo: "Easy",
//     foxtrot: "Frank",
//   }
//   result = value[val]

//   // Змініть код лише над цим рядком
//   return result;
// }

// console.log(phoneticLookup("charlie"));

// function checkObj(obj, checkProp) {

//   if(obj.hasOwnProperty(checkProp)) {
//     return obj[checkProp]
//   }
//   return "Not Found"
// }

// console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift"));

// const recordCollection = {
//   2548: {
//     albumTitle: 'Slippery When Wet',
//     artist: '',
//     tracks: ['Let It Rock', 'You Give Love a Bad Name']
//   },
//   2468: {
//     albumTitle: '1999',
//     artist: 'Prince',
//     tracks: ['1999', 'Little Red Corvette']
//   },
//   1245: {
//     artist: 'Robert Palmer',
//     tracks: []
//   },
//   5439: {
//     albumTitle: 'ABBA Gold',
//     artist: 'Robert Palmer',
//     tracks: ['Robert Palmer'],
//   }
// };
// Завершіть функцію, використовуючи правила нижче, щоб змінити об’єкт, переданий до функції.

// Ваша функція завжди повинна повертати весь об’єкт records.

//* Якщо value є пустим рядком, видаліть дану властивість prop з альбому.
//* Якщо prop не є tracks та value не є пустим рядком, призначте value до prop альбому.
// Якщо prop є tracks та value не є пустим рядком, вам треба оновити масив tracks в альбомі. Якщо альбом не має властивості tracks, то призначте порожній масив. Потім додайте value як останній елемент у масиві tracks альбому.

// Примітка: копія об’єкту recordCollection використовується для тестів. Ви не повинні напряму змінювати об’єкт recordCollection.

// function updateRecords(records, id, prop, value) {
//   if (records[prop] === records.tracks) {
//     console.log(true)
//   }
//   return records;
// }

// console.log(recordCollection[5439].artist === recordCollection[5439].tracks);
// console.log(recordCollection[5439].tracks);
// console.log(recordCollection[5439].artist);

// const arr = [
//   [1, 2], [3, 4], [5, 6]
// ];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     console.log(arr[i][j]);
//   }
// }
// function multiplyAll(arr) {
//   let product = 1;
//   // Змініть код лише під цим рядком
//   for(let i = 1; i < arr.length; i += 1) {
//     for(let j = 0; j < arr[i].length; j += 1) {
//       product *= arr[i][j]
//     }
//   }
//   // Змініть код лише над цим рядком
//   return product;
// }

// console.log(multiplyAll([[1], [2], [3]]));
//=======================1111111111111111111111================================
// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false
// console.log(user);

// const keys = Object.keys(user);

// for(const key of keys) {
//   console.log(`${key} : ${user[key]}`);
// }
//=======================22222222222222222222222222================================
// У нас є об'єкт, де зберігаються зарплати нашої команди.
// Напишіть код для підсумовування всіх зарплат і збережіть результат у змінній sum.
// Повинно вийти 390.
// Якщо об'єкт salaries порожній, то результат має бути 0.

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// let sum = 0;

// let values = Object.values(salaries)

// for(const value of values) {
//   sum += value
// }

// console.log(sum);
//=======================3333333333333333333333333333333333================================
// Напишіть функцію calcTotalPrice(stones, stoneName), яка приймає масив об'єктів та рядок з назвою каменю.
// Функція рахує і повертає загальну вартість каміння з таким ім'ям, ціною та кількістю з об'єкта

// const stones = [{
//     name: 'Смарагд',
//     price: 1300,
//     quantity: 4
//   },
//   { name: 'Діамант', price: 2700, quantity: 3 },
//   { name: 'Сапфір', price: 400, quantity: 7 },
//   { name: 'Щебінь', price: 200, quantity: 2 },
// ];

// function calcTotalPrice(stones, stoneName) {
//   let sum = 0;

//   for(const stone of stones) {
//     if(stone.name === stoneName) {
//       sum += (stone.price * stone.quantity)
//     }
//   }

//   if (stone.name === stoneName) {
//     sum += (stone.price * stone.quantity);
//   }
//   return sum;
// }

// console.log(calcTotalPrice(stones, 'Смарагд'));

//=======================444444444444444444444444444444444444================================
// // Напиши скрипт управління особистим кабінетом інтернет банку.
// // Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.

// /*
//  * Типів транзакцій всього два.
//  * Можна покласти чи зняти гроші з рахунку.
//  */
// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };
// Object.freeze(Transaction)

// /*
//  * Кожна транзакція це об'єкт із властивостями: id, type та amount
//  */

// const account = {
//   // Поточний баланс рахунку
//   balance: 0,

//   // Історія транзакцій
//   transactions: [],
//   /*
//    * Метод створює та повертає об'єкт транзакції.
//    * Приймає суму та тип транзакції.
//    */
//   createTransaction(amount, type) {
//     const id = Math.floor(Math.random() * 1000000);
//     const objTransaction = {
//       id,
//       amount,
//       type,
//     }

//     return objTransaction
//   },

//   /*
//    * Метод, що відповідає за додавання суми до балансу.
//    * Приймає суму транзакції.
//    * Викликає createTransaction для створення об'єкта транзакції
//    * після чого додає його до історії транзакцій
//    */
//   deposit(amount) {
//     this.balance += amount;
//     this.createTransaction(amount, Transaction.DEPOSIT);
//     this.transactions.push(this.createTransaction(amount, 'deposit'));
//   },

//   /*
//    * Метод, що відповідає за зняття суми з балансу.
//    * Приймає суму транзакції.
//    * Викликає createTransaction для створення об'єкта транзакції
//    * після чого додає його до історії транзакцій.
//    *
//    * Якщо amount більше ніж поточний баланс, виводь повідомлення
//    * про те, що зняття такої суми не можливе, недостатньо коштів.
//    */
//   withdraw(amount) {
//     this.createTransaction(amount, Transaction.WITHDRAW);

//     if(amount > this.balance || amount <= 0) {
//       return "недостатньо коштів";
//     }
//     this.transactions.push(this.createTransaction(amount, Transaction.WITHDRAW));
//     this.balance -= amount
//   },

//   /*
//    * Метод повертає поточний баланс
//    */
//   getBalance() {
//     return `Це наш баланс - ${this.balance}`
//   },

//   /*
//    * Метод шукає та повертає об'єкт транзакції по id
//    */
//   getTransactionDetails(id) {
//     for(const transaction of this.transactions) {

//       if(transaction.id === id) {
//         return transaction;
//       }
//     }

//     return "Empty"
//   },

//   /*
//    * Метод повертає кількість коштів
//    * певного типу транзакції з усієї історії транзакцій
//    */
//   getTransactionTotal(type) {
//     let sum = 0;
//     for(const transaction of this.transactions) {
//       if(transaction.type === type) {
//         sum += transaction.amount
//       }
//     }
//     return sum
//   },
// };

// //Метод створює та повертає об'єкт транзакції.
// // console.log(account.createTransaction(200, "deposit"));
// //Метод, що відповідає за додавання суми до балансу.
// account.deposit(300)
// account.deposit(200)
// //Зняття суми з балансу.
// account.withdraw(45)
// //Наші Транзакції.
// console.table(account.transactions);
// //Баланс рахунку;
// // console.log(account.getBalance());

// // console.log(account.getTransactionTotal("deposit"));
// // console.log(account.getTransactionTotal("withdraw"));
// console.log(account.getTransactionDetails(268292));
//
// ## Example 1 - Основы обьектов

// Напиши скрипт, который, для объекта `user`, последовательно:

// - выводит содержимое объекта `user` в формате `ключ:значение` используя
//   `Object.keys()` и `for...of`

// ### Код

// ```js
// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// user.mood = "happy";
// user.hobby = 'skydiving';
// user.premium = false;

// const keys = Object.keys(user)

// for(const key of keys) {
//   console.log(`${key}: ${user[key]}`);
// }
///////////////////////////////////////////////////////////////
// ## Example 2 - метод Object.values()

// У нас есть объект, в котором хранятся зарплаты нашей команды. Напишите код для
// суммирования всех зарплат и сохраните результат в переменной sum. Должно
// получиться 390. Если объект `salaries` пуст, то результат должен быть 0.

// ### Код

// // ```js
// const salaries = { John: 100, Ann: 160, Pete: 130 };

// function totalValue(users) {

//   let sum = 0;

//   const user = Object.values(users);
  
//   if(user.length === 0) {
//     return 0
//   }

//   for (const number of user) {
//     sum += number;
//   }

//   return sum
// }

// console.log(totalValue(salaries));
/////////////////////////////////////////////////////////////////////////////////////////
// Напишите ф-цию `calcTotalPrice(stones, stoneName)`, которая принимает массив
// обьектов и строку с названием камня. Ф-ция считает и возвращает общую стоимость
// камней с таким именем, ценой и количеством из обьекта

// ### Код

// ```js
// const stones = [
//   { name: 'Изумруд', price: 1300, quantity: 4 },
//   { name: 'Бриллиант', price: 2700, quantity: 3 },
//   { name: 'Сапфир', price: 400, quantity: 7 },
//   { name: 'Щебень', price: 200, quantity: 2 },
// ];
// // ```

// function calcTotalPrice(stones, stoneName) {
//   let sum = 0

//   for(const {name, price, quantity} of stones) {
//     if(name === stoneName)
//     sum += price * quantity
//   }

//   return `Загальна сума за ${stoneName} дорівнює ${sum}$`
// }

// console.log(calcTotalPrice(stones, 'Бриллиант'));
//////////////////////////////////////////////////////////////////////////////
// ## Example 4 - Комплексные задачи

// Напиши скрипт управления личным кабинетом интернет банка. Есть объект `account`
// в котором необходимо реализовать методы для работы с балансом и историей
// транзакций.

// ```js
// /*
//  * Типов транзацкий всего два.
//  * Можно положить либо снять деньги со счета.
//  */
// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// // /*
// //  * Каждая транзакция это объект со свойствами: id, type и amount
// //  */

// const account = {
//   // Текущий баланс счета
//   balance: 0,

//   // История транзакций
//   transactions: [],

//   /*
//    * Метод создает и возвращает объект транзакции.
//    * Принимает сумму и тип транзакции.
//    */
//   createTransaction(amount, type) {
//     const objTransaction = {
//       amount,
//       type,
//       id: this.transactions.length * 3
//     }
//     return objTransaction
//   },//********************************

//   /*
//    * Метод отвечающий за добавление суммы к балансу.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций
//    */
//   deposit(amount) {
//     account.balance += amount;
//     this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT))
//   },//********************************

//   /*
//    * Метод отвечающий за снятие суммы с баланса.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций.
//    *
//    * Если amount больше чем текущий баланс, выводи сообщение
//    * о том, что снятие такой суммы не возможно, недостаточно средств.
//    */
//   withdraw(amount) {
//     this.transactions.push(this.createTransaction(amount, Transaction.WITHDRAW))
//     if(amount > this.balance) {
//       return "you don't have enough money!!"
//     }
//       this.balance -= amount
//   },//********************************

//   /*
//    * Метод возвращает текущий баланс
//    */
//   getBalance() {
//     return this.balance
//   },//********************************

//   /*
//    * Метод ищет и возвращает объект транзации по id
//    */
//   getTransactionDetails(id) {
//     for(const transaction of this.transactions) {
//       if(transaction.id === id){
//         return transaction
//       }
//     }
//     return "ERROR!!!! Не вдалось знайти масив по id =("
//   },
//   // getID() {
//   //   return Math.floor(Math.random() * 1000000);
//   // },
//   /*
//    * Метод возвращает количество средств
//    * определенного типа транзакции из всей истории транзакций
//    *///********************************
//   getTransactionTotal(type) {
//     let sum = 0;
//     for(const transaction of this.transactions) {
//       if(transaction.type === type) {
//         console.log(transaction.type);
//         console.log(type);
//         sum += transaction.amount;
//       }
//     }
//     return sum;
//   },
// };

// account.deposit(200)
// account.deposit(250);
// account.deposit(650);
// account.deposit(350);
// account.deposit(750);
// console.log(account.transactions);
// account.withdraw(477) 
// console.log(account.getBalance());

// console.log(account.getTransactionTotal(Transaction.WITHDRAW));

// console.log(account.getTransactionDetails(878111));