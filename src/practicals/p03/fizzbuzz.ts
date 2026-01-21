// Write your code below
const s = process.argv[2];
if ( s <= -1 || !isNaN(s)) {
    console.log("");
}
for (let i = 1; i <= s; i ++) {
if(s % 3 == 0) {
    console.log("Fizz");
} else if (s % 5 == 0) {
    console.log("Buzz");

} else if (s % 5 == 0 && s % 3 == 0) {
    console.log("FizzBuzz");
}
}