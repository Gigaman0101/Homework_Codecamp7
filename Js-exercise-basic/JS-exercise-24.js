// Homework basic 2  page 78 -100(1 -24)
// 1 จงเขียน method draw(int n) ให้ print ออกมาในกรณีที่ n มีค่าต่างๆ ได้ผลลัพธ์ดังนี้

function draw1() {
    let methodDraw = +prompt("ใส่จำนวน n1");
    let str = "";
    for (let n = 1; n <= methodDraw; n++) {
        str = str + "*"
    };
    return str;
};
console.log(draw1());

// 2 จงเขียน method draw(int n) ให้ print ออกมาในกรณีที่ n มีค่าต่างได้ผลลัพธ์ดังนี้ 

let draw2 = () => {
    let methodDraw = +prompt("ใส่จำนวน n2");
    let str = "";
    for (let row = 1; row <= methodDraw; row++) {
        for (let n = 1; n <= methodDraw; n++) {
            str = str + "*";
        };
        str += "\n"
    };
    console.log(str);
};
draw2();

// 3 จงเขียน method (int n) ให้ print ออกมาในกรณีที่ n มีค่าต่างๆ ได้ผลลัพธ์ดังนี้

let draw3 = () => {
    let methodDraw = +prompt("ใส่จำนวน n3");
    let str = "";
    for (let row = 1; row <= methodDraw; row++) {
        let num = 1;
        for (let n = 1; n <= methodDraw; n++) {
            str = str + num;
            num = num + 1;
        };
        str += "\n";
    };
    console.log(str);
};
draw3();

// 4 จงเขียน method (int n) ให้ print ออกมาในกรณีที่ n มีค่าต่างๆ ได้ผลลัพธ์ดังนี้

let draw4 = () => {
    let methodDraw = +prompt("ใส่จำนวน n4");
    let str = "";
    let num = 1;
    for (let row = 1; row <= methodDraw; row++) {
        for (let n = 1; n <= methodDraw; n++) {
            str = str + num;
        };
        num = num + 1;
        str += "\n";
    };
    console.log(str);
};
draw4();

// 5 จงเขียน method (int n) ให้ print ออกมาในกรณีที่ n มีค่าต่างๆ ได้ผลลัพธ์ดังนี้

let draw5 = () => {
    let methodDraw = +prompt("ใส่จำนวน n5");
    let str = "";
    let num = methodDraw;
    for (let row = 1; row <= methodDraw; row++) {
        for (let n = 1; n <= methodDraw; n++) {
            str = str + num;
        };
        num = num - 1;
        str += "\n";
    };
    console.log(str);
};
draw5();

// 6 จงเขียน method (int n) ให้ print ออกมาในกรณีที่ n มีค่าต่างๆ ได้ผลลัพธ์ดังนี้

let draw6 = () => {
    let methodDraw = +prompt("ใส่จำนวน n6");
    let str = "";
    let num = 1;
    for (let row = 1; row <= methodDraw; row++) {
        for (let n = 1; n <= methodDraw; n++) {
            str = str + num;
            num = num + 1;
        };
        str += "\n";
    };
    console.log(str);
};
draw6();

// 7 จงเขียน method (int n) ให้ print ออกมาในกรณีที่ n มีค่าต่างๆ ได้ผลลัพธ์ดังนี้

let draw7 = () => {
    let methodDraw = +prompt("ใส่จำนวน n7");
    let str = "";
    let num = methodDraw * methodDraw;
    for (let row = 1; row <= methodDraw; row++) {
        for (let n = 1; n <= methodDraw; n++) {
            str = str + num;
            num = num - 1;
        };
        str += "\n";
    };
    console.log(str);
};
draw7();

// 8 จงเขียน method (int n) ให้ print ออกมาในกรณีที่ n มีค่าต่างๆ ได้ผลลัพธ์ดังนี้

let draw8 = () => {
    let methodDraw = +prompt("ใส่จำนวน n8");
    let str = "";
    let num = 0;
    for (let row = 1; row <= methodDraw; row++) {
        str = str + num;
        for (let n = 1; n <= methodDraw; n++) {

        };
        num = num + 2;
        str += "\n";
    };
    console.log(str);
};
draw8();

// 9 จงเขียน method (int n) ให้ print ออกมาในกรณีที่ n มีค่าต่างๆ ได้ผลลัพธ์ดังนี้

let draw9 = () => {
    let methodDraw = +prompt("ใส่จำนวน n9");
    let str = "";
    let num = 2;
    for (let row = 1; row <= methodDraw; row++) {
        str = str + num;
        for (let n = 1; n <= methodDraw; n++) {

        };
        num = num + 2;
        str += "\n";
    };
    console.log(str);
};
draw9();

// 10 จงเขียน method (int n) ให้ print ออกมาในกรณีที่ n มีค่าต่างๆ ได้ผลลัพธ์ดังนี้

let draw10 = () => {
    let methodDraw = +prompt("ใส่จำนวน n10");
    let str = "";
    for (let row = 1; row <= methodDraw; row++) {
        for (let n = 1; n <= methodDraw; n++) {
            str = str + (n * row);
        };
        str += "\n";
    };
    console.log(str);
};
draw10();

