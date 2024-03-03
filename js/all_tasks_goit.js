//LESSON-01=============================

// Example 1 - Математичні оператори
// Виведи на екран загальну кількість яблук та винограду. Різницю яблук та винограду.

// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;
// const diff = grapes - apples;

// console.log("Загальна кількість яблук та винограду: " + total);
// console.log("Різниця між кількістю яблук та винограду: " + diff);
//===================================================================================

// Example 2 - Комбіновані оператори
//Заміни вираз перевизначення комбінованим оператором +=.

// let students = 100;
// students += 50;
// console.log(students);

//====================================================================================

// Example 3 - Пріоритет операторів
// Розбери пріоритет операторів в інструкції привласнення значення змінної result.
// const result = 108 + 223 - 2 * 5;

//==Розв'язок:
// const result = (108 + 223) - (2 * 5);
// console.log(result);

//====================================================================================
//Example 4 - Клас Math

// Напиши скрипт, який виводить у консоль заокруглені вгору/вниз і т.д. значення змінної value.
// Використовуй методи Math.floor(), Math.ceil() та Math.round(). Перевір що буде в консолі при значеннях 27.3 та 27.9.

// const value = 27.74534543;

// console.log(Math.floor(value));
// console.log(Math.ceil(value));
// console.log(Math.round(value));
//====================================================================================
// Example 5 - Шаблонні рядки
//Склади фразу за допомогою шаблонних рядків A has B bots in stock, де A, B - змінні вставлені в рядок.

// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;
// const message = `${companyName} has ${repairBots + defenceBots} bots in stock`;
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"
//====================================================================================

//Example 6 - Методи рядків та чейнінг

//Напиши скрипт, який розраховує індекс маси тіла людини.
//Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини у метрах.

//Вага та висота зберігаються у змінних weight та height, але не як числа,
//а в вигляді рядків (спеціально для завдання). Не цілі числа можуть бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової частини може бути кома.

//Індекс маси тіла необхідно округлити до однієї цифри після коми;

// let weight = '88,3';
// let height = '1.75';

// const newWeight = (Number(weight.replace("," , ".")))
// const newHeight = (Number(height.replace("," , ".")))

// const bmi = Number((newWeight / Math.pow(newHeight, 2)).toFixed(1))

// console.log(bmi); // 28.8

//====================================================================================

// Example 7 - Оператори порівняння та приведення типів
// Яким буде результат виразів?

// console.log(5 > 4); true

// console.log(10 >= '7');true

// console.log('2' > '12'); true

// console.log('2' < '12');false

// console.log('4' == 4); true

// console.log('6' === 6);false

// console.log('false' === false);false

// console.log(1 == true); true

// console.log(1 === true);false

// console.log('0' == false);true

// console.log('0' === false);false

// console.log('Papaya' < 'papaya');true

// console.log('Papaya' === 'papaya');false

// console.log(undefined == null);true

// console.log(undefined === null);false
//============================================================

// Example 8 - Логічні оператори
// Яким буде результат виразів?

// console.log(true && 3, "3");

// console.log(false && 3, "false");

// console.log(true && 4 && 'kiwi', "kiwi");

// console.log(true && 0 && 'kiwi', "0");

// console.log(true || 3, "true");

// console.log(true || 3 || 4, "true");

// console.log(true || false || 7, "true");

// console.log(null || 2 || undefined, "2");

// console.log((1 && null && 2) > 0, "false");

// console.log(null || (2 && 3) || 4, "3");
//===================================================================================

// Example 9 - Значення за замовчуванням та оператор нульового злиття

// Отрефактори код так, щоб у змінну value присвоювалося значення змінної incomingValue,
// якщо воно не рівне undefined або null.
// В іншому випадку має присвоюватися значення defaultValue.

// Перевір роботу скрипта для наступних значень змінної incomingValue: null, undefined, 0, false.
// Використовуй оператор ?? (nullish coalescing operator).

// const incomingValue = 5;
// const defaultValue = 10;

// const value = (incomingValue ?? 0) || defaultValue;
// console.log(value);

