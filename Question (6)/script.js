function sumSquareDifference(n) {
    var sumOfSquare = 0, squareOfSum = 0, square, sum = 0;
    for(var i = 1 ; i <= n ; i++ ) {
        square = i * i;
        sumOfSquare += square;
        sum += i;
    }
    squareOfSum = sum * sum;
    return squareOfSum - sumOfSquare;
}
