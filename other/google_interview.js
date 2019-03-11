/* from https://www.youtube.com/watch?v=10WnvBk9sZc
Write a function that takes two strings, s1 and s2
and returns the longest common subsequence of s1 and s2

"ABAZDC", "BACBAD" => "ABAD"
"AGGTAB", "GXTXAYB" => "GTAB"
"aaaa", "aa" => "aa"

*/

function longestCommonSubsequence(str1, str2){
    let longest = "", working = "", str1_i = 0, str2_i = 0;
    
    //check for letter in str2
    // if present in str2, add to working string, break out of loop and continue with next letter
    // at end of loop, if working string is longer than longest string, replace it.
    for(let i=0; i<str1.length; i++){ //loop through str1
        let letter = str1[i];
        console.log(letter);
        for(let j=str2_i; j<str2.length; j++){
            // console.log(`____${str2[i]}`);
            if(letter === str2[j]){
                console.log(`___letter ${str2[i]} found in string 2`);
                working += letter;
                // str1_i = i;
                console.log(`___working is now ${working}`);
                str2_i = j;
                // break;
            }
            if (j === str2.length-1){ //if we're on the last element, reset to 0
                str2_i = 0;
            }
        }
    }
    console.log(`___working (${working}) longer than longest (${longest})? ${working.length > longest.length ? "Yes" : "No"}`);
    longest = working.length > longest.length ? working : longest
    // console.log(`working is ${working}`);
    // console.log(`longest is ${longest}`);
    return longest;
}

console.log(longestCommonSubsequence("ABAZDC", "BACBAD"));
console.log(longestCommonSubsequence("AGGTAB", "GXTXAYB"));
console.log(longestCommonSubsequence("aaaa", "aa"));