//====================================================================================

// Example 10 - Оператор % та методи рядків
// Напиши скрипт, який переведе значення totalMinutes (кількість хвилин)
// в рядок у форматі годин та хвилин HH:MM.

// 70 покаже 01:10
// 450 покаже 07:30
// 1441 покаже 24:01

// const totalMinutes = 1441;

// console.log(totalMinutes);

// const hours = String(Math.floor(totalMinutes / 60))
// const minutes = String(totalMinutes % 60)

// const time = `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}`

// console.log(hours);
// console.log(minutes);
// console.log(time);

// =======Модуль 1. Заняття 2. Розгалуження. Цикли

// Example 1 - Введення користувача та розгалуження
//Використовуючи конструкцію if..else та prompt,
//напиши код, який питатиме: "Яка офіційна назва JavaScript?".
//Якщо користувач вводить ECMAScript, то показуй alert з рядком "Правильно!",
//в іншому випадку - "Не знаєте? ECMAScript!"

// const isNameJs = prompt("Яка офіційна назва JavaScript?").toLowerCase()

// const name = "ECMAScript"

// if(isNameJs === name.toLowerCase()) {
//   alert("Правильно!")
// } else {
//   alert("Не знаєте? ECMAScript!")
// }

// console.log(isNameJs);
//============================================================================

// Example 2 - Відображення часу (if...else)

// Напиши скрипт для відображення годин та хвилин у консолі браузера
// у вигляді рядка формату "14 г. 26 хв.".
// Якщо значення змінної minutes дорівнює 0, то виводь рядок "14 г.", без хвилин.

// const hours = 14;
// const minutes = 33;
// let timestring;

// if(minutes === 0) {
//   console.log(`${hours}год`);
// } else {
//   console.log(`${hours}г. ${minutes}хв.`);
// }

//============================================================================

// // Example 3 - Розгалуження
// // 1.Напиши скрипт, який виводить у консоль рядок "Це позитивне число", якщо у prompt користувач ввів число більше нуля.
// // 2. Якщо було введено нуль, виводь в консоль рядок "Це нуль".
// // Якщо передали від'ємне число, у консолі повинен бути рядок "Це негативне число".

// const userInput = Number(prompt('Введіть число'));

// if(userInput > 0) {
//   alert("Це позитивне число")
// } else if (userInput === 0){
//   alert("Це нуль")
// } else {
//   alert("Це негативне число")
// }

//=========================================================================
//Example 4 - Вкладені розгалуження

// //Напиши скрипт, який порівнює числа у змінних a та b. Якщо обидва значення більше 100, то виведи в консоль максимальне з них.
// //В протилежному випадку у консолі повинна бути сума значення b та числа 512.

// const a = 110;
// const b = 101;

// if(a > 100 && b > 100) {
//   console.log(Math.max(a, b));
// } else {
//   console.log(b + 512);
// }
//=========================================================================|

// Example 5 - Форматування посилання (endsWith)

// Напиши скрипт який перевіряє чи закінчується значення змінної link символом /.
// Якщо ні, додай до кінця значення link цей символ. Використовуй конструкцію if...else.

// let link = 'https://my-site.com/about';
// // Пиши код нижче за цей рядок
// if(!link.endsWith("/")) {
//   link += "/"
// }
// // Пиши код вище за цей рядок
// console.log(link);
//===============================================================

// Example 6 - Форматування посилання (includes та логічне «І»)

// Напиши скрипт який перевіряє чи закінчується значення змінної link символом /.
// Якщо ні, додай до кінця значення link цей символ, але тільки в тому випадку,
// якщо в link є підрядок "my-site". Використовуй конструкцію if...else.

// let link = 'https://somesite.com/about';
// // Пиши код нижче за цей рядок
// if(!link.endsWith("/") && link.includes("my-site")) {
//   link += "/"
// }
// // Пиши код вище за цей рядок
// console.log(link);
//=========================================================

// Example 7 - Форматування посилання (тернарний оператор)

// Виконай рефакторинг коду задачі номер 4, використовуючи тернарний оператор.