// 11 จงเขียน method (int n) ให้ print ออกมาในกรณีที่ n มีค่าต่างๆ ได้ผลลัพธ์ดังนี้

let draw11 = () => {
    let methodDraw = +prompt("ใส่จำนวน n11");
    let str = "";
    for (let row = 1; row <= methodDraw; row++) {
        for (let n = 1; n <= methodDraw; n++) {
            if (n === row) {
                str = str + "_"
            } else {
                str = str + "*";
            };
        };
        str += "\n";
    };
    console.log(str);
};
draw11();

// 12 จงเขียน method (int n) ให้ print ออกมาในกรณีที่ n มีค่าต่างๆ ได้ผลลัพธ์ดังนี้

let draw12 = () => {
    let methodDraw = +prompt("ใส่จำนวน n12");
    let str = "";
    let k = methodDraw;
    for (let row = 1; row <= methodDraw; row++) {
        for (let n = 1; n <= methodDraw; n++) {
            if (n === k) {
                str = str + "_";
                k--;
            } else {
                str = str + "*";
            };
        };
        str += "\n";
    };
    console.log(str);
};
draw12();

// 13 จงเขียน method (int n) ให้ print ออกมาในกรณีที่ n มีค่าต่างๆ ได้ผลลัพธ์ดังนี้

let draw13 = () => {
    let methodDraw = +prompt("ใส่จำนวน n13");
    let str = "";
    for (let row = 1; row <= methodDraw; row++) {
        for (let n = 1; n <= methodDraw; n++) {
            if (n <= row) {
                str = str + "*";
            } else {
                str = str + "_";
            }
        };
        str += "\n";
    };
    console.log(str);
};
draw13();

// 14 จงเขียน method (int n) ให้ print ออกมาในกรณีที่ n มีค่าต่างๆ ได้ผลลัพธ์ดังนี้

let draw14 = () => {
    let methodDraw = +prompt("ใส่จำนวน n14");
    let str = "";
    k = methodDraw;
    for (let row = 1; row <= methodDraw; row++) {
        for (let n = 1; n <= methodDraw; n++) {
            if (n <= k) {
                str = str + "*";
            } else {
                str = str + "_";
            };
        };
        k--;
        str += "\n";
    };
    console.log(str);
};
draw14();

// 15 จงเขียน method (int n) ให้ print ออกมาในกรณีที่ n มีค่าต่างๆ ได้ผลลัพธ์ดังนี้

let draw15 = () => {
    let methodDraw = +prompt("ใส่จำนวน n15");
    let str = "";
    k = methodDraw
    for (let row = 1; row < methodDraw; row++) {
        for (let n = 1; n <= methodDraw; n++) {
            if (n <= row) {
                str = str + "*";
            } else {
                str = str + "_";
            }
        };
        str += "\n";
    };
    for (let row = 1; row <= methodDraw; row++) {
        for (let n = 1; n <= methodDraw; n++) {
            if (n <= k) {
                str = str + "*";
            } else {
                str = str + "_";
            };
        };
        k--;
        str += "\n";
    };
    console.log(str);
};
draw15();

// 16 จงเขียน method (int n) ให้ print ออกมาในกรณีที่ n มีค่าต่างๆ ได้ผลลัพธ์ดังนี้

let draw16 = () => {
    let methodDraw = +prompt("ใส่จำนวน n16");
    let str = "";
    k = methodDraw
    let num1 = 1;
    for (let row = 1; row < methodDraw; row++) {
        for (let n = 1; n <= methodDraw; n++) {
            if (n <= row) {
                str = str + num1;
            } else {
                str = str + "_";
            };
        };
        num1 = num1 + 1;
        str += "\n";
    };
    let num2 = methodDraw
    for (let row = 1; row <= methodDraw; row++) {
        for (let n = 1; n <= methodDraw; n++) {
            if (n <= k) {
                str = str + num2;
            } else {
                str = str + "_";
            };
        };
        num2 = num2 - 1;
        k--;
        str += "\n";
    };
    console.log(str);
};
draw16();

// 17 จงเขียน method (int n) ให้ print ออกมาในกรณีที่ n มีค่าต่างๆ ได้ผลลัพธ์ดังนี้

let draw17 = () => {
    let methodDraw = +prompt("ใส่จำนวน n17");
    let str = "";
    k = methodDraw;
    for (let row = 1; row <= methodDraw; row++) {
        for (let n = 1; n <= methodDraw; n++) {
            if (n >= k) {
                str = str + "*";
            } else {
                str = str + "_";
            }
        };
        k--;
        str += "\n";
    };
    console.log(str);
};
draw17();

// 18 จงเขียน method (int n) ให้ print ออกมาในกรณีที่ n มีค่าต่างๆ ได้ผลลัพธ์ดังนี้

let draw18 = () => {
    let methodDraw = +prompt("ใส่จำนวน n18");
    let str = "";
    for (let row = 1; row <= methodDraw; row++) {
        for (let n = 1; n <= methodDraw; n++) {
            if (n >= row) {
                str = str + "*";
            } else {
                str = str + "_";
            }
        };
        k--;
        str += "\n";
    };
    console.log(str);
};
draw18();

