// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let user1 = new User(1,'vasya', 'pavlov', 'asd@asd', 66548485);
// let user2 = new User(2,'petya', 'petrov', 'asd@asd', 64548485);
// let user3 = new User(3,'alex', 'ivanov', 'asd@asd', 65418485);
// let user4 = new User(4,'vanya', 'zubov', 'asd@asd', 65482485);
// let user5 = new User(5,'kolya', 'artemiev', 'asd@asd', 64548485);
// let user6 = new User(6,'max', 'gorbatyk', 'asd@asd', 65485485);
// let user7 = new User(7,'anna', 'ivanchuk', 'asd@asd', 65487485);
// let user8 = new User(8,'oleg', 'ivanov', 'asd@asd', 65488485);
// let user9 = new User(9,'anton', 'perushchak', 'asd@asd', 69548485);
// let user10 = new User(10,'ivan', 'alekseev', 'asd@asd', 65483485);
//
// let arr = [];
//
// arr.push(user1,user2,user3,user4,user5,user6,user7,user8,user9,user10);

// Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// let filter = arr.filter(value => value.id % 2 === 0);
// console.log(filter);

// Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// console.log(arr.sort((a, b) => b.id - a.id));

// створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

// class Client{
//
//     constructor(id, name, surname, email, phone,  order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// let client1 = new Client(1,'Vasya','Petrov','asd@dc.com',4675676546, ['Coca-Cola','Bread']);
// let client2 = new Client(2,'Andriy','Petrov','asd@dc.com',467676546, ['Coca-Cola','Bread','Fanta']);
// let client3 = new Client(3,'Oleh','Petrov','asd@dc.com',467676546, ['Coca-Cola','Apple']);
// let client4 = new Client(4,'Max','Petrov','asd@dc.com',467676546, ['Coca-Cola']);
// let client5 = new Client(5,'Rostyslav','Petrov','asd@dc.com',4676476546, ['Coca-Cola','Bread','Phone','Orange']);
// let client6 = new Client(6,'Ivan','Petrov','asd@dc.com',4676765546, ['Coca-Cola','Bread','add','efae']);
// let client7 = new Client(7,'Anna','Petrov','asd@dc.com',4676761546, []);
// let client8 = new Client(8,'Oksana','Petrov','asd@dc.com',4676763546, ['Coca-Cola','Bread','Axe']);
// let client9 = new Client(9,'Artem','Petrov','asd@dc.com',46767776546, ['Coca-Cola','Bread','Sprite','TV']);
// let client10 = new Client(10,'Pavlo','Petrov','asd@dc.com',4676796546, ['Coca-Cola','Bread','Radio','Viber']);
//
// let client = [];
//
// client.push(client1,client2,client3,client4,client5,client6,client7,client8,client9,client10);

// Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// console.log(client.sort((a, b) => a.order.length - b.order.length));


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car(model, produser, year, maxSpeed, engine) {
//     this.model = model;
//     this.produser = produser;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engine = engine;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${maxSpeed} на годину`);
//     }
//     this.info = function () {
//         for (const carKey in this) {
//             if (typeof this[carKey] !== 'function'){
//                 console.log(`${carKey} -- ${this[carKey]}`);
//             }
//         }
//     }
//     this.increaseMaxSpeed = function (newSpeed){
//         this.maxSpeed += newSpeed;
//     }
//     this.changeYear = function (newValue){
//         this.year = newValue;
//     }
//     this.addDriver = function (driver){
//         this.driver = driver;
//     }
// }
//
// const car = new Car('Kia','Korea',2012,220,2.8);
//
// car.drive();
// car.info();
// car.increaseMaxSpeed(270);
// car.changeYear(2020);
// car.addDriver({name:'vasya'});
// console.log(car);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


// class Car{
//
//     constructor(model, produser, year, maxSpeed, engine) {
//         this.model = model;
//         this.produser = produser;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engine = engine;
//         this.drive = function () {
//         console.log(`їдемо зі швидкістю ${maxSpeed} на годину`);
//     }
//     this.info = function () {
//         for (const carKey in this) {
//             if (typeof this[carKey] !== 'function'){
//                 console.log(`${carKey} -- ${this[carKey]}`);
//             }
//         }
//     }
//     this.increaseMaxSpeed = function (newSpeed){
//         this.maxSpeed += newSpeed;
//     }
//     this.changeYear = function (newValue){
//         this.year = newValue;
//     }
//     this.addDriver = function (driver){
//         this.driver = driver;
//     }
//     }
// }
//
// const car = new Car('Kia','Korea',2012,220,2.8);
//
// car.drive();
// car.info();
// car.increaseMaxSpeed(270);
// car.changeYear(2020);
// car.addDriver({name:'vasya'});
// console.log(car);


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбек

// class Cinderella{
//         constructor(name, age, shoesize) {
//                 this.name = name;
//                 this.age = age;
//                 this.shoesize = shoesize;
//         }
// }
//
// const cinderella = new Cinderella('Anna', 31, 40);
// const cinderella1 = new Cinderella('Marina', 30, 41);
// const cinderella2 = new Cinderella('Natalia', 32, 42);
// const cinderella3 = new Cinderella('Olga', 29, 43);
// const cinderella4 = new Cinderella('Karmen', 28, 39);
// const cinderella5 = new Cinderella('Liubov', 27, 38);
// const cinderella6 = new Cinderella('Ella', 26, 37);
// const cinderella7 = new Cinderella('Tamila', 25, 36);
// const cinderella8 = new Cinderella('Viktoria', 24, 35);
// const cinderella9 = new Cinderella('Diana', 23, 34);
//
// const cinda = [];
//
// cinda.push(cinderella, cinderella1, cinderella2, cinderella3, cinderella4, cinderella5, cinderella6, cinderella7, cinderella8, cinderella9);
// console.log(cinda);
//
// class Prince{
//         constructor(name, age, findShoeSize) {
//                 this.name = name;
//                 this.age = age;
//                 this.findShoeSize = findShoeSize;
//         }
// }
//
// const prince = new Prince('Vasya', 30,34);
//
// const findCinda = (arr,boy) => {
//         for (const item of arr) {
//                 if (item.shoesize === boy.findShoeSize) {
//                         console.log(`My cinderella is ${item.name}`);
//                 }
//         }
// }
//
// findCinda(cinda,prince);