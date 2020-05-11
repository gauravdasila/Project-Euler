function longestCollatzSequence(num) {
    var n, largestSequence = 1, largestNumber;
    for(var i = 2; i <= num ; i++ ) {
        n = i;
        sequence = 1;
        while(n != 1) {
            if(n % 2 === 0) {
                n = n / 2;
            } else {
                n = 3*n + 1;
            }
            sequence++;
        }
        if(sequence > largestSequence) {
            largestSequence = sequence;
            largestNumber = i;
        }
    }
    return largestNumber;
}