function incrementalBackups(lastBackupTime: number, changes: number[][]): number[] {
    let toBackup = changes.reduce((acc, cur) => {
        if(cur[0] > lastBackupTime) acc.push(cur[1]);
        return acc;
    }, [])
    let uniq = Array.from(new Set(toBackup))]; // a Set by default enforces only unique values
    return uniq.sort(); //sorts output
}

console.log(incrementalBackups(
    461620205, [
        [461620203, 1], 
        [461620204, 2], 
        [461620205, 6],
        [461620206, 5], 
        [461620207, 3], 
        [461620207, 5], 
        [461620208, 1]
    ])
);