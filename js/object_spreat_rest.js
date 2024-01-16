//spread: передача аргументів=====spread: створення нового масиву
// const arr = [4, 5, 6];
// console.log(arr);
// // console.log(Math.max(...arr));

// const copy = [1, 2, 3];
// console.log(copy);

// const copy1 = [...copy, ...arr]
// console.log(copy1);

// ============================spread: створення нового об'єкта
console.log(
  "====================================================================="
);
// const first = { propA: 5, propB: 10 };
// const second = { propC: 15 };
// const third = {...first, ...second};
// console.log(third);
// =====================
// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15, propD: 20 };

// // const third = { ...first, ...second };
// // console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }

// const fourth = {...second, propB: 60, ...first };
// console.log(fourth); // {propC: 50, propD: 20, propB: 10,, propA: 5}
// =============================rest==============

//==========================Деструктуризація об'єктів======================
// const myCar = {
//   name: "ford",
//   year: 2006,
//   color: "blue",
//   location: {
//     country: "Ukraina",
//     city: "Lutck",
//   },
//   type: "universal",
// }

// const {name , year, color, location, type, speed = "не визначено"} = myCar;

// console.log(`${sad} є найкраща машина в ${year}, вона була у ${color} кольорі в кузові ${type}, на даний момент вона знаходиться в ${location.country}, ${location.city} та має швидкість ${speed}`);
//===============================================

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
// ];

// for(const book of books) {
//   const {title, author, rating} = book
//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }
//=================Деструктуризація в циклах===================================
// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   name,
//   tag,
//   stats: { followers, views: userViews, likes: userLikes = 0 },
// } = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(userViews); // 4827
// console.log(userLikes); // 1308

// for (const book of books) {
//   const { title, author, rating } = book;

//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }
//======================Деструктуризація масивів==============================

// const rgb = [200, 255, 100];
// const [red, green, blue] = rgb;

// console.log(`R:${red},G:${green},B:${blue}`);
//====================Задачі==============================================
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const { hex, rgb } of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);
//=================================================
// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line

// const {
//   today: {
//     low: lowToday,
//     high: highToday,
//     icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
//   tomorrow: {
//     low: lowTomorrow,
//     high: highTomorrow,
//     icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
// } = forecast;

// console.log(lowToday);
//========================================================
// function calculateMeanTemperature(temp) {
//   const {
//     today: { low: todayLow, high: todayHigh },
//     tomorrow: { low: tomorrowLow, high: tomorrowHigh }
//   } = temp;

//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }
// console.log(calculateMeanTemperature({ today: {low: 37, high: 40}, tomorrow: {low: 33, high: 38} }));
//====================================================
// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// console.log(bestScore);
// console.log(worstScore);
//

// const a = {probA: 10, probB: 15, probC: 35};
// const b = {probD: 7, probB: 20};
// const c = { ...b, ...a };

// console.log(c);//{probD: 7, probB: 15, probA: 10, probC: 35}

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
//   const obj = {completed, category, priority, ...data}
//   // Change code above this line
//   return obj
// }

// console.log(makeTask({ priority: "Low", text: "Choose shampoo" })) //{ category: "General", priority: "Low", text: "Choose shampoo", completed: false });
// ============================================================

// const test = [
//   {
//     name: "Mikola",
//     year: 33,
//     gender: "men",
//   },
// ];

// for (const { name, year, gender } of test) {

//   console.log(name);
//   console.log(year);
//   console.log(gender);
// }

// const user = {
//   name: "test",
//   age: 11,
//   skills: {
//     html: true,
//     css: true,
//     scss: false,
//     js: false,
//     cars: {
//       audi: "a5",
//       ford: [{
//         focus: 2006,
//         fiesta: 2008,
//       }],
//     },
//     hobby: [{a: 12, b: 233}, {c: 33}]
//   },
// };

// const {
//   age,
//   html,
//   skills: { hobby: [oneMass, twoMass] },
// } = user;

// console.log(oneMass, twoMass);

// const users = [
//   {
//     name: "user1",
//     car: {
//       bmw: "X5",
//       audi: "A4",
//     },
//   },
//   {
//     name: "user2",
//     car: {
//       audi: "A5",
//     },
//   },
//   {
//     name: "user3",
//     car: {
//       bmw: "X3",
//     },
//   },
// ];
// function findMatches(numbers, ...args) {
//   const matches = []; // Don't change this line

