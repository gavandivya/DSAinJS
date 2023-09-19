// Print all number pairs
const pairs = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j]);
    }
  }
};

console.log("Pairs are")
pairs([1, 2, 3, 4]);

// Print unique pairs
const uniqPairs = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      console.log(array[i], array[j]);
    }
  }
};

console.log("Unique pairs are")
uniqPairs([1, 2, 3, 4]);


// Print unique pairs
const twoSum = (array,target) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
            if(array[i]+array[j] == target){
                console.log("Pair is ",array[i],array[j]," which sums to ",target)
            }
            
        }        
    }
}

twoSum([1,2,3,4,5],4);

//Print same pair
const sameNoPair = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if(array[i] === array[j]){
                console.log(array[i],array[j]);
            }
        }
    }
}

console.log("Same No pairs are")
sameNoPair([1,2,3]);

//Print triplets
const triplet = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            for (let k = 0; k < array.length; k++) {
                console.log(array[i],array[j],array[k])
            }
        }
    }
}

//triplet([1,2,3]);


//Print same triplet
const sameNoTriplet = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            for (let k = 0; k < array.length; k++) {
                if(array[i] === array[j] && array[j]=== array[k]){
                    console.log(array[i],array[j],array[k]);
                }
            }
            
        }
    }
}

console.log("Same No Triplet are")
sameNoTriplet([1,2,3,4]);
