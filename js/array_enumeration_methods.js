// ======array_enumeration_methods---------------

// Колекція об'єктів для всіх прикладів з автомобілями
// const cars = [
//   {
//     make: "BMW",
//     model: "X6",
//     type: "suv",
//     amount: 14,
//     price: 55045,
//     onSale: true,
//   },
//   {
//     make: "Honda",
//     model: "Accord",
//     type: "sedan",
//     amount: 2,
//     price: 22455,
//     onSale: true,
//   },
//   {
//     make: "Mazda",
//     model: "Mazda 6",
//     type: "sedan",
//     amount: 8,
//     price: 24195,
//     onSale: false,
//   },
//   {
//     make: "Renault",
//     model: "Laguna",
//     type: "suv",
//     amount: 7,
//     price: 31520,
//     onSale: true,
//   },
//   {
//     make: "Toyota",
//     model: "4Runner",
//     type: "suv",
//     amount: 19,
//     price: 34210,
//     onSale: false,
//   },
//   {
//     make: "Mercedec",
//     model: "S500",
//     type: "suv",
//     amount: 16,
//     price: 45560,
//     onSale: false,
//   },
//   {
//     make: "Lamborgini",
//     model: "Diablo",
//     type: "truck",
//     amount: 4,
//     price: 24320,
//     onSale: true,
//   },
//   {
//     make: "Chevrolet",
//     model: "Corvet",
//     type: "truck",
//     amount: 11,
//     price: 27110,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     model: "Fusion",
//     type: "sedan",
//     amount: 13,
//     price: 22120,
//     onSale: true,
//   },
//   {
//     make: "Audi",
//     model: "R8",
//     type: "suv",
//     amount: 6,
//     price: 31660,
//     onSale: false,
//   },
// ];

// Example 1 - Метод map============================

// Нехай функція getModels повертає масив моделей (поле model) всіх автомобілів.

// const getModels = newCars => {
//   return newCars.map(item => item.model)
// };

// const result = getModels(cars);
// console.log(result);

//================================================================
// Example 2 - Метод map========================

// Нехай функція makeCarsWithDiscount повертає новий масив об'єктів
// із змінним значенням властивості price залежно від переданої знижки.

// const makeCarsWithDiscount = (cars, discount) => {
//   return cars.map(item => {
//     const carsForDiscount = item.price - (item.price * discount);
//     return {...item, price: carsForDiscount}
//   })
// };

// console.table(makeCarsWithDiscount(cars, 0.2));
// console.table(makeCarsWithDiscount(cars, 0.4));

// Example 3 - Метод filter=======================================================

// Нехай функція filterByPrice повертає масив автомобілів ціна
//яких менша ніж значення параметра threshold.

// const filterByPrice = (cars, threshold) => {
//   return cars.filter(car => car.price < threshold)
// };

// console.table(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 25000));

// Example 5 - Метод filter================================================

//Нехай функція getCarsWithType повертає масив автомобілів тип яких
//збігається зі значенням параметра type.

// const getCarsWithType = (cars, type) => {
//   return cars.filter(({type: catType}) => catType === type)
// };

// console.table(getCarsWithType(cars, 'suv'));
// console.table(getCarsWithType(cars, 'sedan'));

// Example 6 - Метод find

// const getCarByModel = (cars, model) => {
//   return cars.find(item => item.model === model)
// };

// console.log(getCarByModel(cars, 'F-150'));
// console.log(getCarByModel(cars, 'CX-9'));

//Example 7 - Метод sort=====================
/*Нехай функція sortByAscendingAmount повертає новий масив автомобілів 
відсортований за зростанням значення якості amount.*/

// const sortByAscendingAmount = cars => {
//   const result = [...cars].sort((a, b) => a.amount - b.amount)
//   return result
// };

// console.table(sortByAscendingAmount(cars));
// console.log(cars);

// Example 8 - Метод sort=============================================================
/*Нехай функція sortByDescendingPrice повертає новий масив автомобілів 
відсортований за зменшенням значення властивості price.*/

// const sortByDescendingPrice = cars => {
//   return cars.sort((a, b) => b.price - a.price)
// };

// console.table(sortByDescendingPrice(cars));

//Example 9 - Метод sort=======================================================
/*Нехай функція sortByModel повертає новий масив автомобілів 

відсортований за назвою моделі в алфавітному та зворотному 
алфавітному порядку, в залежності від значення параметра order.*/