//   for(const number of numbers) {
//     if(args.includes(number)) {
//       matches.push(number);
//     }
//   }
//   // Change code above this line
//   return matches;
// }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7, 3, 5, 778, 23, 5));//[1,2]

// const users = [
//   {
//     name: "user1",
//     car: {
//       bmw: "X5",
//       audi: "A4",
//     },
//   },
//   {
//     name: "user2",
//     car: {
//       audi: "A5",
//     },
//   },
//   {
//     name: "user3",
//     car: {
//       bmw: "X3",
//     },
//   },
// ];

// const [{name}] = users
// for(const user of users) {
//   const {name = "No name", car: {bmw = "None", audi = "None"}} = user

//   console.log(name, bmw, audi);
// }
////////////////====Example 1===//////////////////////////////////////////////////////////////////

// Example 1 - Деструктуризація
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.
/**
 * Розраховуємо індекс маси тіла
 * @param {Object} obj
 * @returns {Number} BMI
 */
// function calcBMI({weight, height}) {
//   const numericWeight = Number(weight.replace(',', '.'));
//   const numericHeight = Number(height.replace(',', '.'));

//   return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }

// Було
// console.log(calcBMI('88,3', '1.75'));//28.8
// console.log(calcBMI('68,3', '1.65'));//25.1
// console.log(calcBMI('118,3', '1.95'));//31.1

// Очікується
// console.log(calcBMI({weight: '88,3', height: '1.75',}));
// console.log(calcBMI({weight: '68,3', height: '1.65',}),);
// console.log(calcBMI({weight: '118,3', height: '1.95',}),);

////////////////====Example 2===//////////////////////////////////////////////////////////////////

// Example 2 - Деструктуризація
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.

/**
 * Приймає об'єкт, де значення ключа це string імен і телефонів, в результаті виводить список контактів з номерами телефонів
 * @param {Object} obj
 */
// function printContactsInfo({names, phones}) {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');

//   for (let i = 0; i < nameList.length; i += 1) {
//     if(nameList[i] && phoneList[i]) {
//       console.log(`${nameList[i]}: ${phoneList[i]}`);
//     }
//   }
// }

// Було
// printContactsInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300',
// );

// Очікується
// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });

////////////////====Example 3===//////////////////////////////////////////////////////////////////

// Example 3 - Глибока деструктуризація
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.

//====Варіант 1
/**
 * Виводить строку
 * @param  {...any} obj
 * @returns {String}
 */
// function getBotReport(...obj) {
//   const [{companyName, bots: {repair: repairBots,  defence: defenceBots }}] = obj;
//   return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// }

//====Варіант 2
/**
 * Виводить строку
 * @param {obj} obj
 * @returns {String}
 */
// function getBotReport({companyName,bots: { repair: repairBots, defence: defenceBots }}) {
//   return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// }

// Було
// console.log(getBotReport('Cyberdyne Systems', 150, 50));

// Очікується
// console.log(
//   getBotReport({
//     companyName: "Cyberdyne Systems",
//     bots: {
//       repair: 150,
//       defence: 50,
//     },
//   })
// ); // "Cyberdyne Systems has 200 bots in stock"

//==================================== Example 4 =================================================================
// Перепиши функцію так, щоб вона приймала об'єкт параметрів із властивостями companyName та stock та виводила репорт про кількість товарів на складі будь-якої компанії.

// Рішення
/**
 * Виводить репорт про кількість товарів на складі будь-якої компанії
 * @param {Object} obj
 * @returns {Strinng}
 */
// function getStockReport({companyName, stock}) {
//   let total = 0;
//   for(const value of Object.values(stock)) {
//     total += value
//   }
//   return `${companyName} has ${total} items in stock`;
// }

// console.log(getStockReport({
//     companyName: "Cyberdyne Systems",
//     stock: {
//       shoes: 150,
//       skirts: 50,
//     },
//   })
// ); // "Cyberdyne Systems has 200 items in stock"

// console.log(
//   getStockReport({
//     companyName: 'Belacci',
//     stock: {
//       shoes: 20,
//       skirts: 10,
//       hats: 5,
//     },
//   }),
// ); // "Belacci has 35 item in stock"

/////////////////////////==================Example 5 - Операція spread===================================
//Доповни функцію createContact(partialContact) так, щоб вона повертала новий об'єкт контакту з доданими властивостями id та createdAt, а також list зі значенням "default" якщо в partialContact немає такої властивості.

