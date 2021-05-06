// Implement a simple version of Promise.all.
// This function should accept an array of promises and return an array of resolved values.
// If any of the promises are rejected, the function should catch them.

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 5000, 'foo');
});
// const promise4 = Promise.reject("err");


const all = async () => {
        try {
            let res = await Promise.all([promise1,promise2, promise3]);
            console.log(res);
        }
        catch (err) {
            console.log(err)
        }
}

console.log(all())

