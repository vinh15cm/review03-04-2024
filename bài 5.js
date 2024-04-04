/*
câu 10:
1,console.log(0 && 1 && "Rikkei Academy" && null);
Kết quả: 0
Giải thích: Biểu thức đầu tiên là 0 (falsy), vì vậy kết quả của biểu thức là 0.
2,console.log(2 && NaN && false && null);
Kết quả: NaN
Giải thích: Biểu thức thứ hai là NaN (falsy), nên kết quả của biểu thức là NaN.
3,console.log(3 && 1 && 5 && null);
Kết quả: null
Giải thích: Tất cả các biểu thức là truthy, nhưng biểu thức cuối cùng là null (falsy), nên kết quả là null.
4,console.log("1" && undefined && 5 && NaN);
Kết quả: undefined
Giải thích: Biểu thức thứ hai là undefined (falsy), vì vậy kết quả của biểu thức là undefined.
5,console.log(1 && null && 12 && NaN);
Kết quả: null
Giải thích: Biểu thức thứ hai là null (falsy), nên kết quả của biểu thức là null.
Câu8:
Kết quả cuối cùng của biểu thức là:
7 + 7 + 7 + 9 + 9 = 39
Câu 7:
console.log(a == b);    Kết quả: true
console.log(a === b);   Kết quả: false
console.log(a != b);    Kết quả: false
console.log(a !== b);   Kết quả: true
Câu 9:
console.log(0 || NaN || "Rikkei Academy" || null);
Kết quả: "Rikkei Academy"
console.log(null || NaN || false || null);
Kết quả: null
console.log(undefined || 1 || 5 || null);
Kết quả: 1
console.log("" || null || 5 || NaN);
Kết quả: 5
console.log(1 || null || 12 || NaN);
Kết quả: 1
*/