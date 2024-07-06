import inquirer from "inquirer";
let user = await inquirer.prompt([
    {
        name: "name",
        type: 'input',
        message: "Please enter your name"
    },
    {
        name: "age",
        type: 'number',
        message: "Enter your age",
    },
    {
        name: "Hobby",
        type: "list",
        message: "Enter your hobby?",
        choices: ["Coding", "Photography", "Playing"],
        default: "Nothing",
    },
    {
        name: "Email",
        type: "checkbox",
        message: "Enter your valid email",
        choices: ["asfa123@gmail.com", "asfa134@gmail.com", "asifaqasim2334@gmail.com"],
        default: "Nothing"
    },
    {
        name: "Name",
        type: "editor",
        message: "Please provide your input",
    }
]);
console.log(user);
