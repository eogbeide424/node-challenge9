// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const renderLicenseBadge =require('./asset/generateMarkdown');


inquirer
  .prompt([
    {
        name: "fullName",
        message: "Enter full name"
    }, 
    {
        name: "date",
        message: "enter the date"
    }, 
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
        message: 'choose your license',
        name: "license",
        choices:[`MIT`,`Boost Software`,`apache`],
    }, 
        
    {
        type: 'checkbox',
        name: 'badgeColor',
        message: 'pick a color',
        choices:['red','blue','yellowgreen','green'],
   }, 
]).then((responce) => {
    const readMePage= generateReadMe(responce);
    if(responce.license !== null) {
        renderLicenseSection(responce.license)
    }else {
        return null;
    }

    fs.writeFile('README.md', readMePage, (err) =>
    err ? console.log(err) : console.log('sucess')
    );
})
const generateReadMe= (responce) => 
`
# ${responce.projectTitle}

## Description

 ${responce.description}


## Table of Contents (Optional)

If your README is very long, add a table of contents to make it easy for users to find what they need.

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


## Installation

${responce.installations}


## Usage 

${responce.usage}



## Credits

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.


## License

${responce.license}


---

🏆 The sections listed above are the minimum for a good README, but your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

${responce.badgeColor}

## Features

If your project has a lot of features, consider adding a heading called "Features" and listing them there.

## Contributing

If you created an application or package and would like other developers to contribute it, you will want to add guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own.

## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them.

---

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
`

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
