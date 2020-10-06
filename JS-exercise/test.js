
// ข้อ 1
let user = {
    name: "John",
    years: 30
};

let { name, years: age, isAdmin = false } = user;

console.log(name);//1
console.log(age);//2
console.log(isAdmin);//3

console.log(user);

// ข้อ 2
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalary(obj) {
    let max = -Infinity;
    let name = "";
    for (let key in obj) {
        if (obj[key] > max) {
            max = salaries[key]
            name = key;
        };
    };
    return name;
};
topSalary(salaries);
// อีกวิธี
function topSalary2(salaries) {

    let max = -Infinity;
    let maxName = null;

    for (const [name, salary] of Object.entries(salaries)) {
        if (max < salary) {
            max = salary;
            maxName = name;
        }
    }

    return maxName;
}

//

let pockets = {
    money: 2000
    // _proto_: bed
};

let bed = {
    sheet: 1,
    pillow: 2,
    _proto_: table
};

let table = {
    pen: 3,
    _proto_: head
};

let head = {
    glasses: 1,
};

console.log(head);

//
let animal = {
    eat() {
        this.full = true;
    }
};

let rabbit = {
    __proto__: animal
};

rabbit.eat(); // rabbit จะได้ full ไป true

//

let hamster = {
    stomach: [],

    eat(food) {
        this.stomach.push(food);
    }
};

let speedy = {
    __proto__: hamster
};

let lazy = {
    __proto__: hamster
};

// This one found the food
speedy.eat("apple");
alert(speedy.stomach); // apple

// This one also has it, why? fix please.
alert(lazy.stomach); // apple

