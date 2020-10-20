

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

function gcd_more_than_two_numbers(input) {
    if (toString.call(input) !== "[object Array]")
        return false;
    var len, a, b;
    len = input.length;
    if (!len) {
        return null;
    }
    a = input[0];
    for (var i = 1; i < len; i++) {
        b = input[i];
        a = gcd_two_numbers(a, b);
    }
    return a;
}

function gcd_two_numbers(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number'))
        return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while (y) {
        var t = y;
        y = x % y;
        x = t;
    }
    return x;
}
console.log(`ข้อ 7 : ${gcd_more_than_two_numbers([3, 15, 27])}`);
console.log(`ข้อ 7 : ${gcd_more_than_two_numbers([24, 48, 96])}`);


// ข้อ 8 : ให้เขียนโปรแกรมหา ค.ร.น. ของ List ของตัวเลข => Input: [ 24, 48, 96 ]  Output: 96 , Input: [ 2, 3, 5, 7 ] Output: 210

// let lcm = (arr) => {
//     let maxNum = 0;
//     for (let num of arr) {
//         num = num < 0 ? 0 - num : num;
//         maxNum = num > maxNum ? num : maxNum;
//     }
//     for (let i = maxNum; i <= Infinity; i += maxNum) {
//         for (let num of arr) {
//             if (i % num !== 0) break;
//             if (arr.indexOf(num) === arr.length - 1) return i;
//         }
//     }

// }

let LCM = (arr) => {
    arr.sort((a, b) => a - b)
    let num = arr[arr.length - 1];
    for (let i = num; i <= Infinity; i--) {
        for (let j of arr) {
            if (i % j === 0) break;
            if (arr.indexOf(j) === arr.length - 1) return i;
        }
    }
}
console.log(`ข้อ 8 : ค.ร.น ${LCM([48, 24, 96])}`);


// ข้อ 9 : ให้เขียนโปรแกรมหา factorial n ( n! = 1×2×3×4×...×n )

let factorial = (n) => {
    let sum = 1;
    for (let i = 1; i <= n; i++) {
        sum = sum * i
    }
    return sum;
}
// console.log(`ข้อ 9 :${factorial(0)}`);
// console.log(`ข้อ 9 :${factorial(1)}`);
// console.log(`ข้อ 9 :${factorial(5)}`);

// ข้อ 10 : ให้เขียน function ที่รับ List ของ ตัวเลข และ รับค่า boolean => 
// ถ้า boolean มีค่าเป็น true เรียงลำดับตัวเลขจากน้อยไปหามาก
// ถ้า boolean เป็น false เรียงลำดับตัวเลขจากมากไปน้อย

let toSortNumber = (numList, bool) => {
    if (bool) {
        return numList.sort((a, b) => a - b);
    }
    return numList.sort((a, b) => b - a);
};

console.log(`ข้อ 10 : ${toSortNumber([1, 50, 500, 100, 23, 14], true)}`);
console.log(`ข้อ 10 :${toSortNumber([1, 50, 500, 100, 23, 14], false)}`);

// ข้อ 11 : ทำเหมือนข้อ 10 แต่ห้ามใช้ฟังก์ชัน sort() และ reverse()

let toSortNumber2 = (numList, bool) => {
    function compareNumber(a, b) {
        if (a < b) {
            return -1;
        } else if (a > b) {
            return 1;
        } else {
            return 0
        }
    }
    if (bool) {
        numList.join('')
    }
}
console.log(`ข้อ 11 : ${toSortNumber2([1, 50, 500, 100, 23, 14], true)}`);

// ข้อ 12 : ถ้าจำนวนนับที่น้อยกว่า 16 ที่เป็นพหุคูณของ 3 หรือ 5 เท่ากับ 3, 5, 6, 9, 10, 12 และ 15 โดยมีผลรวมเท่ากับ 60 แล้ว (3 + 5 + 6 + 9 + 10 + 12 + 15 = 60)
// จงหาผลรวมของจำนวนนับ ที่เป็นพหุคูณของ 3 หรือ 5 ที่มีค่าน้อยกว่า 1000

let multiPle = (num) => {
    let sum = 0;
    for (let i = 0; i < num; i++) {
        if (i % 3 === 0) {
            sum += i;
        } else if (i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}
console.log(`ข้อ 12: ${multiPle(16)}`);

// ข้อ 13 : หาผลรวมของเลขที่ใส่เข้ามา
// เช่น 130,120 => จะได้ 1+3+0+1+2+0 = 7

let sumDigit = (num1, num2) => {
    let result1 = num1.toString();
    let result2 = num2.toString();
    let sum = 0;
    for (let i = 0; i <= result1.length - 1; i++) {
        sum += Number(result1.charAt(i));
    };
    for (let i = 0; i <= result2.length - 1; i++) {
        sum += Number(result2.charAt(i));
    };
    return sum;
}
console.log(`ข้อ 13 : ${sumDigit(130, 150)}`);

// ข้อ 14 : ผลรวมของเลขโดดของ n! เช่น 6! = 120 => 1 + 2 + 0 = 3

let sumDigitFactorial = (numFac) => {
    let sum = 1;
    for (let i = 1; i <= numFac; i++) {
        sum = sum * i
    };
    let result = sum.toString();
    let total = 0;
    for (let i = 0; i <= result.length - 1; i++) {
        total += Number(result.charAt(i));
    };
    return total;
}
console.log(`ข้อ 14 : ${sumDigitFactorial(6)}`);

// ข้อ 15 : จงหาจำนวนเลขโดดตั้งแต่ 1 ถึง 4,129,980

let sumManyDigit = (num) => {
    let sum = 0;
    let result = num.toString()
    let n = 9;
    let total = 0;
    let count = 0;
    for (let i = 1; i <= result.length; i++) {
        sum += (i * n)
        count -= n;
        n = n + "0";
        if (i === result.length) {
            total = sum + ((num + count) * i);
        }
    }
    return total;
}
console.log(`ข้อ 15 : ${sumManyDigit(4129980)} ตัว`);
console.log(`ข้อ 15 : ${sumManyDigit(599)} ตัว`);
