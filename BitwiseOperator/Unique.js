let arr = [2, 3, 3, 4, 2, 6, 4] //everything thinf duplucate only one unique element
const removeUnique = () => {
    let unique = arr[0]
    for (let i = 1; i < arr.length; i++) {
        unique ^= arr[i];
    }
    return unique;
}

console.log(removeUnique());