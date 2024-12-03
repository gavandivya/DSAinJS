var maxScore = function (cardPoints, k) {
  let lsum = 0;
  let rsum = 0;
  let maxSum = 0;

  let rIndex = cardPoints.length - 1;
  for (let i = 0; i < k; i++) {
    lsum += cardPoints[i];
  }

  maxSum = lsum;

  for (let i = k - 1; i >= 0; i--) {
    lsum = lsum - cardPoints[i];

    rsum = rsum + cardPoints[rIndex];

    rIndex = rIndex - 1;

    maxSum = Math.max(maxSum, lsum + rsum);
  }
  return maxSum;
};

let arr = [6, 2, 3, 4, 7, 2, 1, 7, 1];
let k = 4;

maxScore(arr, k);
