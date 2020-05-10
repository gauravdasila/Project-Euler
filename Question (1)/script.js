function multipleSum(max) {
    var sum = 0;
    for(var i = 0 ; i < max ; i++) {
        if( i % 3 === 0 || i % 5 ==0 ) {
            sum += i;
        } 
    }
    return sum;
}

/* Time Complexity O(n) */

// Anonymous solution 

function multipleSumA(max) {
    var n1 = max / 3;
    var sumThreeMultiplier = 3 * (n1 + 1 ) * (n1 / 2);
    var n2 = Math.floor(max / 5);
    var sumFiveMultiplier = 5 * (n2 + 1) * (n2 / 2);
    var n3 = Math.floor(max / 15);
    var sumLcmMultiplier = 15 * (n3 + 1 ) * (n3 / 2);
    return sumThreeMultiplier + sumFiveMultiplier - sumLcmMultiplier;
}