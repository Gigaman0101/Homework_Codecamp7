

// JS-exercise-Quiz 1


//ข้อ 1
let diving = () => {
    let a = +prompt("Enter value a: ");
    let b = +prompt("Enter value b: ");
    let ans1, ans2;
    let gcd = (a, b) => {
        while (b) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    };
    if (gcd(a, b)) {
        ans1 = a / gcd(a, b);
        ans2 = b / gcd(a, b);
        console.log(`เศษส่วนอย่างต่ำ: ${ans1}/${ans2}`);
    } else {
        console.log(`ข้อ 1 : เศษส่วนอย่างต่ำ: ${a}/${b}`);
    }
}

diving();

//ข้อ 2

let i1 = 160;
let sum1 = 0;

while (i1 <= 2048) {
    sum1 = sum1 + i1;
    i1 += 2;
};
console.log(`ข้อ2: ${sum1}`);

//ข้อ 3 

let i2 = 163;
let sum2 = 0;

while (i2 <= 815) {
    sum2 = sum2 + i2;
    i2 += 4;
};
console.log(`ข้อ3: ${sum2}`);

//ข้อ 4

function fibonacci(num) {
    var a = 1, b = 0, temp;
    if (num === 1) {
        return 0
    } else {
        while (num > 1) {
            temp = a;
            a = a + b;
            b = temp;
            num--;
        }
        // console.log(b);
        return b;
    }
}

console.log(`ข้อ4 : ค่า fibonacci(1) => ${fibonacci(1)}`);
console.log(`ข้อ4 : ค่า fibonacci(7) => ${fibonacci(7)}`);
console.log(`ข้อ4 : ค่า fibonacci(3) => ${fibonacci(3)}`);

//ข้อ 5 

let sum3 = 0;

for (let i3 = 1; i3 <= 100; ++i3) {
    if (i3 % 2 === 0) {
        sum3 = sum3 - i3;
    } else {
        sum3 = sum3 + i3;
    }
    // return sum3;
}
console.log(`ข้อ5: ${sum3}`);

//ข้อ 6

let sumOfProducts1 = (n) => {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum = sum + (i * (i + 1));
    }
    // console.log(sum);
    return sum;
}
console.log(`ข้อ6: ${sumOfProducts1(88)}`);

//ข้อ 7

let sumOfProducts2 = (n) => {
    let sum = 0;
    for (let i = 0; i < n - 1; i++) {
        sum = sum + (i * (i + 1) * (i + 2))
    }
    // console.log(sum);
    return sum;
}
console.log(`ข้อ7: ${sumOfProducts2(89)}`);

//ข้อ 8

let sumOfProducts3 = (n) => {
    let sum = 0;
    for (let i = 1; i < n - 3; i += 2) {
        sum = sum + (i * (i + 2) * (i + 4))
    }
    // console.log(sum);
    return sum;
}
console.log(`ข้อ8: ${sumOfProducts3(159)}`);
console.log(`ข้อ8.1: ${sumOfProducts3(7)}`);
console.log(`ข้อ8.2: ${sumOfProducts3(9)}`);

//ข้อ 9 เหมือน ข้อ 8

//ข้อ 10

let min1 = () => {
    let num = prompt("Please enter the number: ");
    let totalNum = [];
    while (num !== "stop") {
        totalNum.push(num);
        num = prompt("Please enter the number1: ");
    }
    console.log(totalNum);
    return Math.min(...totalNum);
}
// console.log(min1());

// ข้อ 11 

let minThreeNumber = () => {
    let num = prompt("Please enter the number: ");
    let totalNum = [];
    while (num !== "stop") {
        totalNum.push(num);
        num = prompt("Please enter the number1: ");
    }
    console.log(totalNum);
    let result = totalNum.sort((a, b) => a - b)
    return result.filter((item, idx) => idx < 3);
}
// console.log(minThreeNumber());

// ข้อ 12

let minMaxNumber = () => {
    let num = prompt("Please enter the number: ");
    let totalNum = [];
    while (num !== "stop") {
        totalNum.push(num);
        num = prompt("Please enter the number1: ");
    }
    console.log(totalNum);
    let result = totalNum.sort((a, b) => a - b)
    let min = Math.min(...result);
    let max = Math.max(...result);
    return [min, max]
}
// console.log(minMaxNumber());

// ข้อ 13 

let minMaxDif = () => {
    let num = prompt("Please enter the number: ");
    let totalNum = [];
    while (num !== "stop") {
        totalNum.push(num);
        num = prompt("Please enter the number1: ");
    }
    console.log(totalNum);
    let result = totalNum.sort((a, b) => a - b)
    let min = Math.min(...result);
    let max = Math.max(...result);
    return max - min;
}
// console.log(minMaxDif());

// ข้อ 14

let averageNum = () => {
    let num = prompt("Please enter the number: ");
    let totalNum = [];
    while (num !== "stop") {
        totalNum.push(num);
        num = prompt("Please enter the number1: ");
    }
    let sumNum = totalNum.map((e) => Number(e)).reduce((acc, value) => acc + value, 0);
    let avgNum = sumNum / totalNum.length;
    return avgNum;
}
// console.log(averageNum());

// ข้อ 15

let reverseNum = () => {
    let num = +prompt("Enter number: ");
    let result = num.toString().split('').reverse().join('');
    let maTH = parseFloat(result) * Math.sign(num);
    console.log(maTH);
    return maTH;
}
// reverseNum();