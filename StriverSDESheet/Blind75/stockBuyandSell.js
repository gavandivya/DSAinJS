//Stock Buy and Sell | (DP-35)

const arr = [7,1,5,3,6,4];

function buySell(){
    let max = 0;
    let min = arr[0];
    for(let i = 1; i< arr.length;i++){
        let currentProfit = arr[i] - min;
        max = Math.max(max, currentProfit);
        min = Math.min(min, arr[i]);
    }
    return max;
}

console.log(buySell());