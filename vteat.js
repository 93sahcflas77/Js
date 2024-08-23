// question 1
const simpleObject = {
   name: "Chandan Thakur",
   email: "chandan7073251686@gmail.com",
   password: "Cha12@thakur",
   age: 22,
   getAge() {
      return this.age;
   },
   getEmail() {
      return this.email
   }

}

console.log(simpleObject);
console.log(simpleObject.__proto__);
console.log(simpleObject.getAge());
console.log(simpleObject.getEmail());

// question 8
const objectMethod = {
   AgeCalculate: function(){
      return `Your age is ${2024 - this.BornYear}`      
   },
   details: function(){
      return `Person name is ${this.firstName} ${this.lastName} and person age is ${2024-this.BornYear}`;
   }
}

function abc(firstName, lastName, gmail, BornYear){
   const obj = {};
   obj.firstName = firstName;
   obj.lastName = lastName;
   obj.gmail = gmail;
   obj.BornYear = BornYear;
   // obj.AgeCalculate = function(){
   //    return `Your age is ${2024- this.BornYear}`
   // };
   // obj.details = function(){
   //    return `Person name is ${this.firstName} ${this.lastName} and your age is ${2024-this.BornYear}`;
   // }
   obj.AgeCalculate = objectMethod.AgeCalculate;
   obj.details = objectMethod.details;


   return obj;
}

const chandanThakur = abc("chandan", "thakur", "chandan@gmail.con", "2002");
console.log(chandanThakur);
console.log(chandanThakur.AgeCalculate());
console.log(chandanThakur.details());

// question 9
function mockUser(firstName, lastName, email, BornYear){
   const obj = Object.create(mockUser.prototype);

   obj.firstName = firstName;
   obj.lastName = lastName;
   obj.email = email;
   obj.BornYear = BornYear;

   return obj;
}

const raviGupta = mockUser("ravi","gupta", "abc@gmail.com", 25);
console.log(raviGupta);

mockUser.prototype.AgeCalculate = function(){
    return `Your age is ${2024 - this.BornYear}`
};

mockUser.prototype.details = function (){
   return `Person name is ${this.firstName} ${this.lastName} and person age is ${2024-this.BornYear}`;   
}

console.log(raviGupta.AgeCalculate());
console.log(raviGupta.details());



// question 2
const mydate = new Date();
const time = mydate.getTime();

mydate.getTime = function () {
   return `This is my date 20-02-2024`;
}

console.log(mydate.getTime());

// question 3
const object = {
   getAge() {
      return this.age;
   },
   getEmail() {
      return this.email
   }
}

function person(name, email, password, age) {
   this.name = name;
   this.email = email;
   this.password = password;
   this.age = age;
}

Object.assign(person.prototype, object);

const chandan = new person("chandan", "avc@gmail.com", "cha12@thakue", 22);
console.log(chandan);
console.log(chandan.getAge());
console.log(chandan.getEmail());


// question 4
const objectProtoype = {
   a: 1,
   b: 2,
   __proto__: {
      b: 2,
      c: 3,
      d: 4,
      __proto__: {
         e: 5
      }
   },
}

console.log(objectProtoype);
console.log(objectProtoype.a);
console.log(objectProtoype.b);
console.log(objectProtoype.c);
console.log(objectProtoype.d);
console.log(objectProtoype.e);

// question 5
const objectQuestion5 = {
   name: "Chandan Thakur",
   email: "chandan7073251686@gmail.com",
   password: "Cha12@thakur",
   age: 22,
   getAge(val) {

      let filter = this.age + val;
      if (isNaN(filter)) {
         return "Enter only number";
      } else {
         return filter;
      }


   },
   getEmail() {
      return this.email
   }
}

const user = {
   __proto__: objectQuestion5
}

console.log(user.getAge(5));

const userArrayPrototype = {
   getAge(val) {

      let filter = this.age + val;
      if (isNaN(filter)) {
         return "Enter only number";
      } else {
         return filter;
      }


   }
}

// without prototype
// const userArray = [
//    {
//       name: "chandan Thakur", email: "abc@gmail.com", password: "Cha12@thakur", age: 22, getAge(val) {

//          let filter = this.age + val;
//          if (isNaN(filter)) {
//             return "Enter only number";
//          } else {
//             return filter;
//          }


//       }
//    },
//    {
//       name: "ravi", email: "xyz@gmail.com", password: "gffgfjdgd", age: 23, getAge(val) {

//          let filter = this.age + val;
//          if (isNaN(filter)) {
//             return "Enter only number";
//          } else {
//             return filter;
//          }


//       }
//    },
//    {
//       name: "kavi", email: "fggffh@gmail.com", password: "ghfgfhg", age: 18, getAge(val) {

//          let filter = this.age + val;
//          if (isNaN(filter)) {
//             return "Enter only number";
//          } else {
//             return filter;
//          }


//       }
//    },
//    {
//       name: "tilak", email: "fyjhdh@gmail.com", password: "Cha12@thakur", age: 16, getAge(val) {

//          let filter = this.age + val;
//          if (isNaN(filter)) {
//             return "Enter only number";
//          } else {
//             return filter;
//          }


//       }
//    }
// ]

// with prototype
const userArray = [
   {
      name: "chandan Thakur", email: "abc@gmail.com", password: "Cha12@thakur", age: 22, __proto__: userArrayPrototype,
   },
   {
      name: "ravi", email: "xyz@gmail.com", password: "gffgfjdgd", age: 23, __proto__: userArrayPrototype
   },
   {
      name: "kavi", email: "fggffh@gmail.com", password: "ghfgfhg", age: 18, __proto__: userArrayPrototype
   },
   {
      name: "tilak", email: "fyjhdh@gmail.com", password: "Cha12@thakur", age: 16, __proto__: userArrayPrototype
   }
]


console.log(userArray[3].getAge(5));

// question 6
function userCreate(name, email, password, age){
   this.name = name;
   this.email = email;
   this.password = password;
   this.age = age
}

userCreate.prototype.getAge = function(val){
   let filter = this.age + val;
      if (isNaN(filter)) {
         return "Enter only number";
      } else {
         return filter;
      }
};

const ravi = new userCreate("chandan", "xyz@gmail.com", "cha12@thakur", 22);
console.log(ravi.getAge(10));


// question 7
class User {
   constructor(name, email, password, age) {
      this.name = name;
      this.email = email;
      this.password = password;
      this.age = age;
   }

   // method create
   getAge(val){
      return this.age + val;
   }
}

const kavi = new User("kavi", "abc@gmail.com", "jfhdfg", 12);
console.log(kavi);
console.log(kavi.getAge(5));

