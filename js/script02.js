
// Example 1 - Введення користувача та розгалуження

// Використовуючи конструкцію if..else та prompt, напиши код, який питатиме: "Яка офіційна назва JavaScript?". 
// Якщо користувач вводить ECMAScript, то показуй alert з рядком "Правильно!", в іншому випадку - "Не знаєте? ECMAScript!"

// const jsName = prompt("Яка офіційна назва JavaScript?")

// if (jsName === "ECMAScript") {
//   alert("Правильно!");
// } else {
//   alert("Не знаєте? ECMAScript!");
// }

//-------------------------------------------------

//Example 2 - Відображення часу (if...else)

//Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді рядка формату "14 г. 26 хв.". Якщо значення змінної minutes дорівнює 0, то виводь рядок "14 г.", без хвилин

//"14 г. 26 хв."

// let minutes = 121321;
// let minutesValue = minutes % 60;
// let hours = Math.floor(minutes / 60);

// if (minutesValue === 0){
//   console.log(`${hours}год`)
// } else {
//   console.log(`${hours}год ${minutesValue}хв`)
// }


// switch(minutesValue) {
//   case 0:
//     console.log(`${hours}год`)
//     break;
//   default:
//     console.log(`${hours}год ${minutesValue}хв`)
// }

//-----------------------------------------------------------------

//Example 3 - Розгалуження

//Напиши скрипт, який виводить у консоль рядок "Це позитивне число", якщо у prompt користувач ввів число більше нуля. Якщо було введено нуль, виводь в консоль рядок "Це нуль". Якщо передали від'ємне число, у консолі повинен бути рядок "Це негативне число".

// const userInput = Number(prompt('Введіть число'));
// console.log(userInput)
// if(userInput > 0) {
//   alert("Це позетивне число!");
// } else if (userInput === 0) {
//   alert("Це нуль");
// } else if (userInput < 0){
//   alert("Це негативне число");
// } else {
//   alert("Це не число");
// }

// -----------------------------------------------------------

//Example 4 - Вкладені розгалуження

//Напиши скрипт, який порівнює числа у змінних a та b. Якщо обидва значення більше 100, то виведи в консоль максимальне з них. 
//В протилежному випадку у консолі повинна бути сума значення b та числа 512.

// const a = 120;
// const b = 180;

// if(a > 100 && b > 100) {
//   if (a > b){
//     console.log(a);
//   } else {
//     console.log(b);
//   }
// } else {
//   // Хоча б одне з чисел менше або рівне 100
//   const sum = b + 512;
//   console.log(`Сума числа b та 512: ${sum}`);
// }

// -----------------------------------------------------------

//Example 5 - Форматування посилання (endsWith)

//Напиши скрипт який перевіряє чи закінчується значення змінної link символом /. Якщо ні, додай до кінця значення link цей символ. Використовуй конструкцію if...else.

// let link = 'https://my-site.com/about';
// // Пиши код нижче за цей рядок
//   if (!link.endsWith("/")) {
//     link += "/"
//   }
// // Пиши код вище за цей рядок
// console.log(link);

//------------------------------------------------

//Example 6 - Форматування посилання (includes та логічне «І»)

//Напиши скрипт який перевіряє чи закінчується значення змінної link символом /. Якщо ні, додай до кінця значення link цей символ, але тільки в тому випадку, якщо в link є підрядок "my-site". Використовуй конструкцію if...else.

// let link = 'https://somesite.com/about';
// // Пиши код нижче за цей рядок
//   if (!link.endsWith("/") && link.includes("my-site")){
//     link += "/"
//   }
// // Пиши код вище за цей рядок
// console.log(link);

// ------------------------------------------------------

//Example 7 - Форматування посилання (тернарний оператор)

//Виконай рефакторинг коду задачі номер 4, використовуючи тернарний оператор.

// let link = 'https://somesite.com/about';
// // if (link.includes('my-site') && !link.endsWith('/')) {
// //   link += '/';
// // }
// // console.log(link);
// link.includes('my-site') && !link.endsWith('/') ? link += '/': "";

// console.log(link);

//---------------------------------------------------


//Example 8 - if...else та логічні оператори

// Напиши скрипт який виводитиме в консоль браузера рядок залежно від значення змінної hours.

// Якщо значення змінної hours:

// менше 17, виводь рядок "Pending"
// більше або дорівнює 17 і менше або дорівнює 24, виводь рядок "Expires"
// більше 24 , виводь рядок "Overdue"

// let hours = 14;

// if(hours >= 17 && hours <= 24) {
//   console.log("Expires");
// }  else if (hours < 17){
//   console.log("Pending");
// } else {
//   console.log("Overdue");
// }

//------------------------------------------------

//Example 9 - Дедлайн здачі проекту (if...else)

// Напиши скрипт для відображення часу дедлайну здачі проекту. Використовуй конструкцію if...else.

// Якщо до дедлайну 0 днів - виведи рядок "Сьогодні"
// Якщо до дедлайну 1 день - виведи рядок "Завтра"
// Якщо до дедлайну 2 дні - виведи рядок "Післязавтра"
// Якщо до дедлайну 3+ днів - виведи рядок "Дата у майбутньому"

// let deadline = 4

// switch(true) {
//   case deadline === 0:
//     console.log("Сьогодні");
//     break;
//     case deadline === 1:
//       console.log("Завтра");
//       break;
//       case deadline === 2:
//         console.log("Післязавтра");
//         break;
//         case deadline >= 3:
//           console.log("Дата у майбутньому");
// }

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