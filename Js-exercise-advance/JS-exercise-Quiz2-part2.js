
// JS-exercise-Quiz 2 Part 2

// ข้อ 1 : 

// ข้อ 2 : Pow function

let pow = (a, n) => {
    return a ** n;
};

console.log(pow(2, 3));

// ข้อ 3 : thaiTypeof

let thaiTypeof = (variable) => {
    switch (typeof (variable)) {
        case "number":
            console.log("ตัวเลข");
            break;
        case "string":
            console.log("ข้อความ");
            break;
        case "object":
            console.log("ออปเจ็คต์");
            break;
        case "bigint":
            console.log("บิ๊กอินท์");
            break;
        case "symbol":
            console.log("สัญลักษณ์");
            break;
        case "function":
            console.log("ฟังชันต์");
            break;
        default:
            console.log("undefined");
    }
}
thaiTypeof(2);
