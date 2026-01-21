// Write your code below
const input = process.argv[2];
if (input >= 101 || input <= -1 || !isNaN(input)) {
    console.log("Invalid input");
} else if (input <= 49) {
    console.log("Grade is F");
} else if (input >= 50 && input <= 59) {
    console.log("Grade is D");
} else if (input >= 60 && input <= 69) {
    console.log("Grade is C");
} else if (input >= 70 && input <= 79) {
    console.log("Grade is B");
} else if (input >= 80 && input <= 100) {
    console.log("Grade is A");
}
