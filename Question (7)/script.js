function find10001stPrimeNumber(n) {
    var counter = 0;
    for(var i = 1 ; i > 0 ; i++) {
        var flag = 0;
        for(var j = 1 ; j <= i ; j++) {
            if(i % j === 0) {
                flag++;
            }
        }
        if(flag == 2) {
            counter++;
            if(counter == n) return i;
        }
    }
}