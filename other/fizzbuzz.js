//Write a program that prints the numbers from 1 to 100. 
//But for multiples of three print “Fizz” instead of the 
//number and for the multiples of five print “Buzz”. For //numbers which are multiples of both three and five print 
//“FizzBuzz”.

// First Go
for(let i=1; i<101; i++){
    let output = "";
    if(i % 3 === 0 || i % 5 === 0){
      if (i % 3 === 0) output += "Fizz";
      if (i % 5 === 0) output += "Buzz"; 
    } else {
      output = i;
    }
    console.log(output);
}

// Simplification: make the modulo 15, use else if structure
// for (var i=1; i < 101; i++){
//     if (i % 15 == 0) console.log("FizzBuzz");
//     else if (i % 3 == 0) console.log("Fizz");
//     else if (i % 5 == 0) console.log("Buzz");
//     else console.log(i);
// }


// Shortest solution
// for(let i=0;i<100;)console.log((++i%3?'':'fizz')+(i%5?'':'buzz')||i)