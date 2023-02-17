const arr = [71, -23, 83, 890, 94, 52, 76, 33, 97];
const target = 52;

function LinearSearch() {
    let isPresent = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            console.log("Element Found at " + i + "th position");
            isPresent = true;
        }
    }

    if (!isPresent) {
        console.log("Element Not Present in Array");
    }
}

LinearSearch();