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

// Example 4 - Комплексні завдання

// Напиши скрипт управління особистим кабінетом інтернет банку.
// Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.

/*
 * Типів транзакцій всього два.
 * Можна покласти чи зняти гроші з рахунку.
 */
// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// /*
//  * Кожна транзакція це об'єкт із властивостями: id, type та amount
//  */

// const account = {
//   // Поточний баланс рахунку
//   balance: 0,
//   // id
//   // id: Number((Math.random() * 2).toString().slice(2,6)),
//   // Історія транзакцій
//   transactions: [],

//   /*
//    * Метод створює та повертає об'єкт транзакції.
//    * Приймає суму та тип транзакції.
//    */
//   createTransaction(amount, type) {
//     this.transactions.push({[type]: amount, id: Math.floor(Math.random() * 1000000)})
//   },

//   /*
//    * Метод, що відповідає за додавання суми до балансу.
//    * Приймає суму транзакції.
//    * Викликає createTransaction для створення об'єкта транзакції
//    * після чого додає його до історії транзакцій
//    */
//   deposit(amount) {
//     this.createTransaction(amount, Transaction.DEPOSIT)
//     this.balance += amount
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
//     this.createTransaction(amount, Transaction.WITHDRAW)
//     return amount > this.balance
//     ? console.log("Зняття такої суми не можливе, недостатньо коштів" )
//     : this.balance -= amount
//   },

//   /*
//    * Метод повертає поточний баланс
//    */
//   getBalance() {
//     return this.balance
//   },

//   /*
//    * Метод шукає та повертає об'єкт транзакції по id
//    */
//   getTransactionDetails(id) {
//     for(const obj of this.transactions) {
//       if(id === obj.id) {
//         return obj
//       }
//     }
//   },

//   /*
//    * Метод повертає кількість коштів
//    * певного типу транзакції з усієї історії транзакцій
//    */
//   getTransactionTotal(type) {
//     let total = 0;
//     let found;

//     for(const transaction of this.transactions) {
//       const keys = Object.keys(transaction)

//       if(keys[0] === type) {
//         total += transaction[type]
//         found = true
//       }

//     }
//     if(!found) {
//       console.log("Транзакції з таким типом не існує");
//     }
//     return total
//   },

// };
//"Транзакції з таким типом не існує"

// account.deposit(200)
// account.withdraw(20)
// account.deposit(200)

// account.withdraw(20)
// account.withdraw(100)
// account.deposit(200)

// console.log(account.transactions);
// console.log(account.getTransactionTotal(Transaction.DEPOST));

// Модуль 3 Заняття 6. Деструктуризація та rest/spread=======================================
// Example 1 - Деструктуризація===================================
//Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.

// function calcBMI(args) {
//   const {weight, height} = args
//   const numericWeight = Number(weight.replace(',', '.'));
//   const numericHeight = Number(height.replace(',', '.'));
//   return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }

// // Очікується
// console.log(
//   calcBMI({
//     weight: '88,3',
//     height: '1.75',
//   }),
// );
// console.log(
//   calcBMI({
//     weight: '68,3',
//     height: '1.65',
//   }),
// );
// console.log(
//   calcBMI({
//     weight: '118,3',
//     height: '1.95',
//   }),
// );

//Example 2 - Деструктуризація=========================================================
//Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.

// function printContactsInfo({names, phones}) {

//   const nameList = names.split(',');
//   const phoneList = phones.split(',');
//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// }

// // Було
// // printContactsInfo(
// //   'Jacob,William,Solomon,Artemis',
// //   '89001234567,89001112233,890055566377,890055566300',
// // );

// // Очікується
// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });

// Example 3 - Глибока деструктуризація=================================================
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.

// function getBotReport(obj) {
//   const{companyName, bots: {repair: repairBots, defence: defenceBots}} = obj;

//   return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// }

// // Було
// // console.log(getBotReport('Cyberdyne Systems', 150, 50));

// // Очікується
// console.log(
//   getBotReport({
//     companyName: 'Cyberdyne Systems',
//     bots: {
//       repair: 150,
//       defence: 50,
//     },
//   }),
// );

//Example 4 - Деструктуризація

//Перепиши функцію так, щоб вона приймала об'єкт параметрів із властивостями companyName та stock та виводила репорт про кількість товарів на складі будь-якої компанії.

// function getStockReport(obj) {
//   const { companyName, stock: {repairBots, defenceBots} } = obj;

