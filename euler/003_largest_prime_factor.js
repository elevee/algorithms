/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

/* 
Prime Factors algorithm:
Divide by smallest possible prime number (2).

Do this as many times as possible. When doing this doesn't work anymore (divides into remaining number evenly), add 1 to divisor.

Divisor is now 3. Keep going until it divides evenly.

List all the factors like 2 x 2 x 5 for 20, or 2 X 2 X 3 * 3 * 5 for 180, etc.

*/


function isPrime(n){
    for(let i=2; i<n; i++){
        if(n % i === 0){
            return false;
        }
    }
    return n > 1;
}


function highestPrimeDivisor(limit){
    let divisor = 2,
        remaining = limit;
    
    while(remaining > 1){ // our goal is to get to 1 by dividing factors into our number. We're done when it hits 1.
        if(isPrime(divisor) && remaining % divisor === 0){ // for each possible prime factor, check to see if it divides evenly into remaining
            remaining /= divisor; // remaining = remaining / divisor
        } else {
            divisor++;
        }
        // we don't iterate divisor here because if we can keep dividing by the same divisor, we want to do so (2 X 2 X 2 X 5)
    }
    return divisor;
}

module.exports.highestPrimeDivisor  = highestPrimeDivisor 
module.exports.isPrime              = isPrime