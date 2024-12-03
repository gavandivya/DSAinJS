const arr = [10, 3, 5, 6, 2];

//TC - O(N2), SC- O(1)

function productExceptSelf(nums) {
    let prod = new Array(nums.length).fill(1);
    for(let i = 0;i<nums.length;i++){
        for(let j = 0;j<nums.length;j++){
            if(i!==j){
                prod[i] = nums[j]*prod[i];
            }
        }
    }
    return prod;
};

console.log(productExceptSelf(arr));