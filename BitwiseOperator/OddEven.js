const isOdd = (n) => {
    return (n & 1) == 1; //using bitwise operator
}

console.log(isOdd(7) ? "Odd" : "Even");
//As we know bitwise AND Operation of the Number by 1 will be 1, If it is odd because the last bit will be already set. 
//Otherwise, it will give 0 as output.
