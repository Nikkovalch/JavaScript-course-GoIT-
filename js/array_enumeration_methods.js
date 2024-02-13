// ======array_enumeration_methods---------------

// Колекція об'єктів для всіх прикладів з автомобілями
const cars = [
  { make: 'BMW', model: 'X6', type: 'suv', amount: 14, price: 55045, onSale: true },
  { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
  { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
  { make: 'Renault', model: 'Laguna', type: 'suv', amount: 7, price: 31520, onSale: true },
  { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
  { make: 'Mercedec', model: 'S500', type: 'suv', amount: 16, price: 45560, onSale: false },
  { make: 'Lamborgini', model: 'Diablo', type: 'truck', amount: 4, price: 24320, onSale: true },
  { make: 'Chevrolet', model: 'Corvet', type: 'truck', amount: 11, price: 27110, onSale: true },
  { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
  { make: 'Audi', model: 'R8', type: 'suv', amount: 6, price: 31660, onSale: false }
];

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