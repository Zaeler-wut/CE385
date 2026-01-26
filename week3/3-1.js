let sumEven = 0 ;
let productOdd = 1;
let i = 2;
let j = 3;
while (i <= 50) {
    sumEven+=i
    i+=2;
    while (j <= 9) {
    productOdd*=j
    j+=2;
    }
};
// while (j <= 9) {
//     productOdd*=j
//     j+=2;
// }
console.log(`ผลรวมเลขคู่ 2-50 = ${sumEven}`);
console.log(`ผลรวมเลขคี่ 1-10 = ${productOdd}`);