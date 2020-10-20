
// JS-exercise-Quiz 2 Part 2

// ข้อ 1 : ให้เขียนฟังก์ชัน checkCharacter(string) โดยคืนค่าเป็น stringโดยที่ 
// ถ้า string ที่เข้ามา เป็น พิมพ์ใหญ่ทั้งหมด ให้คืนค่าเป็น string ที่มีค่าเป็น “All character are capital.”
// ถ้า string ที่เข้ามา เป็น พิมพ์เล็กทั้งหมด ให้คืนค่าเป็น string ที่มีค่าเป็น “All character are small.”
// ถ้า string ที่เข้ามา เป็น พิมพ์ใหญ่และพิมเล็กผสมกัน ให้คืนค่าเป็น string ที่มีค่าเป็น “All character are mix.”

let checkCharacter = (string) => {
    switch (string) {
        case (string.toUpperCase()): return console.log(`ข้อ 1 : All character are capital.`);
        case (string.toLowerCase()): return console.log(`ข้อ 1 : All character are small.`);
        default: return console.log(`ข้อ 1 : All character are mix.`);
    }
}
checkCharacter('the')

// ข้อ 2 : Pow function

let pow = (a, n) => {
    return a ** n;
};

console.log(`ข้อ 2 : ${pow(2, 3)}`);

// ข้อ 3 : thaiTypeof

let thaiTypeof = (variable) => {
    switch (typeof (variable)) {
        case "number":
            console.log("ข้อ 3 : ตัวเลข");
            break;
        case "string":
            console.log("ข้อ 3 : ข้อความ");
            break;
        case "object":
            console.log("ข้อ 3 : ออปเจ็คต์");
            break;
        case "bigint":
            console.log("ข้อ 3 : บิ๊กอินท์");
            break;
        case "symbol":
            console.log("ข้อ 3 : สัญลักษณ์");
            break;
        case "function":
            console.log("ข้อ 3 : ฟังชันต์");
            break;
        default:
            console.log("ข้อ 3 : undefined");
    }
}
thaiTypeof(2);

// ข้อ 4 : ให้เขียนฟังก์ชัน evenArraySum( array ) โดยที่ฟังก์ชันนี้จะรับอาเรย์ของตัวเลข array และคืนค่าออกมาเป็นผลรวมของตัวเลขที่เป็นเลขคู่ทั้งหมด

let evenArraySum = (arr) => {
    let result = arr.filter((item) => item % 2 === 0)
        .reduce((acc, current) => acc + current, 0);
    console.log(`ข้อ 4 : ${result}`);
}
evenArraySum([1, 3, 5, 7, 2, 4]);

// ข้อ 5 : ให้เขียนฟังก์ชัน changeStringtoThaiDate() โดยฟังก์ชันนี้จะรับค่าวันที่ที่เป็นแบบตัวเลข และ คืนค่ามาเป็นวันที่แบบไทย แต่ถ้าวันที่ผิดพลาดหรือเดือน(กุมภาพันธ์ไม่ต้องเช็ค Leap year)ผิดพลาดให้แสดงค่าว่า “Error”

let changeStringThaiDate = (date) => {
    const newDate = date.split('-');
    // console.log(newDate)
    const thMonth = new Array(
        'มกราคม',
        'กุมภาพันธ์',
        'มีนาคม',
        'เมษายน',
        'พฤษภาคม',
        'มิถุนายน',
        'กรกฎาคม',
        'สิงหาคม',
        'กันยายน',
        'ตุลาคม',
        'พฤศจิกายน',
        'ธันวาคม',
    );
    let day = newDate[0];
    let month = thMonth[newDate[1] - 1]
    let year = Number(newDate[2]) + 543

    console.log(`ข้อ 5 : วันที่ ${day} เดือน${month} พ.ศ.${year}`);
}
changeStringThaiDate("31-8-1996")

// ข้อ 6 : ให้เขียนฟังก์ชัน isTheSameAnagram( string1 , string2 ) 
//โดยถ้า string ถ้าสองเป็น anagram กันให้คืนค่าาเป็น true 
//ถ้าไม่ให้คืนเป็น false

let anagrams = (stringA, stringB) => {
    // stringA = stringA.replace(/[^\w]/g, '').toLowerCase()
    // stringB = stringB.replace(/[^\w]/g, '').toLowerCase()
    stringA = stringA.toLowerCase();
    stringB = stringB.toLowerCase();

    if (stringA.length !== stringB.length) {
        return false
    }

    let arrB = stringB.split("")

    for (let char of stringA) {
        if (!arrB.includes(char)) {
            return false
        } else {
            arrB.splice(arrB.indexOf(char), 1)
        }
    }
    return true
}

// ยังไม่ได้ ไป copy มาครับ
console.log(`ข้อ 6 : ${anagrams("eat", "ate")}`);