// let link = 'https://somesite.com/about';

// link = link.includes('my-site') && !link.endsWith('/') ? link + '/' : link;

// console.log(link);
//============================================================

// Example 8 - if...else та логічні оператори

// Напиши скрипт який виводитиме в консоль браузера рядок залежно
//від значення змінної hours.

// Якщо значення змінної hours:

// менше 17, виводь рядок "Pending"
// більше або дорівнює 17 і менше або дорівнює 24, виводь рядок "Expires"
// більше 24 , виводь рядок "Overdue"
// const hours = 34;

// console.log(hours < 17
// ? "Pending"
// : hours >= 17 && hours <= 24
// ? "Expires"
// : hours > 24
// ? "Overdue" : result);;

//================================================================

// Example 9 - Дедлайн здачі проекту (if...else)
//Напиши скрипт для відображення часу дедлайну здачі проекту.
//Використовуй конструкцію if...else.

// Якщо до дедлайну 0 днів - виведи рядок "Сьогодні"
// Якщо до дедлайну 1 день - виведи рядок "Завтра"
// Якщо до дедлайну 2 дні - виведи рядок "Післязавтра"
// Якщо до дедлайну 3+ днів - виведи рядок "Дата у майбутньому"

// const daysUntilDeadline = 1;
// // Пиши код нижче за цей рядок

// if(daysUntilDeadline === 0) {
//   console.log("Сьогодні");
// }else if (daysUntilDeadline === 1) {
//   console.log("Завтра");
// }else if (daysUntilDeadline === 2) {
//   console.log("Післязавтра");
// }else {
//   console.log("Дата у майбутньому");
// }

//=========================================================================
// Example 10 - Дедлайн здачі проекту (switch)
// Виконай рефакторинг коду задачі номер 5 використовуючи switch.

// const daysUntilDeadline = 5;

// if (daysUntilDeadline === 0) {
//   console.log('Сьогодні');
// } else if (daysUntilDeadline === 1) {
//   console.log('Завтра');
// } else if (daysUntilDeadline === 2) {
//   console.log('Післязавтра');
// } else {
//   console.log('Дата у майбутньому');
// }
//===Розв'язок
// switch (daysUntilDeadline) {
//   case 0:
//     console.log('Сьогодні');
//     break;

//   case 1:
//     console.log('Завтра');
//     break;

//   case 2:
//     console.log('Післязавтра');
//     break;

//   default:
//     console.log('Дата у майбутньому');
// }
//=========================================================

// Example 11 - Цикл for
// Напиши цикл for, який виводить у консоль браузера числа за зростанням від min до max, але тільки якщо число кратне 5.

// const max = 100;
// const min = 20;

// for(let i = min; i <= max; i += 1) {
//   if( !(i % 5) ) {
//     console.log(i);
//   }
// }

//================================================================================
// Example 12 - Введення користувача та розгалуження

// Напиши скрипт, який питатиме логін за допомогою prompt та логувати результат у консоль браузера.

// Якщо відвідувач вводить "Адмін", то prompt запитує пароль
// Якщо нічого не введено або натиснуто клавішу Esc - вивести рядок "Скасовано"
// В іншому випадку вивести рядок "Я вас не знаю"
// Пароль перевіряти так:

// Якщо введено пароль "Я адмін", то вивести рядок "Здрастуйте!"
// Інакше виводити рядок "Невірний пароль"

// const userLogin = prompt("Ваш логін?");

// let yourPass;

// if(userLogin === "Адмін") {
//   yourPass = prompt("Ваш пароль?")
//   if(yourPass === "Я адмін") {
//     console.log("Здрастуйте!");
//   } else {
//     console.log("Невірний пароль");
//   }
// } else if (userLogin === null || userLogin === ''){
//   console.log("Скасовано");
// } else {
//   console.log("Я вас не знаю");
// }

//=================================================================

//Модуль 2. Заняття 3. Масиви

// Example 1 - Базові операції з масивом======================

