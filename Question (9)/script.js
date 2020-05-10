function pythagoreanTriplet(n) {
    var m = Math.ceil(n / 3);
    for(var a = 1 ; a <= n; a++ ) {
        for(var b = 1 ; b <= n ; b++ ) {
            for(var c = 1 ; c <= n ; c++ ) {
                var lhs = a * a + b * b;
                var rhs = c * c; 
                if( rhs == lhs  && a + b + c === n) {
                    return a * b * c;
                }
            } 
        }
    }
}