function smallestEvenlyDivisibleNum() {
    for(var i = 21 ; i > 0; i++) {
        var flag = 0;
        for(var j = 1 ; j <= 20 ; j++) {
            if(i % j === 0) {
                flag++;
            }
        }
        if(flag == 20) {
            return i;
        }
    }
}