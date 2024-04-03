#! /usr/bin/env node

import inquirer from "inquirer";

//computer will generate a random number  
// user input for guessing number
// compare user input from the coputer generated number and show result 

const randomNumber = Math.floor(Math.random()*5 + 1);

const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between (1-5): ",
        },
]);

if(answers.userGuessedNumber === randomNumber ){
    console.log("congratulation! you guess the right number.")
}else{
    console.log("you guess the wrong number.")
}