// Створіть масив genres з елементами «Jazz» та «Blues».*
// Додайте «Рок-н-рол» до кінця.*
// Виведіть у консоль перший елемент масиву.*
// Виведіть у консоль останній елемент масиву. Код повинен працювати для масиву довільної довжини.
// Видаліть перший елемент та виведіть його в консоль.
// Вставте «Country» та «Reggae» на початок масиву.

// const genres = ["Jazz", "Blues"];

// genres.push("Рок-н-рол")

// console.log(genres.splice(0,1));

// genres.splice(0, 0, "Country", "Reggae")
// console.log(genres);

//==================================================================

// Example 2 - Масиви та рядки==

// Напиши скрипт для обчислення площі прямокутника зі сторонами,
// значення яких зберігаються у змінній values у вигляді рядка.

// Значення гарантовано розділені пробілом.

// const values = '8 11';

// const sides = values.split(' ')

// const result = sides[0] * sides[1]
// console.log(result);
//=======================================================

// Example 3 - Перебір масиву==========

// Напиши скрипт для перебору масиву fruits циклом for.
// Для кожного елемента масиву виведи в консоль рядок у форматі номер_елемента: значення_елемента.
// Нумерація елементів повинна починатися з 1.

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// for(let i = 0; i < fruits.length; i += 1) {
//   console.log(`${i + 1} - ${fruits[i]}`);
// }

//============================================================

// Example 4 - Масиви та цикли=============

// 1.Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача.
// 2.У змінних names та phones зберігаються рядки імен та телефонних номерів, розділені комами.
// 3.Порядковий номер імен та телефонів у рядках вказують на відповідність.
// 4.Кількість імен та телефонів гарантовано однакова.

// const names = 'Jacob,William,Solomon,Artemis,Petro';
// const phones = '89001234567,89001112233,890055566377,80506293984';

// const newNames = names.split(",");
// const newPhones = phones.split(",");

// for (let i = 0; i < newNames.length; i++) {
//     if (newPhones[i] !== undefined) {
//         console.log(`${newNames[i]} - ${newPhones[i]}`);
//     } else {
//         console.log(`${newNames[i]} - Немає номера телефону`);
//     }
// }
//=========================================================================

// // Example 5 - Масиви та рядки

// // Напиши скрипт, який виводить у консоль усі слова рядка крім першого і останнього.
// // Результуючий рядок не повинен починатися або закінчуватися символ пробілу.
// // Скрипт повинен працювати для будь-якого рядка.

// const string = 'Напиши скрипт, який виводить у консоль';

// const arr = string.split(" ")

// const newArr = arr.slice(1, arr.length - 1)

// console.log(newArr);
//==============================================================================

// Example 6 - Масиви та рядки===

// Напиши скрипт, який «розгортає» рядок (зворотний порядок букв) і виводить його в консоль.

// const string = 'Welcome to the future';
// let arr = []

// for(let i = 0; i < string.length; i += 1) {
//   arr.splice(0, 0, string[i])
// }
// const result = arr.join('')

// console.log(result);
//=============================================

// Example 7 - Сортування масиву із циклом
// Напиши скрипт сортування масиву рядків в алфавітному порядку за першою літерою елемента.

// const langs = ['python', 'javascript', 'c++', 'haskell', 'php', 'ruby'];
// const num = [4, 2, 5, 3, 1];
// const alphabet = ["a","f","c","b","e","d"]

// const sort = (num) => {

//   for(let i = 0; i < num.length; i += 1) {//
//     for(let j = 0; j < num.length; j += 1) {

//       if(num[j] > num[j + 1]) {
//         let arr = num[j + 1]
//         num[j + 1] = num[j]
//         num[j] = arr
//       }
//     }
//   }
//   return num
// }
// // const sort = (num) => {
// //   for (let i = 0; i < num.length; i += 1) {
// //     for (let j = 0; j < num.length - 1; j += 1) {
// //       if (num[j] > num[j + 1]) {
// //         let temp = num[j];
// //         num[j] = num[j + 1];
// //         num[j + 1] = temp;
// //       }
// //     }
// //   }
// //   return num;
// // }

// console.log(sort(alphabet));
//==============================================================
// Example 8 - Пошук елемента

