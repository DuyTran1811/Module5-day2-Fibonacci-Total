function checFibonacci(num: number):any {
    if (num <= 2) {
        return 1;
    }
    return checFibonacci(num - 1) + checFibonacci(num - 2);
}
let sum = 0;
for(let i = 2; i < 10; i++){
    console.log(checFibonacci(i));
    if (checFibonacci(i)){
        sum += checFibonacci(i);
    }
}
console.log("Tổng Giá Trị Dãy Số Fibonacci "+ sum);