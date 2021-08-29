
const user = {name:"john", email:"john@example.com", city:"Phoenix", state: "aZ", country:"USA" }

const str = {name, email, ...rest} = user

console.log(user);
console.log(str);
