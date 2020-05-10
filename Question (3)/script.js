function primeFactor(n) {
    for(var i = 2; i <= n ; i++) {
        if( n % i === 0) {
            n /= i;
            if(n == 1) return i;
            i--;
        } 
    }   
}