// Рішення
// function createContact(partialContact) {
//   return {
//     createdAt: new Date(),
//     id: generateId(),
//     list: "default",
//     ...partialContact
//   }
// }

// console.log(
//   createContact({
//     name: 'Mango',
//     email: 'mango@mail.com',
//     list: 'friends',
//   }),
// );
// console.log(
//   createContact({
//     name: 'Poly',
//     email: 'poly@hotmail.com',
//   }),
// );

// function generateId() {
//   return '_' + Math.random().toString(36).substr(2, 5);
// }

// Example 6 - Операція rest
// Напиши функцію transformUsername(user) так, щоб вона повертала новий об'єкт із властивістю fullName, замість firstName та lastName.

// Рішення
// function transformUsername({firstName, lastName, ...user}) {
//   return {
//     fullName: `${firstName} ${lastName}`, ...user};
// }

// console.log(
//   transformUsername({
//     id: 1,
//     firstName: "Jacob",
//     lastName: "Mercer",
//     email: "j.mercer@mail.com",
//     friendCount: 40,
//   })
// );

// console.log(
//   transformUsername({
//     id: 2,
//     firstName: 'Adrian',
//     lastName: 'Cross',
//     email: 'a.cross@hotmail.com',
//     friendCount: 20,
//   }),
// );

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = [];
// const values = [];
// // Change code below this line
// for(const key in apartment) {
//   keys.push(key)
//   values.push(apartment[key])
// }

// console.log(keys);
// console.log(values);

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
//   if(apartment.hasOwnProperty(key)) {
//     keys.push(key)
//     values.push(apartment[key])
//   }

//   // Change code above this line
// }
// console.log(keys);
// console.log(values);
// console.log(apartment);

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   for(const key in object) {
//     if(object.hasOwnProperty(key)) {
//       propCount += 1
//     }
//   }
//   // Change code above this line
//   return propCount;
// }

// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500}));

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);

// for(const key of keys) {
//   values.push(apartment[key])
// }

// console.log(values);
// console.log(keys);

// function countTotalSalary(salaries) {
//   let totalSalary = 0;

//   for(const value of Object.values(salaries)) {
//     totalSalary += value
//   }
//   return totalSalary;
// }

// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80}));

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//   for(const product of products) {
//     if(product.name === productName) {
//       return product.price
//     }
//   }

//   return null
//   // Change code above this line
// }
// console.log(getProductPrice("Droid"));

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   const result = [];

//   for (const product of products) {

//     if (product[propName]) {
//       result.push(product[propName]);
//     }
//   }
//   return result;
//   // Change code above this line
// }

// console.log(getAllPropValues("quantity"));

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line

//   // Change code above this line
//   return {category, priority, completed, ...data}
// }

// console.log(makeTask({ category: "Homemade", text: "Take out the trash" }));
// //Повертає { category: "Homemade", text: "Take out the trash", completed: false }

// function findMatches(arrs, ...args) {
//   const matches = []; // Don't change this line

//   for (const arr of arrs) {
//     if (args.includes(arr)) {
//       matches.push(arr);
//     }
//   }

//   // Change code above this line
//   return matches;
// }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
//   const numberString = this.books.indexOf(oldName);
//   this.books.splice(numberString, 1, newName)
//   console.log(this.books);
//     // Change code above this line
//   },
// };

// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     for (const potion of this.potions) {

//       if (potionName === potion) {
//         const index = this.potions.indexOf(potion)
//         this.potions.splice(index, 1)
//       }
//     }
//   },
// };

// console.log(atTheOldToad.removePotion("Stone skin"));
// console.log(atTheOldToad.potions);

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],

//   updatePotionName(oldName, newName) {

//     for (const potion of this.potions) {
//       if (potion === oldName) {
//         const index = this.potions.indexOf(potion);
//         this.potions.splice(index, 1, newName);
//       }
//     }
//   },

// };
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],

//   updatePotionName(oldName, newName) {
//     const potions = [...this.potions]

//     for (const potion of potions) {
//       if (potion === oldName) {
//         const index = potions.indexOf(potion);
//         potions.splice(index, 1, newName);
//       }
//     }
//     this.potions = potions;
//   },
// }

// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
// console.log(atTheOldToad.potions);
//
//===========================================================================
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//     { name: "Aracul", price: 980 },
//   ],//****** */
//   //  метод для отримання всього зілля. Повертає значення властивості potions.
//   getPotions() {
//     return this.potions

