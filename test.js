// const sample = [
//     [1, 0, 1, 1, 0, 0, 0, 0],
//     [1, 0, 1, 1, 0, 0, 0, 0],
//     [1, 0, 1, 0, 1, 0, 0, 0],
//     [1, 1, 0, 1, 0, 0, 0, 0],
//     [0, 1, 1, 1, 0, 0, 0, 0]
// ];


// const islandErrase = (sample) =>{
//     const rows = sample.length
//     const cols = sample[0].length
    
//     console.log(rows);
//     console.log(cols);

//     for(let i = 0, )
// }
 
// islandErrase(sample)




const eraseIsland = (sample) => {
    const rows = sample.length;
    const cols = sample[0].length;
    console.log(rows);
    console.log(cols);
    
    const markConnectedToBorder = (i, j) => {
        if (i < 0 || j < 0 || i >= rows || j >= cols || sample[i][j] !== 1) return;

        // Mark the current cell as 2 (to indicate it's connected to the border)
        sample[i][j] = 2;

        // Recursively mark all neighboring 1's
        markConnectedToBorder(i - 1, j); // Up
        markConnectedToBorder(i + 1, j); // Down
        markConnectedToBorder(i, j - 1); // Left
        markConnectedToBorder(i, j + 1); // Right
    };

    // Step 1: Traverse the border and mark all 1's connected to the border
    for (let i = 0; i < rows; i++) {
        if (sample[i][0] === 1) markConnectedToBorder(i, 0); // Left border
        if (sample[i][cols - 1] === 1) markConnectedToBorder(i, cols - 1); // Right border
    }

    for (let j = 0; j < cols; j++) {
        if (sample[0][j] === 1) markConnectedToBorder(0, j); // Top border
        if (sample[rows - 1][j] === 1) markConnectedToBorder(rows - 1, j); // Bottom border
    }

    // // Step 2: Traverse the grid and erase all unmarked 1's (i.e., islands)
    // for (let i = 0; i < rows; i++) {
    //     for (let j = 0; j < cols; j++) {
    //         if (sample[i][j] === 1) {
    //             sample[i][j] = 0; // Erase isolated island
    //         } else if (sample[i][j] === 2) {
    //             sample[i][j] = 1; // Restore border-connected 1's
    //         }
    //     }
    // }

    return sample;
};

// Example usage:
const sample = [
    [1, 0, 1, 1, 0, 0, 0, 0],
    [1, 0, 1, 1, 0, 0, 0, 0],
    [1, 0, 1, 0, 1, 0, 0, 0],
    [1, 1, 0, 1, 0, 0, 0, 0],
    [0, 1, 1, 1, 0, 0, 0, 0]
];

console.log(eraseIsland(sample));
