function digitDegree(n: number): number {
   let result = n.toString(), //convert to string to check length of digits
       counter = 0;
    // console.log(result.length !== 1);
   while(result.length !== 1){
     result = result.split('').reduce(function(acc, cur) { return parseInt(acc) + parseInt(cur) }, 0).toString();
     counter++;
   }
   return counter;
}
console.log(digitDegree(5));
console.log(digitDegree(10));
console.log(digitDegree(91));