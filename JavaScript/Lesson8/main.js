// Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User(id, name, surName, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surName = surName;
//     this.email = email;
//     this.phone = phone;
// }
//
// let array = [];
//
// let user1 = new User(1, 'oleh', 'panchuk', 'asd@asd.gmail.com', +3807777777);
// let user2 = new User(2, 'olga', 'ivanova', 'qwe@asd.com', +3806547895);
// let user3 = new User(3, 'inna', 'zborovets', 'qwe@asd.com', +3806547895);
// let user4 = new User(4, 'vika', 'ungurian', 'qwe@asd.com', +3806547895);
// let user5 = new User(5, 'andriy', 'karabas', 'qwe@asd.com', +3806547895);
// let user6 = new User(6, 'ivan', 'ursol', 'qwe@asd.com', +3806547895);
// let user7 = new User(7, 'genadiy', 'petrov', 'qwe@asd.com', +3806547895);
// let user8 = new User(8, 'pavlo', 'ivanochko', 'qwe@asd.com', +3806547895);
// let user9 = new User(9, 'artem', 'ivanskiy', 'qwe@asd.com', +3806547895);
// let user10 = new User(10, 'mykola', 'ivanov', 'qwe@asd.com', +3806547895);
//
// array.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);

// Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// let filter = array.filter(value => value.id % 2 === 0);
// console.log(filter);

// Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// let sort = array.sort((a, b) => a.id - b.id);
// console.log(sort);

// створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

// class Client{
//     constructor(id, name, surName, email, phone, order){
//     this.id = id;
//     this.name = name;
//     this.surName = surName;
//     this.email = email;
//     this.phone = phone;
//     this.order = order;
//     }
// }
//
// let array = [];
//
// let client1 = new Client(1, 'vasya', 'orlov', 'asd@asd.com', 61449849, [14,2]);
// let client2 = new Client(2, 'vasya', 'orlov', 'asd@asd.com', 61449849, [8,6,1,7,61,2,3]);
// let client3 = new Client(3, 'vasya', 'orlov', 'asd@asd.com', 61449849, [4,5,8,77,4]);
// let client4 = new Client(4, 'vasya', 'orlov', 'asd@asd.com', 61449849, [8,5,6,2]);
// let client5 = new Client(5, 'vasya', 'orlov', 'asd@asd.com', 61449849, [7,5,9,5]);
// let client6 = new Client(6, 'vasya', 'orlov', 'asd@asd.com', 61449849, [45,56]);
// let client7 = new Client(7, 'vasya', 'orlov', 'asd@asd.com', 61449849, [4,3,8,7]);
// let client8 = new Client(8, 'vasya', 'orlov', 'asd@asd.com', 61449849, [2,7]);
// let client9 = new Client(9, 'vasya', 'orlov', 'asd@asd.com', 61449849, [1]);
// let client10 = new Client(10, 'vasya', 'orlov', 'asd@asd.com', 61449849, [1,2,3]);
//
// array.push(client1, client2, client3, client4, client5, client6, client7, client8, client9, client10);
// console.log(array);

// Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// let sort = array.sort((a, b) => a.order.length - b.order.length);

// Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car(model, maker, year, maxSpeed, engineVolume){
//     this.model = model;
//     this.maker = maker;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineVolume = engineVolume;
//
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//
//     this.info = function () {
//         for (const item in this) {
//             if (typeof this[item] !== 'function') {
//                 console.log(`${item} -- ${this[item]}`);
//             }
//         }
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed += newSpeed;
//     }
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     }
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     }
// }
// let car = new Car('Kia', 'Korea', 2000, 200, 2.6);
//
// console.log(car);
// car.drive();
// car.info();
// car.increaseMaxSpeed(50);
// console.log(car);
// car.changeYear(2012);
// car.addDriver({name:'vasil', age:25});
// console.log(car);


// (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Car {
//     constructor(model, maker, year, maxSpeed, engine) {
//         this.model = model;
//         this.maker = maker;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engine = engine;
//         }
//         drive(){
//             console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//         }
//         info() {
//             for (const item in this) {
//                 if (typeof this[item] != 'function') {
//                     console.log(`${item} -- ${this[item]}`);
//                 }
//             }
//         }
//     increaseMaxSpeed(newSpeed){
//         this.maxSpeed += newSpeed;
//     }
//     addDriver(driver){
//         this.driver = driver;
//     }
//     }
//
//     let car = new Car('Kia', 'Korea', 2000, 200, 2.6);
//
// console.log(car);
// car.drive();
// car.info();
// car.increaseMaxSpeed(50);
// console.log(car);
// car.addDriver({name:'Ivan', age:28});
// console.log(car);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// class Cinderella {
//     constructor(name, age, shoeSize) {
//         this.name = name;
//         this.age = age;
//         this.shoeSize = shoeSize;
//     }
// }
//  let cinderella1 = new Cinderella('Angela',22,35);
//  let cinderella2 = new Cinderella('Angelina',23,33);
//  let cinderella3 = new Cinderella('Angel',24,34);
//  let cinderella4 = new Cinderella('Lina',25,36);
//  let cinderella5 = new Cinderella('Ella',26,37);
//  let cinderella6 = new Cinderella('Alla',27,38);
//  let cinderella7 = new Cinderella('Alina',28,39);
//  let cinderella8 = new Cinderella('Anna',29,32);
//  let cinderella9 = new Cinderella('Adelina',21,31);
//  let cinderella10 = new Cinderella('Jenifer',20,30);
//
// let array=[cinderella1,cinderella2,cinderella3,cinderella4,cinderella5,cinderella6,cinderella7,cinderella8,cinderella9,cinderella10];
//
// class Prince extends Cinderella{
//     constructor(name, age, findShoeSize) {
//         super(name, age);
//         this.findShoeSize = findShoeSize;
//     }
// }
//
// let prince = new Prince('Garry', 22, 35);
//
// let find = (array, prince) => {
//     for (const item of array) {
//         if (prince.findShoeSize === item.shoeSize) {
//             return `My Cinderella is ${item.name}`
//         }
//     }
// }
//
// console.log(find(array, prince));
//
// let cinderella = array.find(value => prince.findShoeSize === value.shoeSize);
// console.log(cinderella);