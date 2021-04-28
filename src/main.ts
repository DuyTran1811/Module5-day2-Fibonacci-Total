function isPrime(number: number): boolean {
    let isPrime = true;
    if (number < 2) {
        isPrime = false;
    } else if (number > 2) {
        for (let i = 2; i < Math.sqrt(i); i++) {
            if (i % number == 0) {
                isPrime = false;
                break;
            }
        }
    }
    return isPrime;
}

let array = [1, 54, 647, 6, 2435, 134, 12, 45, 374, 58, 78, 452, 34, 143, 65, 657, 57, 246, 2345, 2657, 13, 4, 7, 9, 6879, 5, 457, 7465, 7657];
let sum = 0;
for (const number of array) {
    if (isPrime(number)) {
        sum += number;
    }
}
console.log("Tổng các số nguyên tố trong mảng trên là: " + sum);