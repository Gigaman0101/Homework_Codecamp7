// number

let random = (min, max) => {
    return (Math.floor(Math.random() * (max - min)) + min) + Math.random();
};
random(1, 5);

// string

let ucFirst = (string) => {
    return string[0].toUpperCase() + string.substr(1);
};
ucFirst("kill");

let checkSpam = (string) => {
    if (string.search("xxx") > 0 || string.search("viagra") > 0) {
        return true;
    } else {
        return false;
    };
};
checkSpam("12316xxx135161");

let truncate = (str, maxlength) => {
    if (str.length() >= maxlength) {
        return str.slice(0, 19) + "...";
    } else {
        return str;
    }
};
truncate("What I'd like to tell on this topic is:", 20);

// exercise array (map)
//1.1
let array1 = [1, 2, 30, 400];

let array2 = array1.map(function (item) {
    return item * 2;
})
console.log(array2);

//1.2
let array1 = [1, 2, 3, 4];

let array2 = array1.map((item) => item.toString());
console.log(array2);


//1.3
let array1 = [1, "1", 2, {}];

let array2 = array1.map((item) => typeof (item));
console.log(array2);

//1.4
let array1 = ["apple", "banana", "orange"];

let array2 = array1.map((item) => item.toUpperCase());
console.log(array2);

// 1.5
let array1 = [
    { name: "apple", age: 14 },
    { name: "banana", age: 18 },
    { name: "watermelon", age: 32 },
];

let array2 = array1.map((item) => {
    return item.name;
});
console.log(array2);

//1.6
let array1 = [
    { name: "apple", age: 14 },
    { name: "banana", age: 18 },
    { name: "watermelon", age: 32 },
];

let array2 = array1.map((item) => {
    return item.age;
});
console.log(array2);

//1.7
let array1 = [
    { name: "apple", surname: "London" },
    { name: "banana", surname: "Bangkok" },
    { name: "watermelon", surname: "Singapore" },
];

let array2 = array1.map((item) => {
    return `${item.name} ${item.surname}`;
});
console.log(array2);

//1.8
let array1 = [1, 3, 4, 5, 6, 7, 8];

let array2 = array1.map((item) => {
    let result = item % 2;
    if (result === 0) {
        return "Even"
    } else {
        return "Odd"
    };
});
console.log(array2);

//1.9
let array1 = [1, -3, 2, 8, -4, 5];

let array2 = array1.map((item) => {
    return Math.abs(item);
});
console.log(array2);

//1.10
let array1 = [100, 200.25, 300.84, 400.3]

let array2 = array1.map((item) => {
    return item.toFixed(2);
});
console.log(array2);

//1.11
let array1 = [
    { name: "apple", birth: "2000-01-01" },
    { name: "banana", birth: "1990-10-01" },
    { name: "watermelon", birth: "1985-12-01" },
];

let array2 = array1.map((item) => {
    item.age = 2019 - Number(item.birth.slice(0, 4));
    return { name: `${item.name}`, birth: `${item.birth}`, age: `${item.age}` };
});
console.log(array2);

//1.12
let array1 = [
    { name: "apple", birth: "2000-01-01" },
    { name: "banana", birth: "1990-10-10" },
    { name: "watermelon", birth: "1985-12-30" },
];

let array2 = array1.map((item) => {

    return `<tr><td> ${item.name}</td><td>${item.birth}</td></tr >`
});
console.log(array2);



// exercise array (filter)

//2.1 filter เลขที่มากกว่า 10
let array1 = [1, 2, 30, 400];

let array2 = array1.filter((item) => item > 10);
console.log(array2);

// 2.2 filter เลขคี่
let array1 = [1, 2, 3, 4];

let array2 = array1.filter((item) => {
    let result = item % 2;
    return result !== 0;
});
console.log(array2);

//2.3 filter number
let array1 = [1, "1", 2, {}];

let array2 = array1.filter((item) => {
    return typeof (item) === "number";
});
console.log(array2);

//2.4 filter ตัวอักษร > 6
let array1 = ["apple", "banana", "orange", "pineapple", "watermelon"];

let array2 = array1.filter((item) => {
    return item.length > 6;
});
console.log(array2);

//2.5 filter 
let array1 = [
    { name: "apple", age: 14 },
    { name: "banana", age: 18 },
    { name: "watermelon", age: 32 },
    { name: "pineapple", age: 16 },
    { name: "peach", age: 24 },
];

let array2 = array1.filter((item) => {
    return item.age < 18;
});
console.log(array2);

//2.6 filter ไม่เอาคนที่อายุ 32
let array1 = [
    { name: "apple", age: 14 },
    { name: "banana", age: 18 },
    { name: "watermelon", age: 32 },
    { name: "pineapple", age: 16 },
    { name: "peach", age: 24 },
];

let array2 = array1.filter((item) => {
    return item.age !== 32;
});
console.log(array2);

//2.7 filter เลขบวก
let array1 = [1, -3, 2, 8, -4, 5];

let array2 = array1.filter((item) => {
    return item >= 0;
});
console.log(array2);

//2.8 filter เลขหาร 3 ลงตัว
let array1 = [1, 3, 4, 5, 6, 7, 8];

let array2 = array1.filter((item) => {
    return (item % 3) === 0;
});
console.log(array2);

// 2.9 filter string
let array1 = ["peach", 1, -3, "2", {}, []];

let array2 = array1.filter((item) => {
    return typeof (item) === "string";
});
console.log(array2);

//2.10 filter คำที่เป็นอักษรตัวใหญ่ทุกตัว
let array1 = ["APPLE", "appLE", "PEACH", "PEach"];

let array2 = array1.filter((item) => {
    return item === item.toUpperCase();
});
console.log(array2);

//2.11  filter คนเกิดเดือน 10
let array1 = [
    { name: "apple", birth: "2001-01-01" },
    { name: "banana", birth: "1990-10-10" },
    { name: "watermelon", birth: "1985-12-30" },
    { name: "peach", birth: "2002-10-13" },
];

let array2 = array1.filter((item) => {
    return item.birth.slice(5, 7) === "10";
});
console.log(array2);

//2.12 filter คนเกิดก่อนปี 2000
let array1 = [
    { name: "apple", birth: "2001-01-01" },
    { name: "banana", birth: "1990-10-10" },
    { name: "watermelon", birth: "1985-12-30" },
    { name: "peach", birth: "2002-10-13" },
];

let array2 = array1.filter((item) => {
    return item.birth.slice(0, 4) < 2000;
});
console.log(array2);