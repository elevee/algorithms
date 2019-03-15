function addBorder(picture: string[]): string[] {
    const frame = "*",
          output = [],
          picWidth = picture[0].length,
          totalWidth = picWidth + 2;
    
    output.push(frame.repeat(totalWidth));
    for(row of picture){
        output.push(frame.concat(row,frame));
    }
    output.push(frame.repeat(totalWidth));
    return output;
}

console.log(addBorder(["abc", "ded"]));
console.log(addBorder(["abcde", "deded"]));