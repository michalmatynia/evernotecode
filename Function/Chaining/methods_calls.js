// https://flaviocopes.com/javascript-chaining/

// It’s important to note that you can’t use arrow functions, because this in an arrow function used as object method is not bound to the object instance.

// Most experienced developers will have some experience with Array methods, such as map, reduce, and filter. You've probably already come across something like this:

const food = [
    { name: "Banana", type: "fruit" },
    { name: "Apple", type: "fruit" },
    { name: "Chocolate", type: "candy" },
    { name: "Orange", type: "fruit" }
];

// This type of usage is very common
food
    .map(item => item.type)
    .reduce((result, fruit) => {
        result.push(fruit);
        return [...new Set(result)];
    }, []);
  // result: ['fruit', 'candy']

/*   Using Class

You can achieve the same result using classes: */

class Dog {
    is = null;
    log() {
      console.log(this.is);
    }
    bark() {
      this.is = "woofing";
      this.log();
      return this;
    }
    walk() {
      this.is = "walking";
      this.log();
      return this;
    }
    eat() {
      this.is = "eating";
      this.log();
      return this;
    }
  }
  const dog = new Dog();
  dog
    .bark()
    .eat()
    .walk();
/* 
    Using Prototype

If you have to use prototype, do it this way: */

function Dog() {}

Dog.prototype.is = null;
Dog.prototype.log = function() {
  console.log(this.is);
};
Dog.prototype.bark = function() {
  this.is = "woofing";
  this.log();
  return this;
};
Dog.prototype.walk = function() {
  this.is = "walking";
  this.log();
  return this;
};
Dog.prototype.eat = function() {
  this.is = "eating";
  this.log();
  return this;
};
const dog = new Dog();
dog
  .bark()
  .eat()
  .walk();

  // I can check the methods chained to the class
  dog.__proto__


 /*  What About Async Functions?

async functions are synthetic sugar for promises and generators. When you declare an async function, you know that it will return a promise. Because of that, you'll also have access to all the methods of the promise. */

const requests = {
    user: null,
    action: null,
    log(something) {
      console.log(this[something]);
    },
    async getUser() {
      this.user = await new Promise(resolve => {
        setTimeout(() => {
          resolve("Douglas Pires");
        }, 1000);
      });
      this.log("user");
      return this;
    },
    async registerAction() {
      this.action = await new Promise(resolve => {
        setTimeout(() => {
          resolve("programming stuff");
        }, 1000);
      });
      this.log("action");
      return this;
    }
  };
  
  requests.getUser().then(() => requests.registerAction());