// object definition
const human = {
    firstName: "Judah",
    lastName: "Parker",
    age: 26,
  };
  
  // function definition
  function greet() {
    const string = `My name is ${this.firstName} ${this.lastName}. I am ${this.age} years old.`;
    console.log(string);
  }
  
  // passing object as this value in call() method
  greet.call(human);