//   return `${companyName} has ${repairBots + defenceBots} items in stock`;
// }

// console.log(
//   getStockReport({
//     companyName: 'Cyberdyne Systems',
//     stock: {
//       repairBots: 150,
//       defenceBots: 50,
//     },
//   }),
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

// Example 5 - Операція spread==========================================================================

// Доповни функцію createContact(partialContact) так, щоб вона повертала новий об'єкт контакту з доданими властивостями id та createdAt,
//а також list зі значенням "default" якщо в partialContact немає такої властивості.

// Рішення
// function createContact(partialContact) {
//   return {
//     list: 'default',
//     ...partialContact,
//     id: generateId(),
//     createdAt: Date.now(),
//   };
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

// //=============РАНДОМНЕ ЧИСЛО==========
// function generateId() {
//   return '_' + Math.random().toString(36).substr(2, 9);
// }

//=======================================================================

// //Напиши функцію transformUsername(user) так, щоб вона повертала новий об'єкт із властивістю fullName, замість firstName та lastName.

// // Рішення
// function transformUsername({ firstName, lastName, ...otherProps }) {
//   return {
//     fullName: `${firstName} ${lastName}`,
//     ...otherProps,
//   };
// }

// console.log(
//   transformUsername({
//     id: 1,
//     firstName: 'Jacob',
//     lastName: 'Mercer',
//     email: 'j.mercer@mail.com',
//     friendCount: 40,
//   }),
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

// const calсulateAverage = (...args) => {
//   let total = 0;
//   let arrLength;
//   args.forEach(function (num, idx, arr) {
//     total += num
//     arrLength = arr.length
//   })
//   // let total = 0;
//   // for (let i = 0; i < args.length; i++) {
//   //   total += args[i];
//   // }
//   return total / arrLength
// }

// console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
// console.log(calсulateAverage(14, 8, 2)); // 8
// console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2

//=======Модуль 4. Заняття 7. Коллбеки. Стрілочні функції. forEach======================
//Example 1 - Коллбек функції==

//Напишіть наступні функції:==

//createProduct(obj, callback) - приймає об'єкт товару без id, а також коллбек. Функція створює об'єкт товару,
//додаючи йому унікальний ідентифікатор у властивість id та викликає коллбек передаючи йому створений об'єкт.
//logProduct(product) - колббек приймаючий об'єкт продукту і логуючий його в консоль
//logTotalPrice(product) - колббек, що приймає об'єкт продукту і логіює загальну вартість товару в консоль

// Рішення

// function createProduct(obj, callback) {
//   const product = {
//     ...obj,
//     id: Date.now(),
//   }
//   callback(product)
// }

// function provideGoods(product) {
//   console.log(product);
// }

// function logTotalPrice({price, quantity}) {
//   console.log(price * quantity);
// }

// createProduct({ name: '🍎', price: 30, quantity: 3 }, provideGoods);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);

/*Додайте об'єкт account методи withdraw(amount, onSuccess, onError) 
та deposit(amount, onSuccess, onError), де перший параметр це сума операції, а другий та третій - коллбеки.

Метод withdraw викликає onError якщо amount більше TRANSACTION_LIMIT або this.balance, і onSuccess в іншому випадку.

Метод deposit викликає onError якщо amount більше TRANSACTION_LIMIT або менше або дорівнює нулю, і onSuccess в іншому випадку.*/

// Рішення
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

// function handleSuccess(message) {
//   console.log(`✅ Success! ${message}`);
// }
// function handleError(message) {
//   console.log(`❌ Error! ${message}`);
// }

// account.withdraw(2000, handleSuccess, handleError);
// // account.withdraw(600, handleSuccess, handleError);
// // account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// // account.deposit(0, handleSuccess, handleError);
// // account.deposit(-600, handleSuccess, handleError);
// // account.deposit(600, handleSuccess, handleError);

//Example 3 - Коллбек функції=============================================

//Напишіть функцію each(array, callback), яка першим параметром очікує масив, а другим - функцію, яка застосовується до кожного елемента масиву.
//Функція each повинна повернути новий масив, елементами якого будуть результати виклику коллбека.

// Рішення
// function each(array, callback) {
//   const newArr = [];
//   for (const el of array) {
//     newArr.push(callback(el));
//   }
//   return newArr;
// }

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value * 2;
//   })
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value - 10;
//   })
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return Math.sqrt(value);
//   })
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.ceil(value);
//   })
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.floor(value);
//   })
// );



// Example 4 - Стрілочні функції=====================================