// const sortByModel = (cars, order) => {
//     if(order === 'asc') {
//       return cars.sort((a, b) => a.make.localeCompare(b.make));
//     } else if(order === 'desc') {
//       return cars.sort((a, b) => b.make.localeCompare(a.make));
//     }
// };

// console.table(sortByModel(cars, 'desc'));
// console.table(sortByModel(cars, 'asc'));
//a.make.localeCompare(b.make)
//b.make.localeCompare(a.make)

// Example 10 - Метод reduce=============================================================
//Нехай функція getTotalAmount повертає загальну кількість
//автомобілів (значення властивостей amount).

// const getTotalAmount = cars => {
//   return cars.reduce((acc, {amount}) => acc + amount,0)
// };

// console.log(getTotalAmount(cars));

// Example 11 - Ланцюжки методів==================================================================

//Нехай функція getAvailableCarNames повертає масив моделей автомобілів,
//але тільки тих, які зараз на розпродажі.

// const getModelsOnSale = cars => {
//   return cars.filter(({onSale}) => onSale).map((item) => item.make)
// };

// console.log(getModelsOnSale(cars));

// Example 12 - Ланцюжки методів===================================================
//Нехай функція getSortedCarsOnSale повертає масив автомобілів на розпродажі
//(Властивість onSale), відсортованих за зростанням ціни.

// const getSortedCarsOnSale = cars => {
//   return cars.filter(({onSale}) => onSale).sort((a,b) => a.price - b.price)
// };

// console.table(getSortedCarsOnSale(cars));

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];

// const getTotalBalanceByGender = (users, gender) => {
//   const result = [...users].filter(item => item.gender === gender).reduce((acc, item) => {
//     acc += item.balance
//     return acc
//   },0)
//   return result
// };

// console.log(getTotalBalanceByGender(users,"male"));

//===============приклад з перебором рядка літер і створення об'єкта===============================

// const str = 'dashgfhsafdhafdhadfahfdahgfdahgf'

// const result = [...str].reduce((acc, item) => {
//   acc.hasOwnProperty(item) ? acc[item] += 1 : acc[item] = 1
//   return acc
// },{})

// console.log(result);

// const a = {}

// a.b = 22
// console.log(a);

// const contacts = [
//   {
//     firstName: "Akira",
//     lastName: "Laine",
//     number: "0543236543",
//     likes: ["Pizza", "Coding", "Brownie Points"],
//   },
//   {
//     firstName: "Harry",
//     lastName: "Potter",
//     number: "0994372684",
//     likes: ["Hogwarts", "Magic", "Hagrid"],
//   },
//   {
//     firstName: "Sherlock",
//     lastName: "Holmes",
//     number: "0487345643",
//     likes: ["Intriguing Cases", "Violin"],
//   },
//   {
//     firstName: "Kristian",
//     lastName: "Vos",
//     number: "unknown",
//     likes: ["JavaScript", "Gaming", "Foxes"],
//   },
// ];

// 1.Якщо (name) не відповідає жодному контакту, поверніть рядок (No such contact).

// 2.Якщо (prop) не відповідає жодним дійсним властивостям контакту, що відповідає,
//(name) поверніть рядок (No such property)

// 3.Якщо обидва параметри є істинними, повертається («значення») цієї властивості.

// function lookUpProfile(name, prop) {
//   for(const contact of contacts) {

//     if(contact.firstName === name) {

//       if(contact.hasOwnProperty(prop)) {
//         return contact[prop]
//       } else {
//         return "No such property"
//       }

//     }

//   }

//   return "No such contact"
// }

// console.log(lookUpProfile("Sherlock", "likes"));

//=======рекурсія=======================================
// function countdown(n) {
//   if(n < 1) {
//     return []
//   } else {
//     const result = [n]
//     return result.concat(countdown(n - 1))
//   }
// }

// console.log(countdown(5));

// =====рекурсія=======================================
// function rangeOfNumbers(startNum, endNum) {
      
//   if(startNum <= endNum) {
//     const result = rangeOfNumbers(startNum, (endNum - 1))
//     result.push(endNum)
//     return result
//   } else {
//     return [];
//   }

// };

// console.log(rangeOfNumbers(1, 5));// має повертати [1, 2, 3, 4, 5].