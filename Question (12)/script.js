function highestTriangularNumber() {
    var triangularNumber = 0, flag;
    for(var i = 1 ; i > 0 ; i++ ) {
        triangularNumber = i * (i + 1) / 2;
        flag = 1; 
        for(var k = 1; k <= Math.ceil(triangularNumber / 2) ; k++) {
            if(triangularNumber % k === 0 ) {
                flag++;
            }
        }
        if(flag > 500) {
            return triangularNumber;
        }
    }
}