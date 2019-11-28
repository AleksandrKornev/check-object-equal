const objectEquals = require('../lib');

let obj = {
  a: 1,
  b: "123",
  c: {
    a: 1
  }
}

let obj2 = {
  a: 1,
  b: "123",
  c: {
    a: 1
  }
}

console.log(objectEquals(obj, obj2));
console.log(objectEquals(1, 1));
console.log(objectEquals(
  [12, 12, "12", { 
    a: 1, 
    b: { c: 123 }
  }], 
  [12, 12, "12", { 
    a: 1, 
    b: { c: 123 } 
  }]
));
console.log(objectEquals(
  () => {}, () => {}
));
console.log(objectEquals(
  new Error(), new Error()
));
console.log(objectEquals(
  new Date(), new Date()
));

let date = new Date(), date2 = date;
console.log(objectEquals(
  date, date2
));