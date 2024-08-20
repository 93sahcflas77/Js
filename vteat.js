// const obj_method = {
//     a: function (){
//         console.log(`Yore age is ${2024 - this.age}`)
//     },
//     b: function (){
//         console.log(`Person name is ${this.firstName} ${this.lastName} and your age is ${this.year}`)
//     }
// }

// const obj_method = {
//     AgeCalculate: function (){
//         console.log(`Yore age is ${2024 - this.age}`)
//     },
//     details: function (){
//         console.log(`Person name is ${this.firstName} ${this.lastName} and your age is ${this.year}`)
//     }
// }


// function CreateUser(firstName, lastName, gmail, BornYear){
//     const obj = {};

//     obj.firstName = firstName;
//     obj.lastName = lastName;
//     obj.gmail = gmail;
//     obj.age = BornYear;
//     obj.year = 2024 - BornYear;

//     // obj.AgeCalculate = function (){
//     //     console.log(`Yore age is ${2024 - this.age}`)
//     // }
//     // obj.details = function (){
//     //     console.log(`Person name is ${this.firstName} ${this.lastName} and your age is ${this.year}`)
//     // }

//     obj.AgeCalculate = obj_method.a;
//     obj.details = obj_method.b;

//     return obj;
// }


// function prototype 
// function CreateUser(firstName, lastName, gmail, BornYear){

//     // const obj = Object.create(obj_method);
//     const obj = Object.create(CreateUser.prototype);

//     obj.firstName = firstName;
//     obj.lastName = lastName;
//     obj.gmail = gmail;
//     obj.age = BornYear;
//     obj.year = 2024 - BornYear;

//     return obj;
// }

// CreateUser.prototype.AgeCalculate = function (){
//     return `${this.firstName} age is ${this.year}`;
// };

// CreateUser.prototype.personDetails = function (){
//     return `Person name is ${this.firstName} ${this.lastName} and your age is ${this.year}`;
// }

// const person1 = CreateUser("Chandan","Thakur","abc@gmail.com","2000");
// const person2 = CreateUser("Rahul","Sain","tygdf@gmail.com",2002);

// console.log(person1.AgeCalculate());
// console.log(person1.personDetails());
// // console.log(CreateUser.prototype);  //{}

// console.log(person2.AgeCalculate());
// console.log(person2.personDetails());




// new keyword 
// 1. object create
// 2. return 

// function CreateUser(firstName, lastName, gmail, BornYear){

//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.gmail = gmail;
//     this.BornYear = BornYear;

// }

// CreateUser.prototype.AgeCalculate = function (){
//     return `${this.firstName} age is ${2024 - this.BornYear}`;
// };

// CreateUser.prototype.personDetails = function (){
//     return `Person name is ${this.firstName} ${this.lastName} and your age is ${this.BornYear}`;
// }

// const person1 = new CreateUser("Chandan","Thakur","abc@gmail.com","2000");
// const person2 = new CreateUser("Rahul","Sain","tygdf@gmail.com",2002);

// console.log(person1.AgeCalculate());
// console.log(person1.personDetails());
// // console.log(CreateUser.prototype);  //{}

// console.log(person2.AgeCalculate());
// console.log(person2.personDetails());

// console.log(CreateUser.prototype);



// class 
// class CreateUser {
//     constructor(firstName, lastName, gmail, BornYear){
//             this.firstName = firstName;
//             this.lastName = lastName;
//             this.gmail = gmail;
//             this.BornYear = BornYear;
//     }

//     AgeCalculate(){
//         return `${this.firstName} age is ${2024 - this.BornYear}`;
//     }

//     personDetails(){
//         return `Person name is ${this.firstName} ${this.lastName} and your age is ${2024 - this.BornYear}`
//     }
// }

// console.log(CreateUser.prototype);

// const person1 = new CreateUser("chandan","thakur","abc@gmail.com",2000);

// console.log(person1.AgeCalculate());
// console.log(person1.personDetails());

// tow class assimble in extends keyword

// class rating extends CreateUser {

//     constructor(rating, firstName, lastName, gmail, BornYear){

//         super(firstName, lastName, gmail, BornYear);

//         this.rating = rating;

//     }

//     get PersonRating(){
//         return `Person name is ${this.firstName} and rating ${this.rating}`;
//     }

// }

// const person1 = new rating(5 ,"chandan","thakur","abc@gmail.com",2000);

// console.log(person1);
// console.log(person1.PersonRating);

// console.log(person1.AgeCalculate());



// question 1
const chandan = {
   name: "Chandan Thalur",
   age: 22,
   address: "Sodala",
   phone: 7073251686
}


// console.log(chandan);
// console.log(chandan.prototype);
// console.log(chandan.__proto__);



// question 2
const mydate = new Date();

// console.log(mydate.getTime());

mydate.getTime = function(){
   return `This time is wromg`;
}

// console.log(mydate.getTime());

const myfunction = mydate.getTime();
// console.log(myfunction);


// question 3
const object = {
   getValue() {
      return this.value;
   },
   getAddValue() {
      return this.value * 5;
   }
}

function val(value){
   this.value = value
}

Object.assign(val.prototype, object);

const a = new val(4);
// console.log(a.getValue());

const b = new val(10);
// console.log(b.getAddValue());

// question 4
const o = {
   a:1,
   b:2,
   __proto__: {
      b:3,
      c:4,
      __proto__: {
         d:5
      }
   },
}

// console.log(o);

// console.log(o.a);
// console.log(o.b);
// console.log(o.c);
// console.log(o.d);


// question 5
const object1  = {
   value: 1,
   getValue(){
      return this.value + 5;
   }
}

const person = {
   name: "chandan thakur",
   age: 22,
   __proto__: object1
}

console.log(object1);
console.log(person);

person.value = 10;

let abc = person.getValue();
// console.log(abc);


const ravi = {
   name: "Chandan Thalur",
   age: 22,
   address: "Sodala",
   phone: 7073251686
}

const prototype = {
   getAge(val){
      return `val +  5`;
   }
}

























