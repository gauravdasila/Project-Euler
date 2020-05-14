function latticePath(gridX, gridY) {
   var totalStep = gridX + gridY;
   var stepsToTake = totalStep - gridY;
   var totalPath = findFactorial(totalStep) / (findFactorial(gridX) * findFactorial(stepsToTake));
   return totalPath;
}

function findFactorial(num) {
   var product = 1;
   for(var i = 1 ; i <= num ; i++ ) {
      product *= i;
   }
   return product;
}

latticePath(20, 20);