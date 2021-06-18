export default function getNames() {
let promise = new Promise(resolve => {
    resolve([
        { id: 1, name: "Adria", email: "Adria@gmail.com", age: 20 },
        { id: 2, name: "Nigel", email: "Nigel@gmail.com", age: 18 },
        { id: 3, name: "Samael", email: "Samael@gmail.com", age: 21 },
        { id: 4, name: "Roark", email: "Roark@gmail.com", age: 33 },
        { id: 5, name: "Salma", email: "Salma@gmail.com", age: 31 },
      ])
});
return promise
}