// Напиши скрипт пошуку найменшого числа у масиві.
// Код повинен працювати для будь-якого масиву чисел.
// Використовуй цикл для розв'язання задачі.

// const numbers = [2, 17, 94, 1, 23, 37];
// let min = numbers[0];

// for(let i = 0; i < numbers.length; i += 1) {
//   if(min > numbers[i]) {
//     min = numbers[i]
//   }
// }

// console.log(min); // 1
//====================================================================================

// Модуль 2. Заняття 4. Функції=================================================

// Example 1 - Індекс маси тіла=====

// Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс маси тіла людини.
// Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини в метрах.

// Вага та висота будуть спеціально передані як рядки.
// Не цілі числа можуть бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової частини може бути кома.

// Індекс маси тіла необхідно округлити до однієї цифри після коми;

// const bmi = calcBMI('88,3', '1.75');
// console.log(bmi); // 28.8

// const calcBMI = function (weight, height) {
//   weight = weight.replace(",", ".");
//   height = height.replace(",", ".");

//   return Number((weight / height ** 2).toFixed(1));
// };

// const bmi = calcBMI("88,3", "1.75");
// console.log(bmi); // 28.8

//=====================================================
// Example 2 - Найменше з чисел
//Напиши функцію min(a,b), яка повертає найменше з чисел a та b.

// const min = (a, b) => Math.min(a, b);

// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1)); // 1

//==================================================

// Example 3 - Площа прямокутника================

// Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами,
// значення яких будуть передані до параметра dimensions у вигляді рядка.
// Значення гарантовано розділені пробілом.

// const getRectArea = (dimensions) => {
//   const result = dimensions.split(" ")
//   return result[0] * result[1]
// }

// console.log(getRectArea('8 11'));
//========================================================================

// Example 4 - Логування елементів====================

// Напиши функцію logItems(items), яка отримує масив та використовує цикл for,
// який для кожного елемента масиву буде виводити в консоль повідомлення у форматі <номер елемента> - <значення елемента>.
// Нумерація елементів повинна починатися з 1.

// Наприклад для першого елемента масиву ['Mango', 'Poly', 'Ajax']
// з індексом 0 буде виведено 1 - Mango, а для індексу 2 виведе 3 - Ajax.

// function logItems(items) {
//   for(let i = 0; i < items.length; i++) {
//     console.log(`${i + 1} - ${items[i]}`);
//   }
// }

// logItems(['Mango', 'Poly', 'Ajax']);
// console.log("=================================");
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);
//=======================================================================

// Example 5 - Логування контактів

// Напиши функцію printContactsInfo(names, phones) яка виводить у консоль ім'я та телефонний номер користувача.
// У параметри names та phones будуть передані рядки імен та телефонних номерів, розділені комами.
// Порядковий номер імен та телефонів у рядках вказують на відповідність.
// Кількість імен та телефонів гарантовано однакова.

// function printContactsInfo(names, phones) {
//   const objNames = names.split(",")
//   const objPhones = phones.split(",")
//   for(let i = 0; i < objNames.length; i++) {
//     if(objNames.indexOf(objNames[i]) === objPhones.indexOf(objPhones[i])) {
//       console.log(`${objNames[i]} - ${objPhones[i]}`);
//     } else {
//       console.log(`${objNames[i]} - Not a Number!`);
//     }
//   }
// }

// printContactsInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377',
// );

//========================================================================

// Example 6 - Пошук найбільшого елемента
// Напиши функцію findLargestNumber(numbers)яка шукає найбільше число в масиві.

// function findLargestNumber(numbers) {

//   return Math.max(...numbers)

// }

// console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
// console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83

//===================================================================

//Example 7 - Середнє значення

// Напишіть функцію calAverage() яка приймає довільну кількість аргументів і повертає їхнє середнє значення.
// Усі аргументи будуть лише числами.

// function calAverage(...args) {
//   let result = 0
//   for(const arg of args) {
//     result += arg
//   }
//   return result / args.length
// }

// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2

//==============================================================================

