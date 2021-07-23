const Choices = require("inquirer/lib/objects/choices");

module.exports = {
    textInput: [
        {
            type: "input",
            name: "title",
            message: "Please enter your project title?"
        },
        {
            type: "input",
            name: "description",
            message: "Provide a short description explaining the what, why, and how of your project."
        },
        {
            type: "input",
            name: "installation",
            message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running."
        },
        {
            type: "input",
            name: "usage",
            message: "Provide instructions and examples for use."
        },
        {
            type: "input",
            name: "image",
            message: "Type the file path of your image or gif"
        },
        {
            type: "checkbox",
            name: "license",
            message: "Select the licence you are using",
            choices: ["MIT", "IPL", "Apache", "MPL 2.0"]
        },
        {
            type: "input",
            name: "contribute",
            message: "Type the guidelines on how others can contribute to your application"
        },
        {
            type: "input",
            name: "test",
            message: "Write tests for your application and provide an example on how to run them."
        },
        {
            type: "input",
            name: "github",
            message: "What is your GitHub URL?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?"
        }
    ]
}