//   },//****** */
//   // додає зілля newPotion (вже об'єкт) в масив у властивості potions, але тільки, якщо такого зілля ще немає в інвентарі. В іншому випадку повертається рядок.
//   addPotion(newPotion) {
//     for(const potion of this.potions) {
//       if(potion.name === newPotion.name) {
//         return `'Error! Potion ${newPotion.name} is already in your inventory!'`;
//       }
//     }
//     this.potions.push(newPotion);
//   },//****** */
//   // видаляє об'єкт зілля з ім'ям potionName з масиву у властивості potions
//   removePotion(potionName) {
//     let args = [];
//     for(const potion of this.potions) {
//       if(potion.name !== potionName) {
//         args.push(potion);
//       };
//     };
//     this.potions = [...args];
//   },//****** */
//   // оновлює властивість name об'єкта-зілля з назвою oldName на newName в масиві potions
//   updatePotionName(oldName, newName) {
//     for(const potion of this.potions) {
//       if (potion.name === oldName) {
//         potion.name = newName
//       }
//     }
//   },
//   // Change code above this line
// };

// console.log(atTheOldToad.addPotion({ name: 'Stone skin', price: 240 }));
//Для вихідного об'єкта виклик `atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 })`, повертає рядок `'Error! Potion Dragon breath is already in your inventory!'`
// const potions =[{ name: "Speed", price: 5656567 }];
// let test = {}
// const qwerty = [{ name: "Speed", price: 460 }];

// for(const potion of potions) {
//   for(const qwe of qwerty) {
//     test = {...potion, ...qwe}
//   }
// }

// console.log(test);
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// const potion = this.potions
// for(let i = 0; i < potion.length; i += 1) {
//   if(potion[i].name === potionName) {
//     this.potions.splice(i, 1)
//     break
//   }
// }

////////////////////////////////////////////////////////////////////
// function calcBMI(paramUser) {
//   const { weight, height } = paramUser;
//   const numericWeight = Number(weight.replace(",", "."));
//   const numericHeight = Number(height.replace(",", "."));
//   return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }

// Було
// console.log(calcBMI('88,3', '1.75'));
// console.log(calcBMI('68,3', '1.65'));
// console.log(calcBMI('118,3', '1.95'));

// Очікується
// console.log(calcBMI({ weight: "88,3", height: "1.75" }));
// console.log(
//   calcBMI({
//     weight: "68,3",
//     height: "1.65",
//   })
// );
// console.log(
//   calcBMI({
//     weight: "118,3",
//     height: "1.95",
//   })
// );
///////////////////////////////////////////////////////////////////////
// function printContactsInfo(userTell) {
//   const { names, phones } = userTell;
//   const nameList = names.split(",");
//   const phoneList = phones.split(",");
//   for (let i = 0; i < nameList.length; i += 1) {
//     if (typeof nameList[i] === typeof phoneList[i]) {
//       console.log(`${nameList[i]}: ${phoneList[i]}`);
//     }
//   }
// }

// Було
// printContactsInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300',
// );

// Очікується
// printContactsInfo({
//   names: "Jacob,William,Solomon,Artemis",
//   phones: "89001234567,89001112233,890055566377,890055566300",
// });

/////////////////////////////////////////////////////////////////

// function getBotReport(companyInfo) {
//   const {
//     companyName,
//     bots: { repair: repairBots, defence: defenceBots },
//   } = companyInfo;

//   return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// }

// // Було
// // console.log(getBotReport("Cyberdyne Systems", 150, 50));

// // Очікується
// console.log(
//   getBotReport({
//     companyName: "Cyberdyne Systems",
//     bots: { repair: 150, defence: 50 },
//   })
// ); // "Cyberdyne Systems has 200 bots in stock"
//////////////////////////////////////////////////////////////////////
// Example 6 - Операція rest
// Напиши функцію transformUsername(user) так, щоб вона повертала новий об'єкт із властивістю fullName, замість firstName та lastName.

// Рішення
function transformUsername({ firstName, lastName, ...otherProps }) {
  return {
    fullName: `${firstName} ${lastName}`,
    ...otherProps,
  };
}

console.log(
  transformId({
    id: 1,
    firstName: 'Jacob',
    lastName: 'Mercer',
    email: 'j.mercer@mail.com',
    friendCount: 40,
  }),
);

console.log(
  transformId({
    id: 2,
    firstName: 'Adrian',
    lastName: 'Cross',
    email: 'a.cross@hotmail.com',
    friendCount: 20,
  }),
);
