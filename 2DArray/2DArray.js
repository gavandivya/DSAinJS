const twoDarray = [[1,2,3],
[4,5,6],
[7,8,9]];

// Printing 2D Array
const twoDArray = () => {

    for (let i = 0; i < twoDarray.length; i++) {
        for (let j = 0; j < twoDarray[i].length; j++) {
            console.log('[' + i + ',' + j + '] = ' + twoDarray[i][j]);
        }
    }
}

twoDArray(twoDarray);

//linear search in 2DArray
const linearSearchIntwoDArray = (target) => {

    for (let i = 0; i < twoDarray.length; i++) {
        for (let j = 0; j < twoDarray[i].length; j++) {
            if(twoDarray[i][j] == target)
            // console.log('[' + i + ',' + j + '] = ' + twoDarray[i][j]);
            return `Found at ${i} ${j}`;
        }
    }
    return "Not Found"
}

console.log(linearSearchIntwoDArray(8));

//linear search in 2DArray
const maxIntwoDArray = () => {
    let max = 0;
    for (let i = 0; i < twoDarray.length; i++) {
        for (let j = 0; j < twoDarray[i].length; j++) {
            if(twoDarray[i][j] > max){
                max = twoDarray[i][j]
            }
        }
    }
    return `Max is ${max}`;
}

console.log(maxIntwoDArray());