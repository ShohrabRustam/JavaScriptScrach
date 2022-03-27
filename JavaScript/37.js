// difference between dot and bracket notaion
const key = "email";
const person = {
    name: "Rustam",
    age: 22,
    "person hobbies": ["guitar", "sleeping", "listening music"]

}

console.log(person["person hobbies"]);
person[key] = "shohrabrustam@gmail.com";
console.log(person);
