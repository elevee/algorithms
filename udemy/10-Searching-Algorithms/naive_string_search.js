function naiveStringSearch(str, pattern){
    matchCount = 0;
    for(let i=0; i<str.length; i++){
        // console.log(str[i]);
        for(let j=0; j<pattern.length; j++){
            console.log(str[i+j], pattern[j]);
            if(str[i+j] !== pattern[j]){
                console.log("Break!");
                break;
            }
            if(j === pattern.length - 1){
                console.log("Found one!");
                matchCount++;
            } 
        }
    }
    return matchCount;
}

console.log(naiveStringSearch("hahawhatsuphaha", "haha"));