//Виконайте рефакторинг коду за допомогою стрілочних функцій.

// const createProduct = (partialProduct, callback) => callback({ id: Date.now(), ...partialProduct });

// const logProduct = product => console.log(product);
// const logTotalPrice = product => console.log(product.price * product.quantity);

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);

//Example 5 - Стрілочні функції
//Виконайте рефакторинг коду за допомогою стрілочних функцій.

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





//Example 6 - Інлайн стрілочні функції=============================================

//Виконайте рефакторинг коду за допомогою стрілочних функцій.==================

// const each = (array, callback) => {
//   const newArr = [];
//   for (const el of array) {
//     newArr.push(callback(el));
//   }
//   return newArr;
// }

// console.log(each([64, 49, 36, 25, 16], (value) => value * 2));
// console.log(each([64, 49, 36, 25, 16], (value) => value - 10));
// console.log(each([64, 49, 36, 25, 16], (value) => Math.sqrt(value)));
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], (value) => Math.ceil(value)));
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], (value) => Math.floor(value)));

//Example 7 - Метод forEach======================
//Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.============================

// function logItems(items) {
//   items.forEach((element, idx) => {
//     console.log(`${idx + 1} - ${element}`);
//   });
// }

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);


//Example 8 - Метод forEach==============================

//Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.

// function printContactsInfo({ names, phones }) {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');
//   nameList.forEach((element, idx) => {
//     console.log(`${element} - ${phoneList[idx]}`);
//   })
// }

// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });

// Example 9 - Метод forEach
//Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.

// function calсulateAverage(...args) {
//   let total = 0;
//   let objlength;

// args.forEach((element, idx, obj) => {
//   total += element;
//   objlength = obj.length
// })

//   return total / objlength
// }

// console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
// console.log(calсulateAverage(14, 8, 2)); // 8
// console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2








//Модуль 4. Заняття 8. Перебираючі методи масиву
//Колекція об'єктів для всіх прикладів з автомобілями


// const cars = [
//   { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
//   { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
//   { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
//   { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
//   { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
//   { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
//   { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
//   { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false },
//   { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
//   { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
// ];


//Example 1 - Метод map=========================
//Нехай функція getModels повертає масив моделей (поле model) всіх автомобілів.

// const getModels = cars => {
//   const newCars = cars.map(item => item.model)
//   return newCars
// };

// console.log(getModels(cars));


//Example 2 - Метод map========================
//Нехай функція makeCarsWithDiscount повертає новий масив об'єктів із змінним значенням властивості price залежно від переданої знижки.
// const makeCarsWithDiscount = (cars, discount) => {
//   const newCars = cars.map(item => {
//     item.discount = discount * 100
//     item.price -= (item.price * item.discount) / 100
//     return item
//   })
//   return newCars
// };

// console.log(makeCarsWithDiscount(cars, 0.2));//19236
// console.log(makeCarsWithDiscount(cars, 0.4));





//Example 3 - Метод filter================================
// Нехай функція filterByPrice повертає масив автомобілів ціна яких менша ніж значення параметра threshold.

// const filterByPrice = (cars, threshold) => cars.filter(({price}) => price > threshold)

// console.log(filterByPrice(cars, 30000));
// console.log(filterByPrice(cars, 25000));


//Example 4 - Метод filter================================
//Нехай функція getCarsWithDiscount повертає масив автомобілів властивість onSale яких true.

// const getCarsWithDiscount = cars => cars.filter(({onSale}) => onSale === true)

// console.log(getCarsWithDiscount(cars));



//Example 5 - Метод filter==========================================

//Нехай функція getCarsWithType повертає масив автомобілів тип яких збігається зі значенням параметра type.

// const getCarsWithType = (cars, type) => cars.filter(({type}) => type === type );

// console.log(getCarsWithType(cars, 'suv'));
// console.log(getCarsWithType(cars, 'sedan'));





//Example 6 - Метод find===========================

// const getCarByModel = (cars, model) => cars.find(({model: carModel}) => carModel === model);

// console.log(getCarByModel(cars, 'F-150'));
// console.log(getCarByModel(cars, 'CX-9'));



//Example 7 - Метод sort========================
//Нехай функція sortByAscendingAmount повертає новий масив автомобілів відсортований за зростанням значення якості amount.

// const sortByAscendingAmount = cars => {
//   const newObj = [...cars].sort((a,b) => a.amount - b.amount)
//   return newObj
// }

