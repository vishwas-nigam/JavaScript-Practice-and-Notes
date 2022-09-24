// variable type can be changed in runtime
var a = 67
console.log(a)
a = "Behen ki laudi"
console.log(a)
// var was used before ES6 and we should avoid it

// const is used to declare constants that are globally scoped

// let is used to declare block scoped variables. it can only be updated but not redeclared
const author = "harry"
// author = "gabber" this will not work as author is already assigned to a constant
console.log(author)