//ข้อ 7 : ให้เขียนฟังก์ชัน numberOfSquare( height , width ) โดยให้หาจำนวนสี่จัตุรัสที่ใหญ่ที่สุดที่สามารถวางได้พอดี

let numberOfSquare = (height, width) => {
    let minNum, maxNum;
    if (height < width) {
        minNum = height;
    } else {
        minNum = width;
    }
    if (height >= width) {
        maxNum = height;
    } else {
        maxNum = width;
    }
    // const minNum = height < width ? height : width;
    // const MaxNum = height >= width ? height : width;
    for (let i = minNum; i >= 1; i--) {
        if (minNum % i === 0) {
            if (maxNum % i === 0) {
                width /= i;
                height /= i;
                break;
            }
        }
    }
    return width * height
}
console.log(`ข้อ 7:  ${numberOfSquare(20, 15)}`);

//ข้อ 8 : ให้เขียนฟังก์ชัน toChange( money ) โดยฟังก์ชันดังกล่าวจะแปลงเงินที่ได้รับมาเป็นเงินทอนโดยให้ใช้จำนวนแบงค์และเหรียญน้อยที่สุด เช่น
// เงินจำนวน 788 บาท จะแลกเป็นเงินทอนได้

let toChange = (money) => {
    let a1, a2, a3, a4, a5, a6, a7, a8, a9
    if (money >= 1000) {
        a1 = Math.floor(money / 1000);
        money -= 1000 * a1;
    } else {
        a1 = 0
    }

    if (money >= 500) {
        a2 = Math.floor(money / 500);
        money -= 500 * a2;
    } else {
        a2 = 0
    }

    if (money >= 100) {
        a3 = Math.floor(money / 100);
        money -= 100 * a3;
    }
    else {
        a3 = 0
    }
    if (money >= 50) {
        a4 = Math.floor(money / 50);
        money -= 50 * a4;
    } else {
        a4 = 0
    }

    if (money >= 20) {
        a5 = Math.floor(money / 20);
        money -= 20 * a5;
    } else {
        a5 = 0
    }

    if (money >= 10) {
        a6 = Math.floor(money / 10);
        money -= 10 * a6;
    } else {
        a6 = 0
    }

    if (money >= 5) {
        a7 = Math.floor(money / 5);
        money -= 5 * a7;
    } else {
        a7 = 0
    }

    if (money >= 2) {
        a8 = Math.floor(money / 2);
        money -= 2 * a8;
    } else {
        a8 = 0
    }

    if (money >= 1) {
        a9 = Math.floor(money / 1);
        money -= 1 * a9;
    } else {
        a9 = 0
    }
    console.log(`ข้อ 8 : “แบงค์พัน ${a1} ใบ / แบงค์ห้าร้อย ${a2} ใบ / แบงค์ร้อย ${a3} ใบ / แบงค์ห้าสิบ ${a4} ใบ / แบงค์ยี่สิบ ${a5} ใบ / เหรียญสิบ ${a6} เหรียญ / เหรียญห้า ${a7} เหรียญ / เหรียญสองบาท ${a8} เหรียญ / เหรียญบาท ${a9} เหรียญ”`)
}

toChange(788);


//ข้อ 9 : ให้เขียนฟังก์ชัน maxPossibleNumber( number ) ที่รับตัวเลขเป็นจำนวนจริงโดยคืนค่าเป็นตัวเลขที่มีค่ามากที่สุดที่เป็นไปได้ที่จำนวนหลักยังเท่าเดิม

let maxPossibleNumber = (number) => {
    const str = number.toString();
    const dotStr = str.indexOf('.');
    // console.log(dotStr);
    const arr1 = str.slice(0, dotStr) + str.slice(-(dotStr - 1));
    // console.log(arr1);
    const arr = [...arr1];
    arr.sort((a, b) => b - a).splice(arr.length - 2, 0, '.');
    const newNum = Number(arr.join('').trim());
    // console.log(arr);
    console.log(`ข้อ 9 : maxPossibleNumber ของ ${number} คือ ${newNum}`);
}

maxPossibleNumber(123.23);


// ข้อ 10 : ให้เขียนฟังก์ชันหา squareRoot( number ) โดยเป็นการหา สแควร์รูทในรูปที่ติดรูทไว้ เช่น
// 50 จะได้ 5 root 2
// 17 จะได้ root 17
// 25 จะได้ 5

let squareRoot = (number) => {
    let result = 1;
    for (let i = 2; i <= number; i++) {
        if ((number % i ** 2) === 0) {
            number /= i ** 2;
            result *= i;
            i--;
        }
    }
    if (number === 1) {
        return result
    } else if (result === 1) {
        return number
    } else {
        return result + " root " + number
    }
}
console.log(`ข้อ 10 : squareRoot(17) => ${squareRoot(17)}`);
console.log(`ข้อ 10 : squareRoot(8) => ${squareRoot(8)}`);


