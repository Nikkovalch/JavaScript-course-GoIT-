// Виведи на екран загальну кількість яблук та винограду. Різницю яблук та винограду.

// //Кількість яблук
// const apples = 47;

// //Кількість винограду
// const grapes = 135;

// // Загальна кількість фруктів
// const total = apples + grapes;
// console.log("Загальна кількість",total)

// // Різниця між кількістю яблук та винограду
// const diff = Math.abs(apples - grapes);
// console.log("Різниця",diff)


// // Заміни вираз перевизначення комбінованим оператором +=.

// let students = 100;
// students += 50;
// console.log(students);


// Розбери пріоритет операторів в інструкції привласнення значення змінної result.

// const result = 108 + 223 - (2 * 5);
// console.log("321-",result);



// Напиши скрипт, який виводить у консоль заокруглені вгору/вниз і т.д. значення змінної value. Використовуй методи Math.floor(), Math.ceil() та Math.round(). Перевір що буде в консолі при значеннях 27.3 та 27.9.

// const value = 27.6;

// console.log(Math.floor(value));
// console.log(Math.ceil(value));
// console.log(Math.round(value));


// Склади фразу за допомогою шаблонних рядків A has B bots in stock, де A, B - змінні вставлені в рядок.

// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;
// const message = `${companyName} has ${repairBots + defenceBots} bots in stock`;
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"


// Напиши скрипт, який розраховує індекс маси тіла людини. Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини у метрах.

// Вага та висота зберігаються у змінних weight та height, але не як числа, а в вигляді рядків (спеціально для завдання). Не цілі числа можуть бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової частини може бути кома.

// Індекс маси тіла необхідно округлити до однієї цифри після коми;

// let weight = '88,3';
// weight = weight.replace(",", ".");

// let height = '1.75';
// height = height ** 2;

// // // Розділити вагу в кілограмах на квадрат висоти людини у метрах.
// const bmi = Number((weight / height).toFixed(1));;
// console.log(bmi); // 28.8



// Яким буде результат виразів?

// console.log("true", 5 > 4);

// console.log("true", 10 >= '7');

// console.log("true", '2' > '12');

// console.log("false", '2' < '12');

// console.log("true", '4' == 4);

// console.log("false", '6' === 6);

// console.log("false", 'false' === false);

// console.log("true", 1 == true);

// console.log("false", 1 === true);

// console.log("true", '0' == false);

// console.log("false", '0' === false);

// console.log("true", 'Papaya' < 'papaya');

// console.log("false", 'Papaya' === 'papaya');

// console.log("true", undefined == null);

// console.log("false", undefined === null);


// // Яким буде результат виразів?

// console.log("3", true && 3);

// console.log("false", false && 3);

// console.log("kiwi", true && 4 && 'kiwi');

// console.log("0", true && 0 && 'kiwi');

// console.log('true', true || 3);

// console.log('true', true || 3 || 4);

// console.log('true', true || false || 7);

// console.log('2', null || 2 || undefined);

// console.log('false', (1 && null && 2) > 0);

// console.log('3', null || (2 && 3) || 4);


// Отрефактори код так, щоб у змінну value присвоювалося значення змінної incomingValue, якщо воно не рівне undefined або null. В іншому випадку має присвоюватися значення defaultValue. Перевір роботу скрипта для наступних значень змінної incomingValue: null, undefined, 0, false. Використовуй оператор ?? (nullish coalescing operator).

// const incomingValue = 5;// 0, false - не працює.
// const defaultValue = 10;


// const value = incomingValue == false ? defaultValue : incomingValue ?? defaultValue;


// console.log(value);



// Напиши скрипт, який переведе значення totalMinutes (кількість хвилин) в рядок у форматі годин та хвилин HH:MM.

// 70 покаже 01:10
// 450 покаже 07:30
// 1441 покаже 24:01


// const totalMinutes = 70;

// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// console.log(hours);
// console.log(minutes);

// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);

// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);