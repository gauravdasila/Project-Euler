function powerDigitSum(n) {
    var product = 1;
    for(var i = 1 ; i <= n ; i++) {
        product *= 2;
    } 
    console.log(product);
    var rem, sum = 0;
    while(product != 0) {
        rem = product % 10;
        product = Math.floor(product / 10);
        sum += rem;
    }
    return sum;
}
console.log(powerDigitSum(10));