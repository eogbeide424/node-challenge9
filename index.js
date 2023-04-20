// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

inquirer.createPromptModule([
   {
    name: "projectTitle",
    message: "what is your project titled"
   }, 
   {
    name: "description",
    message: "write a good description of your project"
   }, 
   {
    name: "installations",
    message:"how do we install your app"
   }, 
   {
    name: "usage",
    message: "write usage information here",
   }, 
   {
    type: 'checkbox',
    name: "license",
    message: 'choose your license',
    choice:[]
   }, 
   {
    name: 
    message:
   }, 
])


// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
