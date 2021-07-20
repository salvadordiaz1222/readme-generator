const fs = require("fs");
const inquirer = require("inquirer");
const { promisify } = require("util");
const writeFileAsync = promisify(fs.writeFile);

const {generateMD} = require("./template.js");
const {textInput} = require("./questions-Readme.js");


const getInput = () => {
    return inquirer.prompt(textInput)
        .then(answers => {
            console.log(answers);
            return generateMD(answers);
        })
        .then(readme => writeFileAsync("./README1.md", readme))
        .catch(err => console.log(err))
        .finally(() => console.log("File created"));
}

getInput();