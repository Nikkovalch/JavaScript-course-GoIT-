// Колбек-функція
// function userName(name) {
//   return name;
// }

// function userPass(password, login) {
//   console.log(`password: ${password}`);
//   console.log(login(`login: ${"Mykola"}`));
// }

// userPass(12345678, userName)
///
// function processCall(recipient) {
//   // Імітуємо доступність абонента випадковим числом
//   const random = Math.random()
//   console.log(random);

//   const isRecipientAvailable = random > 0.5;
//   console.log(isRecipientAvailable);
  
//   if (!isRecipientAvailable) {
//     console.log(`Абонент ${recipient} недоступний, залиште повідомлення.`);
//     // Логіка активації автовідповідача
//   } else {
//     console.log(`З'єднуємо з ${recipient}, очікуйте...`);
//     // Логіка прийняття дзвінка
//   }
// }

// processCall("Манго");
////////////////////////////////////////////////////////

// const listUsers = [
//   {name: "Mykola"},
//   {name: "Petro"},
//   {name: "Natali"},
//   {name: "Valera"},
//   {name: "Vasia"},
//   {name: "Katia"},
// ];

// const blockedUsers = [];

// function userSubscription(userName, listUsers, blockUser, getLike, notLike) {
//   if(getLike(userName, listUsers)) {
//     return `Користува ${userName} поставив вам лайк`;
//   }
//   return notLike(userName, blockUser)
// }

// function getUserLike(name, listUsers) {
//   for(const user of listUsers) {
//     if(user.name === name) {
//       return `Так цей користувач ставив лайки!`
//     }
//   }
// }

// function notLike(name, blockUser) {  
//   blockUser.push(name)
// }




const qwerty = (color, red) => color(red);

const getColor = (color) => console.log(`Колір фону ${color}`);


qwerty(getColor, "red")

// function printValue(value) {
//   console.log(value);
// }

// function prettyPrint(value) {
//   console.log("Logging value: ", value);
// }



// function repeat(num, foo) {
//   for(let i = 0; i < num; i += 1) {
//     foo(i)
//   }
// }


// repeat(5, printValue)
// repeat(5, prettyPrint)
/////////////////////////////////////////////
// const numbers = [5, 10, 15, 20, 25];

// numbers.forEach(function(num, index) {
//   console.log(index, num);
// })
// console.log("-----------------------------------");
// for(const number of numbers) {
//   console.log(numbers.indexOf(number), number);
// }

let a = 5
let b = 5 + a