// ข้อ 11 : ให้เขียนฟังก์ชันหา dotProduct( vector1 , vector2 ) 
//โดยวิธีหา dot product โดยการนำสมาชิกที่อยู่ตำแหน่งเดียวกันของแต่ละ vector 
//มาคูณกันและนำทั้งหมดมาบวกกัน

let dotProduct = (vector1, vector2) => {
    let sum = 0;
    if (vector1.length > vector2.length) {
        for (let i = 0; i <= vector1.length - 1; i++) {
            vector2[vector1.length - i] = 0;
            sum += vector1[i] * vector2[i];
            // console.log(`i ${i}`);
            // console.log(`sum ${sum}`);
        }
    } else if (vector1.length < vector2.length) {
        for (let i = 0; i <= vector2.length - 1; i++) {
            vector1[vector2.length - i] = 0;
            sum += vector1[i] * vector2[i];
            // console.log(`i ${i}`);
            // console.log(`sum ${sum}`);
        }
    } else {
        for (let i = 0; i <= vector2.length - 1; i++) {
            sum += vector1[i] * vector2[i];
            // console.log(`i ${i}`);
            // console.log(`sum ${sum}`);
        }
    }
    console.log(`ข้อ 11 : ${sum}`)
}
dotProduct([1, 2, 6, 9], [3, 2, 6, 3]);
// dotProduct([3, 4], [2, 8, 9, 11]);
// dotProduct([2, 8, 9, 11], [3, 4]);

// ข้อ 12 : ให้เขียนฟังชั่น maxPairSum(array) 
//โดยฟังชั่นนี้จะหาผลรวมของตัวเลขสองตัวที่บวกกันแล้วได้ค่ามากที่สุดใน array 

let maxPairSum = (arr) => {
    let findMaxPair = arr.sort((a, b) => a - b).filter((value, index) => index > arr.length - 3);
    let result = findMaxPair.reduce((acc, currentValue) => acc + currentValue);
    // console.log(findMaxPair);
    console.log(`ข้อ 12 : ตอบ ${result}`);
}

maxPairSum([2, 5, 3, 9, 19, 3, 7, 58]);

// ข้อ 13 : ให้เขียนฟังก์ชัน minPairSum( array ) 
// โดยฟังก์ชันนี้จะหาผลรวมของตัวเลขสองตัวที่บวกกันแล้วได้ค่าน้อยที่สุดใน array 

let minPairSum = (arr) => {
    let findMinPair = arr.sort((a, b) => b - a).filter((value, index) => index > arr.length - 3);
    let result = findMinPair.reduce((acc, currentValue) => acc + currentValue);
    // console.log(findMinPair);
    console.log(`ข้อ 13 : ตอบ ${result}`);
}

minPairSum([2, 5, 3, 9, 19, 3, 7, 58]);

// ข้อ 14 : มีเจ้ากบน้อยอยู่ตัวหนึ่ง สามารถกระโดดได้ในทุกทิศทางบนระนาบ และจะกระโดดเป็นระยะทางครั้งละ X หน่วยพอดี อยู่มาวันหนึ่ง 
// เจ้ากบน้อยต้องการกระโดดจากจุด A ไปยังจุด B ซึ่งเป็นจุดบนระนาบ ที่ตั้งอยู่ห่างกัน Y หน่วย 
// เจ้ากบน้อยอยากให้คุณช่วยหาว่า มันจะต้องกระโดดอย่างน้อยกี่ครั้ง จึงจะไปหยุดที่จุด B พอดี ให้เขียนฟังก์ชัน numberOfJumpFrog( speed, distance )

let numberOfJumpFrog = (speed, distance) => {
    if (distance % speed === 0) {
        return distance / speed;
    } else {
        return Math.ceil(distance / speed);
    }
}
console.log(`ข้อ 14 : ${numberOfJumpFrog(4, 24)}`);
console.log(`ข้อ 14 : ${numberOfJumpFrog(4, 22)}`);

// ข้อ 15 : ในปี พศ 2945 ดอกเบี้ยเงินฝากของธนาคาร Codemy Bank ร้อยละ 2.5 โดยเป็นดอกเบี้ยทบต้นในแต่ละปี 
// ถ้านาย Nat ฝากเงินจำนวน money บาท และฝากไปจำนวน years ปี อยากทราบว่านาย Nat จะได้เงินทั้งหมดเท่าไหร่เมื่อถอน
// ให้เขียนฟังก์ชัน calculateInterest( money , years ) โดยคืนค่าเป็นจำนวนเงินที่นาย Nat จะได้หลังจากถอนเงิน

let calculateInterrest = (money, years) => {
    for (let i = 1; i <= years; i++) {
        money = money + (money * 0.025);
    }
    // console.log(money);
    return money
}
console.log(`ข้อ 15 :ดอกเบี้ยทบต้นเท่ากับ ${calculateInterrest(10000, 1)}`);
console.log(`ข้อ 15 :ดอกเบี้ยทบต้นเท่ากับ ${calculateInterrest(15126, 14)}`);

