// Example 1 - Базові операції з масивом

// // Створіть масив genres з елементами «Jazz» та «Blues».
// const genres = ["Jazz", "Blues"];
// // Додайте «Рок-н-рол» до кінця.
// genres.push("Рок-н-рол")
// // Виведіть у консоль перший елемент масиву.
// console.log(genres[0]);
// // Виведіть у консоль останній елемент масиву. Код повинен працювати для масиву довільної довжини.
// console.log(genres[genres.length - 1]);
// // Видаліть перший елемент та виведіть його в консоль.
// console.log(genres.splice(0, 1));
// // Вставте «Country» та «Reggae» на початок масиву.
// genres.splice(0, 0, "Country", "Reggae")
// console.log(genres);
// =========================================================

// Example 2 - Масиви та рядки
// Напиши скрипт для обчислення площі прямокутника зі сторонами,
// значення яких зберігаються у змінній values у вигляді рядка.
// Значення гарантовано розділені пробілом.

// const values = '8 11';
// const split = values.split(" ")
// const result = split[0] * split[1]

// console.log(`Площа прямокутника - ${result}`);
// ================================================

// Example 3 - Перебір масиву
// Напиши скрипт для перебору масиву fruits циклом for.
// Для кожного елемента масиву виведи в консоль рядок
// у форматі номер_елемента: значення_елемента.
// Нумерація елементів повинна починатися з 1.

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// function sort(arr){
//   for(let i = 0, num = 1; i < arr.length; num += 1, i += 1){
//     console.log(`${num} - ${arr[i]}`);
//   }
// }

// sort(fruits);
// ================================================

// Example 4 - Масиви та цикли
// Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача.
// У змінних names та phones зберігаються рядки імен та телефонних номерів,
// розділені комами.
// Порядковий номер імен та телефонів у рядках вказують на відповідність.
// Кількість імен та телефонів гарантовано однакова.

// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377';

// function contacts(names, phones) {
//   names = names.split(",")
//   phones = phones.split(",")
//   let result = []

//   for(let i = 0; i < names.length; i += 1){
//     if(!!names[i] === !!phones[i]) {
//       result.push(`${names[i]} - ${phones[i]}`.split(","));
//     }
//   }

//   return result
// }

// console.log(contacts(names, phones));
//=================================================================

// Example 5 - Масиви та рядки
// Напиши скрипт, який виводить у консоль усі слова рядка крім першого і останнього.
// Результуючий рядок не повинен починатися або закінчуватися символ пробілу.
// Скрипт повинен працювати для будь-якого рядка.

// const string = 'Welcome to the future';

// function startAndEndDel(str) {
//   str = str.split(" ");

//   if(str.length >= 3) {
//     str.shift();
//     str.pop();
//   }

//   str = str.join(" ");

//   return str
// }

// console.log(startAndEndDel(string));
// ==============================================================

// Example 6 - Масиви та рядки
// Напиши скрипт, який «розгортає» рядок (зворотний порядок букв)
// і виводить його в консоль.

// const string = 'Welcome to the future';

// function reverse(rev) {
//   rev = rev.split(" ");
//   rev.reverse()

//   let result = rev.join(" ")

//   return result
// }

// console.log(reverse(string));
// ==============================================================
// Example 7 - Сортування масиву із циклом
// Напиши скрипт сортування масиву рядків в алфавітному порядку
// за першою літерою елемента.

// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
// // const numbers = [15, 327, 73, 24, 5, 166];
// const numbers = [2, 17, 94, 1, 23, 37];
// const alfabet = ["e","c","a","b","d","f"];

// let num = numbers[0]

// for(let i = 0; i < numbers.length; i += 1){
//   if(num > numbers[i]) {
//     num = numbers[i]
//   }

// }

// console.log(num);
// ================================================

// Example 7 - Сортировка массива с циклом
// Напиши скрипт сортировки массива строк в алфавитном порядке по первой букве элемента.

// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];

// const alfabet = ["e", "c", "a", "b", "d", "f"];

// // Функція для обміну елементів
// function swap(arr, i, j) {
//     const temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
// }

// // Сортування бульбашкою
// function bubbleSort(arr) {
//     const len = arr.length;
//     for (let i = 0; i < len - 1; i++) {
//         for (let j = 0; j < len - 1 - i; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 swap(arr, j, j + 1);
//             }
//         }
//     }
// }

// // Виклик функції сортування
// bubbleSort(alfabet);

// // Результат
// console.log(alfabet);

// let count = 0;

// function cc(card) {
//   // Змініть код лише під цим рядком
//   switch (card) {
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//       count += 1;
//       break;
//     case 7:
//     case 8:
//     case 9:
//       count += 0;
//       break;
//     case 10:
//     case "J":
//     case "Q":
//     case "K":
//     case "A":
//       count += -1;
//       break;
//   }
//   if (count > 0) {
//     return `${count} Bet`;
//   }
//   return `${count} Hold`;
// }


// function cc(card) {
//   // Змініть код лише під цим рядком
//   if (card >= 2 && card <= 6) {
//     count += 1;
//   } else if (card >= 7 && card <= 9) {
//     count += 0;
//   } else if (card >= 10 || Boolean(card)) {
//     count += -1;
//   }

//   if (count > 0) {
//     return `${count} Bet`;
//   }
//   return `${count} Hold`;
// }


// console.log(cc('d'));
// ===========================================

// let mas=[11, 5, 8, 9, 1, 3, 2, 10, 12, 13];
// let str=["a", "c", "d", "b"];
// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];

// // for(let i = 0, tmt; i < mas.length - 1; i += 1) {
// //     for(let j = 0; j < mas.length - 1; j += 1) {
// //         if(mas[j] > mas[j + 1]) {
// //             tmt = mas[j]
// //             mas[j] = mas[j + 1]
// //             mas[j + 1] = tmt
// //         }
// //     }
// // }
// ======FUNCTION========================
// function sort(mas) {
//     for(let i = 0, tmt; i < mas.length - 1; i += 1) {
//         for(let j = 0; j < mas.length - 1; j += 1) {
//             if(mas[j] > mas[j + 1]) {
//                 tmt = mas[j]
//                 mas[j] = mas[j + 1]
//                 mas[j + 1] = tmt
//             }
//         }
//     }
//     return mas
// }

// console.log(sort(str));
// console.log(sort(langs));
//==============================================