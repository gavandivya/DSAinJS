
arr1 = [1, 1, 2, 3, 4, 4, 5, 7, 9];
arr2 = [2, 3, 4, 4, 5, 6, 8, 9];


//way1 using two pinter technique
const intersection = () => {
    let i = 0;
    let j = 0;
    let intersection = [];
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            i++;
        }
        else if (arr1[i] > arr2[j]) {
            j++;
        }
        else {
            intersection.push(arr1[i]);
            i++;
            j++;
        }
    }
    return intersection;
}

console.log(intersection());
//Time complexity is - O(n1+n2)   = O(N)
//Space complexity is - O(1)

//-------------------------------------------------------------------------
//way2 using brute force approach
//take one element and compare it with the other element and see if its matching

arr1 = [1, 1, 2, 3, 4, 4, 5, 7, 9];
arr2 = [2, 3, 4, 4, 5, 6, 8, 9];
const inter = () => {
    let visited = [];
    let interArray = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] == arr2[j] || visited[j] == 0) {
                interArray.push(arr2[j]);
                visited[j] = 1;
                break;
            }
            else if (arr2[j] > arr1[i]) {
                break;
            }
        }
    }
    return interArray;

}

console.log(inter());