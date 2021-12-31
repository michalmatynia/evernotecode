// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this


// Here's the gist of it: this will always point to the current scope or instance from where it's called. An example:
const dog = {
    is: null,
    log: () => console.log(this.is),
    bark() {
      this.is = "woofing";
      this.log();
      return this;
    },
    walk() {
      this.is = "walking";
      this.log();
      return this;
    },
    eat() {
      this.is = "eating";
      this.log();
      return this;
    }
  };
  
  dog
    .bark()
    .eat()
    .walk();