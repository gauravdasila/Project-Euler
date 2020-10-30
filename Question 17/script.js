var th = ['hundred','thousand','million', 'billion','trillion'];
var dg = ['zero','one','two','three','four', 'five','six','seven','eight','nine'];
var tn = ['eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen'];
var tw = ['ten','twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];


function getNumberLength(num) {
    var rem = 0 ;
    while(num != 0) {
        rem = num % 10;
        num = parseInt(num / 10);
        console.log(rem)
    }
}


function changeIntoWord(num) {
    var n = num.toString().split('');
    if(n.length == 1) {
        return dg[n];
    } else if(n.length == 2) {
        return tn[n];
    }
}
changeIntoWord(258);