// object definition
const human = {
    firstName: "Ram",
    lastName: "Sharma",
    age: 23,
  };
  
  // function definition
  function greet() {
    
    const string = `My name is ${this.firstName} ${this.lastName}. I am ${this.age} years old.`;
   
    console.log(string);
  
  }
  
  greet.call(human);