// console.log(sortByAscendingAmount(cars));
// console.log(cars);


// Example 8 - Метод sort==================
//Нехай функція sortByDescendingPrice повертає новий масив автомобілів відсортований за зменшенням значення властивості price.

// const sortByDescendingPrice = cars => {
//   const newObj = [...cars].sort((a, b) => b.price - a.price)
//   return newObj
// };

// console.log(sortByDescendingPrice(cars));



//Example 9 - Метод sort=========================
//Нехай функція sortByModel повертає новий масив автомобілів відсортований за назвою моделі в алфавітному 
//та зворотному алфавітному порядку, в залежності від значення параметра order.

// const sortByModel = (cars, order) => {
//   if(order === 'asc') {
//     return [...cars].sort((a,b) => a.model.localeCompare(b.model))
//   }

//   if(order === 'desc') {
//     return [...cars].sort((a,b) => b.model.localeCompare(a.model))
//   }
// };

// console.log(sortByModel(cars, 'asc'));
// console.log(sortByModel(cars, 'desc'));


//Example 10 - Метод reduce

// Нехай функція getTotalAmount повертає загальну кількість автомобілів (значення властивостей amount).

// const getTotalAmount = cars => cars.reduce((ak, item) => ak + item.amount ,0)


// console.log(getTotalAmount(cars));



//Example 11 - Ланцюжки методів
//Нехай функція getModelsOnSale повертає масив моделей автомобілів, 
//але тільки тих, які зараз на розпродажі.

// const getModelsOnSale = cars => cars.filter((item) => item.onSale).map(item => item.model);

// console.log(getModelsOnSale(cars));



//Example 12 - Ланцюжки методів
//Нехай функція getSortedCarsOnSale повертає масив автомобілів на розпродажі 
//(Властивість onSale), відсортованих за зростанням ціни.

// const getSortedCarsOnSale = cars => cars.filter(item => item.onSale).sort((a,b) => a.price - b.price);





//====================================Модуль 5. Заняття 9. Контекст виклику функції та this======================================================



//Example 1 - Майстерня коштовностей=====

//Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю і розраховує та повертає загальну вартість 
//каменів з таким ім'ям, ціною та кількістю з властивості stones.

// const chopShop = {
//   stones: [
//     { name: 'Emerald', price: 1300, quantity: 4 },
//     { name: 'Diamond', price: 2700, quantity: 3 },
//     { name: 'Sapphire', price: 1400, quantity: 7 },
//     { name: 'Ruby', price: 800, quantity: 2 },
//   ],
//   calcTotalPrice(stoneName) {
//     const result = this.stones.find(({name}) => name === stoneName)
//     return result ? result.price * result.quantity : "Такого каменю не знайдено!"
//   },
// };

// console.log(chopShop.calcTotalPrice('Emerald')); // 5200
// console.log(chopShop.calcTotalPrice('Diamond')); // 8100
// console.log(chopShop.calcTotalPrice('Sapphire')); // 9800
// console.log(chopShop.calcTotalPrice('Ruby')); // 1600






//Example 2 - Телефонна книга

//Виконайте рефакторинг методів об'єкту phonebook щоб код запрацював.

// const phonebook = {
//   contacts: [],
//   add(contact) {
//     const newContact = {
//       list: 'default',
//       ...contact,
//       id: this.generateId(),
//       createdAt: this.getDate(),
//     };
//     this.contacts.push(newContact);
//   },


//   generateId() {
//     return '_' + Math.random().toString(36).substr(2, 9);
//   },
//   getDate() {
//     return Date.now();
//   },
// };



// phonebook.add({
//     name: 'Mango',
//     email: 'mango@mail.com',
//     list: 'friends',
//   }),


// phonebook.add({
//     name: 'Poly',
//     email: 'poly@hotmail.com',
//   }),

// console.log(phonebook.contacts);


//Example 3 - Калькулятор
//Створіть об'єкт calculator з трьома методами:

// read(a, b)- приймає два значення та зберігає їх як властивості об'єкта.
// add() - повертає суму збережених значень.
// mult() - перемножує збережені значення та повертає результат.

// const calculator = {

//   read(a, b) {
//     this.a = a;
//     this.b = b;
//   },
//   add() {
//     return (this.a || 0)  + (this.b || 0)
//   },
//   mult() {
//     return (this.a || 0)  * (this.b || 0)
//   },
// };

// calculator.read(3, 5);

// console.log(calculator.add());// додавання
// console.log(calculator.mult());// множення