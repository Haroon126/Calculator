import inquirer from "inquirer";
const answer = await inquirer.prompt([{
        message: "enter your first Number",
        type: "number",
        name: "firstNumber"
    },
    { message: "enter your second Number",
        type: "number",
        name: "secondNumber"
    },
    { message: "Select your choice what you want",
        type: "list",
        name: "operators",
        choices: ["addition", "subraction", "multiplication", "division"]
    },
]);
if (answer.operators === "addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operators === "subraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operators === "multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operators === "division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Please enter values");
}