// Example 8 - Форматування часу

// Напиши функцію formatTime(minutes) яка переведе значення minutes (кількість хвилин)
// у рядок у форматі годин та хвилин HH:MM.

// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);
// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);

// function formatTime(minutes) {
//   const hours = Math.floor(minutes / 60);
//   const totalMinutes = minutes % 60;

//   const doubleDigitHours = String(hours).padStart(2, 0);
//   const doubleDigitMinutes = String(totalMinutes).padStart(2, 0);

//   console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);
// }

// formatTime(70); // "01:10"
// formatTime(450); // "07:30"
// formatTime(1441); // "24:01"
//=================================================================

// Example 9 - Колекція курсів (includes, indexOf, push і т. д.)
// Напишіть функції для роботи з колекцією навчальних курсів courses:

// addCourse(name) - додає курс до кінця колекції
// removeCourse(name) - видаляє курс із колекції
// updateCourse(oldName, newName) - змінює ім'я на нове
// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

// const addCourse = ((obj, item) => {
//   if(!obj.includes(item)) {
//     obj.push(item) 
//   } else {
//     console.log("Ви вже маєте такий курс");
//   }
// })

// addCourse(courses, 'Express');

// console.log(courses);

// addCourse(courses, 'CSS'); // 'Ви вже маєте такий курс'

// const removeCourse = ((obj, item) => {
//   if(obj.includes(item)) {
//     obj.splice(obj.indexOf(item), 1)
//   } else {
//     console.log("Курс із таким ім'ям не знайдено")
//   }
// })

// removeCourse(courses,'React');
// console.log(courses);
// removeCourse('Vue'); // 'Курс із таким ім'ям не знайдено'



// const updateCourse = (obj, oldName, newName) => {
//   if(obj.includes(oldName)) {
//     obj.splice(obj.indexOf(oldName), 1, newName)
//   }
// }

// updateCourse(courses,'Express', 'NestJS');

// console.log(courses);


//===============================================================

// ============================================Модуль 3. Заняття 1. Об'єкти==========================================
// Example 1 - Основи об'єктів

// Напиши скрипт, який для об'єкта user, послідовно:

// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user у форматі ключ:значення використовуючи Object.keys() та for...of

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
//   pushProperty(key, value) {
//     this[key] = value;
//   },
//   replacement(key, value) {
//     this[key] = value;
//   },
//   createArray() {
//     const keys = Object.keys(this)
//     return keys
//   }
// };



// // user.hobby = 'skydiving'
// // user.premium = false

// user.pushProperty("mood", 'happy')
// user.replacement("hobby", 'skydiving')
// user.replacement("premium", false)


// console.log(user.createArray());
// console.log(user);
//==========================================================================================

// Example 2 - метод Object.values()


// У нас є об'єкт, де зберігаються зарплати нашої команди. 
// Напишіть код для підсумовування всіх зарплат і збережіть результат у змінній sum. Повинно вийти 390. 
// Якщо об'єкт salaries порожній, то результат має бути 0.

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// const values = Object.values(salaries)

// let sum = 0;

// for(const value of values) {
//   sum += value
// };

// console.log(sum);
//=====================================================================================

// Example 3 - Масив об'єктів


// Напишіть функцію calcTotalPrice(stones, stoneName), яка приймає масив об'єктів та рядок з назвою каменю. 
// Функція рахує і повертає загальну вартість каміння з таким ім'ям, ціною та кількістю з об'єкта


// const stones = [
//   { name: 'Смарагд', price: 1300, quantity: 4 },
//   { name: 'Діамант', price: 2700, quantity: 3 },
//   { name: 'Сапфір', price: 400, quantity: 7 },
//   { name: 'Щебінь', price: 200, quantity: 2 },
// ];

// const calcTotalPrice = (stones, stoneName) => {
//   let sum = 0;

//   for(const stone of stones) {
//   const{name, price, quantity} = stone;

//     if(name === stoneName) {
//       sum += price * quantity
//     }
    
//   }

//   return sum
// }

// console.log(calcTotalPrice(stones, 'Сапфір'));