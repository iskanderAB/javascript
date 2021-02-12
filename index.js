
const person ={
  name : 'iskander',
  age : 23
};

const person2 = {
    city: "halk el wed" ,
    name : "iskanderAB",
    age : 40
};

const mixed = Object.assign(person,person2);

console.log(mixed);

/*var p1 = JSON.parse('{"name":"iskander","age":23}');

p1.name =" ali" ;

console.log("person : " , person);
console.log("p1",p1);*/

// function changePerson(obj) {
//     obj.name = "houssem" ;
// }
//
// changePerson(person);
// console.log(person);

