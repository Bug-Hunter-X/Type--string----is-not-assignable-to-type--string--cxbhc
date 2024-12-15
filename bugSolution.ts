function greeter(person: string | string[]) {
  if (typeof person === 'string') {
    return "Hello, " + person;
  } else {
    return person.map(name => "Hello, " + name);
  }
}

let user = ["Jane User", "John Smith"];

console.log(greeter(user)); // Works correctly now! 
console.log(greeter("Jane User")); // Works correctly now!