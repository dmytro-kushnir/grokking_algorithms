function sum2(arr: number[]): number {
    let total = 0;
    arr.forEach(number => {
        total += number;
    });

    return total;
}

console.log(sum2([1, 2, 3, 4]));