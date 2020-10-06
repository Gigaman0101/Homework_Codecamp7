

// JS-exercise-Quiz 2


// ข้อ 1 : ให้เขียนโปรแกรมที่หาจำนวนเฉพาะตั้งแต่ 1 ถึง 100
let arr = [];
for (let i = 2; i <= 100; i++) {
    let prime = true;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            prime = false;
            break
        }
    }
    if (prime === true) {
        arr.push(i);
    }

}
// console.log(arr);

// ข้อ 2 : ให้เขียนโปรแกรมที่รับ input เป็นตัวแปรชื่อ n โดยเมื่อรับมาแล้วให้คืนค่าออกมาเป็น List ของจำนวนเฉพาะที่มีค่าไม่มากกว่า n

let primeNumber = num => {
    let arr = [];
    for (let i = 2; i <= num; i++) {
        let prime = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                prime = false;
                break
            }
        }
        if (prime === true) {
            arr.push(i);
        }

    }
    return arr
}

// console.log(primeNumber(9));
// console.log(primeNumber(11));
// console.log(primeNumber(942));

// ข้อ 3 : ให้เขียนโปรแกรมที่รับ input n และแสดง Array ของจำนวนเฉพาะ n ตัวแรก

let numberOfPrime = count => {
    let arr = [];
    for (let i = 2; i <= Infinity; i++) {
        let prime = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                prime = false;
                break
            };
        };
        if (prime === true) {
            arr.push(i);
        }
        if (arr.length === count) {
            break;
        }
    };
    let result = arr;
    return result;
};

// console.log(numberOfPrime(4));
// console.log(numberOfPrime(5));
// console.log(numberOfPrime(8));
// console.log(numberOfPrime(160));

// ข้อ 5 : ให้เขียนโปรแกรมที่รับค่า n เข้ามาและให้บวกค่าของลำดับต่อไปนี้ => 1 + 2 + 2 + 3 + 3 + 3 + ... + n + ... + n (n ตัว)

let orDer = (n) => {
    let sum = 0;
    let count = 1;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= count; j++) {
            sum += i;
        }
        count++;
    }
    console.log(sum);
}
// orDer(6);

// ข้อ 6 : ให้เขียนโปรแกรมหาผลบวกลำดับต่อไปนี้ => 1 - 2 - 3 + 4 - 5 + 6 - 7 + 8 + 9 + 10 - 11 + ... (จำนวนที่เป็นจำนวนเฉพาะให้ติดลบ)

let isPrime = (n) => {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            true
        }
    }
    return n > 1;
}

let sumNumberNotPrime = (n) => {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (isPrime(i) === true) {
            sum -= i;
        } else {
            sum += i;
        }
    }
    console.log(sum);
}

// sumNumberNotPrime(11);

// ข้อ 7 : ให้เขียนโปรแกรมหา ห.ร.ม ของ List ของตัวเลข => Input: [ 6, 8, 16 ] , Output: 2

// ข้อ 8 : ให้เขียนโปรแกรมหา ค.ร.น. ของ List ของตัวเลข => Input: [ 24, 48, 96 ]  Output: 96 , Input: [ 2, 3, 5, 7 ] Output: 210

// ข้อ 9 : ให้เขียนโปรแกรมหา factorial n ( n! = 1×2×3×4×...×n )

let factorial = (n) => {
    sum = 1;
    for (let i = 1; i <= n; i++) {
        sum = sum * i
        console.log(`i: ${i}`);
        console.log(`n: ${n}`);
    }
    console.log(sum);
}
factorial(0);
factorial(1);
factorial(5);

// ข้อ 10 : 

let toSortNumber = () => {
    let a = +prompt("Enter a number");
    for (let i = 0; i < 10; i++) {

    }
}