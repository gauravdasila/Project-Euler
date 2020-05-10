function checkPalindrome(n) {
    var num = n ,remainder, rev = 0;
    while( n > 0 ) {
        remainder = n % 10;
        n = Math.floor(n / 10);
        rev = rev * 10 + remainder;
    }
    if(rev == num) {
        return true;
    } else {
        return false;
    }
}

function largest_palindrome_product() {
    var maxPalindrome = 0;
    for(var i = 100 ; i < 1000 ; i++) {
        for(var j = 100 ; j < 1000 ; j++) {
            product = i * j;
            if(checkPalindrome(product)) {
                if(maxPalindrome < product) maxPalindrome = product;
            }
        }
    }
    return maxPalindrome;
}