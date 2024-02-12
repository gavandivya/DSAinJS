const p1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("P1 resolved");
  }, 1000);
});

const p2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("P2 resolved");
  }, 2000);
});

const p3 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("P3 resolved");
  }, 3000);
});

Promise.all([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
//output - [ 'P1 resolved', 'P2 resolved', 'P3 resolved' ] in case of all promise gets fulfilled output will be displayed after the max of all time i.e 3secs

//What if any of them fails
const pr1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("P1 resolved");
  }, 2000);
});

const pr2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject("P2 reject");
  }, 1000);
});

const pr3 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("P3 resolved");
  }, 3000);
});

Promise.all([pr1, pr2, pr3])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

//output - P2 reject after 1sec

//Returns 1st rejected promise even it would be taking max or min time(also known as fail fast)

// ------------------------promise.allSettled - It waits for all the promises to be resolved or rejected.----------------------------------------
Promise.allSettled([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

//output (it return array of object with value and status field)
//for all fulfilled - [ { status: 'fulfilled', value: 'P1 resolved' }, { status: 'fulfilled', value: 'P2 resolved' }, { status: 'fulfilled', value: 'P3 resolved' } ]

Promise.allSettled([pr1, pr2, pr3])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

//output - (it return array of object with reason and status field)
//for any of them gets rejected [ { status: 'fulfilled', value: 'P1 resolved' }, { status: 'rejected', reason: 'P2 reject' }, { status: 'fulfilled', value: 'P3 resolved' } ]

// promise.race - It is a race between all promises. Whichever promise settles first that result will be shown whether it is fulfilled or rejected

Promise.race([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

//output - P1 resolved becaz it is fastest of all promises 1sec, 2sec and 3sec

Promise.race([pr1, pr2, pr3])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

//output - P2 reject of all 1sec, 2sec and 3sec

//Promise.any - It returns the first fulfilled promise i.e races between successful promises also known as (SUCCESS SEEKING API)
Promise.any([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

//output - P1 resolved if all success then return fastest of them

Promise.any([pr1, pr2, pr3])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

//output - P3 resolved if any one fails wait for 1st success

//if all fails then
const r1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject("P1 reject");
  }, 2000);
});

const r2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject("P2 reject");
  }, 1000);
});

const r3 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject("P3 reject");
  }, 3000);
});

Promise.any([r1, r2, r3])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

/**
output - ERROR!
[AggregateError: All promises were rejected] {
  [errors]: [ 'P1 reject', 'P2 reject', 'P3 reject' ]
}
 */
