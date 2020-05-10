function primeNumberSum(n) {
    var sum = 2, flag; 
    for(var i = 2 ; i <= n ; i++ ) {
        flag = 0;
        for(var j = 2 ; j <= Math.ceil(Math.sqrt(i)) ; j++) {
            if(i % j === 0) {
                flag++;
            }
        }
        if(flag == 0) {
            sum += i;
        }
    }
    return sum;
}  