// 19 จงเขียน method (int n) ให้ print ออกมาในกรณีที่ n มีค่าต่างๆ ได้ผลลัพธ์ดังนี้

let draw19 = () => {
    let methodDraw = +prompt("ใส่จำนวน n19");
    let str = "";
    k = methodDraw;
    for (let row = 1; row < methodDraw; row++) {
        for (let n = 1; n <= methodDraw; n++) {
            if (n >= k) {
                str = str + "*";
            } else {
                str = str + "_";
            }
        };
        k--;
        str += "\n";
    };
    for (let row = 1; row <= methodDraw; row++) {
        for (let n = 1; n <= methodDraw; n++) {
            if (n >= row) {
                str = str + "*";
            } else {
                str = str + "_";
            }
        };
        k--;
        str += "\n";
    };
    console.log(str);
};
draw19();

// 20 จงเขียน method (int n) ให้ print ออกมาในกรณีที่ n มีค่าต่างๆ ได้ผลลัพธ์ดังนี้

let draw20 = () => {
    let methodDraw = +prompt("ใส่จำนวน n20");
    let str = "";
    let num = 1;
    k = methodDraw;
    for (let row = 1; row < methodDraw; row++) {
        for (let n = 1; n <= methodDraw; n++) {
            if (n >= k) {
                str = str + num;
                num += 1;
            } else {
                str = str + "_";
            }
        };
        k--;
        str += "\n";
    };
    for (let row = 1; row <= methodDraw; row++) {
        for (let n = 1; n <= methodDraw; n++) {
            if (n >= row) {
                str = str + num;
                num += 1
            } else {
                str = str + "_";
            }
        };
        k--;
        str += "\n";
    };
    console.log(str);
};
draw20();

// 21 จงเขียน method (int n) ให้ print ออกมาในกรณีที่ n มีค่าต่างๆ ได้ผลลัพธ์ดังนี้

let draw21 = () => {
    let methodDraw = +prompt("ใส่จำนวน n21");
    let str = "";
    for (let row = 1; row <= methodDraw; row++) {
        for (let n = 1; n <= (2 * methodDraw) - 1; n++) {
            if (n >= methodDraw + 1 - row && n <= methodDraw - 1 + row) {
                str = str + "*";
            } else {
                str = str + "_";
            }
        };
        str += "\n";
    };
    console.log(str);
};
draw21();

// 22 จงเขียน method (int n) ให้ print ออกมาในกรณีที่ n มีค่าต่างๆ ได้ผลลัพธ์ดังนี้

let draw22 = () => {
    let methodDraw = +prompt("ใส่จำนวน n22");
    let str = "";
    for (let row = 1; row <= methodDraw; row++) {
        for (let n = 1; n <= (2 * methodDraw) - 1; n++) {
            if (n <= row - 1 || n >= (2 * methodDraw) + 1 - row) {
                str = str + "_";
            } else {
                str = str + "*";
            }
        };
        str += "\n";
    };
    console.log(str);
};
draw22();

// 23 จงเขียน method (int n) ให้ print ออกมาในกรณีที่ n มีค่าต่างๆ ได้ผลลัพธ์ดังนี้

let draw23 = () => {
    let methodDraw = +prompt("ใส่จำนวน n23");
    let str = "";
    for (let row = 1; row < methodDraw; row++) {
        for (let n = 1; n <= (2 * methodDraw) - 1; n++) {
            if (n >= methodDraw + 1 - row && n <= methodDraw - 1 + row) {
                str = str + "*";
            } else {
                str = str + "_";
            }
        };
        str += "\n";
    };
    for (let row = 1; row <= methodDraw; row++) {
        for (let n = 1; n <= (2 * methodDraw) - 1; n++) {
            if (n <= row - 1 || n >= (2 * methodDraw) + 1 - row) {
                str = str + "_";
            } else {
                str = str + "*";
            }
        };
        str += "\n";
    };
    console.log(str);
};
draw23();

// 24 จงเขียน method (int n) ให้ print ออกมาในกรณีที่ n มีค่าต่างๆ ได้ผลลัพธ์ดังนี้

let draw24 = () => {
    let methodDraw = +prompt("ใส่จำนวน n24");
    let str = "";
    let num = 1;
    for (let row = 1; row < methodDraw; row++) {
        for (let n = 1; n <= (2 * methodDraw) - 1; n++) {
            if (n >= methodDraw + 1 - row && n <= methodDraw - 1 + row) {
                str = str + num;
                num++;
            } else {
                str = str + "_";
            }
        };
        str += "\n";
    };
    for (let row = 1; row <= methodDraw; row++) {
        for (let n = 1; n <= (2 * methodDraw) - 1; n++) {
            if (n <= row - 1 || n >= (2 * methodDraw) + 1 - row) {
                str = str + "_";
            } else {
                str = str + num;
                num++;
            }
        };
        str += "\n";
    };
    console.log(str);
};
draw24();