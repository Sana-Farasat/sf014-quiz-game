#! /usr/bin/env node 
//importing modules
import inquirer from "inquirer";
import chalk from "chalk";
//storing rgb in variable
const shockingPink = chalk.rgb(252, 15, 192);
const shinySkyBlue = chalk.rgb(135, 206, 250);
//declaring variable for scoring
let score = 0;
console.log(shockingPink('\n\n\t\t' + '<<==>>'.repeat(7)));
console.log(shockingPink('\n\n\t\t' + '<<==>>'.repeat(7)));
console.log(shockingPink.bold('\t\t WELLCOME TO CLI BASED TYPESCRIPT QUIZ'));
console.log(shockingPink('\t\t' + '<<==>>'.repeat(7)));
console.log(shockingPink('\n\n\t\t' + '<<==>>'.repeat(7)));
const mainquestion = await inquirer.prompt([
    {
        name: 'ask',
        type: 'list',
        message: chalk.blueBright('\n\nWhich typescript function quiz you want to attempt?'),
        choices: ['Variables', 'Arrays', 'Loops', 'Objects']
    }
]);
if (mainquestion.ask == 'Variables') {
    console.log(shockingPink.underline('\n\n\t\t\tVARIABLE QUIZ'));
    console.log(chalk.yellowBright('\n\n\t\t Each question carries 20 marks!'));
    const variable1 = await inquirer.prompt([
        {
            name: 'q1',
            type: 'list',
            message: chalk.blueBright('\n\nWhat is a variable in programming?'),
            choices: [
                'A constant value',
                'A placeholder for storing data',
                'A mathematical operation',
                'A conditional statement'
            ]
        },
    ]);
    switch (variable1.q1) {
        case 'A placeholder for storing data':
            console.log(chalk.yellowBright('\n\nCorrect!'));
            score += 20;
            break;
        default:
            console.log(chalk.yellowBright('\n\nIncorrect'));
            break;
    }
    const variable2 = await inquirer.prompt([
        {
            name: 'q2',
            type: 'list',
            message: chalk.blueBright('\n\nWhich of the following variable declarations allows reassignment in TypeScript?'),
            choices: [
                'const',
                'let',
                'var',
                'All of the above'
            ]
        },
    ]);
    switch (variable2.q2) {
        case 'let':
            console.log(chalk.yellowBright('\n\nCorrect!'));
            score += 20;
            break;
        default:
            console.log(chalk.yellowBright('\n\nIncorrect'));
            break;
    }
    const variable3 = await inquirer.prompt([
        {
            name: 'q3',
            type: 'list',
            message: chalk.blueBright('\n\nWhat is the inferred type of the variable "x" in TypeScript?\n\tlet x = 5;'),
            choices: [
                'number',
                'string',
                'boolean',
                'any'
            ]
        },
    ]);
    switch (variable3.q3) {
        case 'number':
            console.log(chalk.yellowBright('\n\nCorrect!'));
            score += 20;
            break;
        default:
            console.log(chalk.yellowBright('\n\nIncorrect'));
            break;
    }
    const variable4 = await inquirer.prompt([
        {
            name: 'q4',
            type: 'list',
            message: chalk.blueBright('\n\nWhat is the value of the variable "x" after executing the following code?\n\tx = 5\n\tx = x + 3'),
            choices: [
                '5',
                '8',
                '3',
                '15'
            ]
        },
    ]);
    switch (variable4.q4) {
        case '8':
            console.log(chalk.yellowBright('\n\nCorrect!'));
            score += 20;
            break;
        default:
            console.log(chalk.yellowBright('\n\nIncorrect'));
            break;
    }
    const variable5 = await inquirer.prompt([
        {
            name: 'q5',
            type: 'list',
            message: chalk.blueBright('\n\nHow many reserved keywords are there to declare variables in typescript?'),
            choices: [
                '3',
                '6',
                '4',
                '1'
            ]
        }
    ]);
    switch (variable5.q5) {
        case '3':
            console.log(chalk.yellowBright('\n\nCorrect!'));
            score += 20;
            break;
        default:
            console.log(chalk.yellowBright('\n\nIncorrect'));
            break;
    }
    console.log(shockingPink.bold.underline(`\n\n\n\t\t\tYour quiz score is:${score}`));
    console.log(shockingPink('\n\n\t\t' + '<<==>>'.repeat(7)));
    console.log(shockingPink('\n\n\t\t' + '<<==>>'.repeat(7)));
    console.log(shockingPink.bold('\t\t\t THANKS TO ATTEMPT QUIZ'));
    console.log(shockingPink('\t\t' + '<<==>>'.repeat(7)));
    console.log(shockingPink('\n\n\t\t' + '<<==>>'.repeat(7)));
}
else if (mainquestion.ask == 'Arrays') {
    console.log(shockingPink.underline('\n\n\t\t\tARRAY QUIZ'));
    console.log(chalk.yellowBright('\n\n\t\tEach question carries 20 marks!'));
    const array1 = await inquirer.prompt([
        {
            name: 'q1',
            type: 'list',
            message: chalk.blueBright('\n\nHow do you declare an array in TypeScript?'),
            choices: [
                'let myArray = []',
                ' let myArray = {}',
                'let myArray: array = []',
                'let myArray: Array = []'
            ]
        },
    ]);
    switch (array1.q1) {
        case 'let myArray = []':
            console.log(chalk.yellowBright('\n\nCorrect!'));
            score += 20;
            break;
        default:
            console.log(chalk.yellowBright('\n\nIncorrect'));
            break;
    }
    const array2 = await inquirer.prompt([
        {
            name: 'q2',
            type: 'list',
            message: chalk.blueBright('\n\nWhich method is used to add elements to the end of an array in TypeScript?'),
            choices: [
                'push()',
                'add()',
                'append()',
                'insert()'
            ]
        },
    ]);
    switch (array2.q2) {
        case 'push()':
            console.log(chalk.yellowBright('\n\nCorrect!'));
            score += 20;
            break;
        default:
            console.log(chalk.yellowBright('\n\nIncorrect'));
            break;
    }
    const array3 = await inquirer.prompt([
        {
            name: 'q3',
            type: 'list',
            message: chalk.blueBright('\n\nHow do you access the first element of an array named "myArray" in TypeScript?'),
            choices: [
                'myArray[0]',
                'myArray.first()',
                'myArray.get(0)',
                'myArray.firstElement()'
            ]
        },
    ]);
    switch (array3.q3) {
        case 'myArray[0]':
            console.log(chalk.yellowBright('\n\nCorrect!'));
            score += 20;
            break;
        default:
            console.log(chalk.yellowBright('\n\nIncorrect'));
            break;
    }
    const array4 = await inquirer.prompt([
        {
            name: 'q4',
            type: 'list',
            message: chalk.blueBright('\n\nWhat method is used to remove the last element from an array in TypeScript?'),
            choices: [
                'remove()',
                'deleteLast()',
                'splice()',
                'pop()',
            ]
        },
    ]);
    switch (array4.q4) {
        case 'pop()':
            console.log(chalk.yellowBright('\n\nCorrect!'));
            score += 20;
            break;
        default:
            console.log(chalk.yellowBright('\n\nIncorrect'));
            break;
    }
    const array5 = await inquirer.prompt([
        {
            name: 'q5',
            type: 'list',
            message: chalk.blueBright('\n\nWhich method is used to determine the length of an array in TypeScript?'),
            choices: [
                'length()',
                'count()',
                'size()',
                'length'
            ]
        }
    ]);
    switch (array5.q5) {
        case 'length':
            (chalk.yellowBright('\n\nCorrect!'));
            score += 20;
            break;
        default:
            console.log(chalk.yellowBright('\n\nIncorrect'));
            break;
    }
    console.log(shockingPink.underline(`\n\n\n\t\t\tYour quiz score is:${score}`));
    console.log(shockingPink('\n\n\t\t' + '<<==>>'.repeat(7)));
    console.log(shockingPink('\n\n\t\t' + '<<==>>'.repeat(7)));
    console.log(shockingPink.bold('\t\t\t THANKS TO ATTEMPT QUIZ'));
    console.log(shockingPink('\t\t' + '<<==>>'.repeat(7)));
    console.log(shockingPink('\n\n\t\t' + '<<==>>'.repeat(7)));
}
else if (mainquestion.ask == 'Loops') {
    console.log(shockingPink('\n\n\t\t\tLOOP QUIZ'));
    console.log(chalk.yellowBright('\n\n\t\tEach question carries 20 marks!'));
    const loop1 = await inquirer.prompt([
        {
            name: 'q1',
            type: 'list',
            message: chalk.blueBright('\n\nWhich loop is used to execute a block of code repeatedly as long as a condition is true?'),
            choices: [
                'for loop',
                'while loop',
                'do-while loop',
                'if-else loop'
            ]
        },
    ]);
    switch (loop1.q1) {
        case 'while loop':
            console.log(chalk.yellowBright('\n\nCorrect!'));
            score += 20;
            break;
        default:
            console.log(chalk.yellowBright('\n\nIncorrect'));
            break;
    }
    const loop2 = await inquirer.prompt([
        {
            name: 'q2',
            type: 'list',
            message: chalk.blueBright('\n\nWhich loop is primarily used when the number of iterations is known?'),
            choices: [
                'for loop',
                'while loop',
                'do-while loop',
                'switch loop'
            ]
        },
    ]);
    switch (loop2.q2) {
        case 'for loop':
            console.log(chalk.yellowBright('\n\nCorrect!'));
            score += 20;
            break;
        default:
            console.log(chalk.yellowBright('\n\nIncorrect'));
            break;
    }
    const loop3 = await inquirer.prompt([
        {
            name: 'q3',
            type: 'list',
            message: chalk.blueBright('\n\nIn a for loop, what is defined inside the parentheses after the keyword "for"?'),
            choices: [
                'Initial expression',
                'Condition',
                'Increment expression',
                'All of the above'
            ]
        },
    ]);
    switch (loop3.q3) {
        case 'All of the above':
            console.log(chalk.yellowBright('\n\nCorrect!'));
            score += 20;
            break;
        default:
            console.log(chalk.yellowBright('\n\nIncorrect'));
            break;
    }
    const loop4 = await inquirer.prompt([
        {
            name: 'q4',
            type: 'list',
            message: chalk.blueBright('\n\nHow do you exit a loop prematurely in TypeScript?'),
            choices: [
                'break statement',
                'continue statement',
                'exit statement',
                'stop statement'
            ]
        },
    ]);
    switch (loop4.q4) {
        case 'break statement':
            console.log(chalk.yellowBright('\n\nCorrect!'));
            score += 20;
            break;
        default:
            console.log(chalk.yellowBright('\n\nIncorrect'));
            break;
    }
    const loop5 = await inquirer.prompt([
        {
            name: 'q5',
            type: 'list',
            message: chalk.blueBright('\n\nWhat statement is used to skip the rest of the code block and continue to the next iteration of the loop?'),
            choices: [
                'break statement',
                'return statement',
                'skip statement',
                'continue statement'
            ]
        }
    ]);
    switch (loop5.q5) {
        case 'continue statement':
            console.log(chalk.yellowBright('\n\nCorrect!'));
            score += 20;
            break;
        default:
            console.log(chalk.yellowBright('\n\nIncorrect'));
            break;
    }
    console.log(shockingPink.underline(`\n\n\n\t\t\tYour quiz score is:${score}`));
    console.log(shockingPink('\n\n\t\t' + '<<==>>'.repeat(7)));
    console.log(shockingPink('\n\n\t\t' + '<<==>>'.repeat(7)));
    console.log(shockingPink.bold('\t\t\t THANKS TO ATTEMPT QUIZ'));
    console.log(shockingPink('\t\t' + '<<==>>'.repeat(7)));
    console.log(shockingPink('\n\n\t\t' + '<<==>>'.repeat(7)));
}
else if (mainquestion.ask == 'Objects') {
    console.log(shockingPink.underline('\n\n\t\t\tOBJECT QUIZ'));
    console.log(chalk.yellowBright('\n\n\t\tEach question carries 20 marks!'));
    const object1 = await inquirer.prompt([
        {
            name: 'q1',
            type: 'list',
            message: chalk.blueBright('\n\nWhich of the following is a valid way to access a property of an object in TypeScript?'),
            choices: [
                'object.property',
                'object[property]',
                'object->property',
                'object::property'
            ]
        },
    ]);
    switch (object1.q1) {
        case 'object[property]':
            console.log(chalk.yellowBright('\n\nCorrect!'));
            score += 20;
            break;
        default:
            console.log(chalk.yellowBright('\n\nIncorrect'));
            break;
    }
    const object2 = await inquirer.prompt([
        {
            name: 'q2',
            type: 'list',
            message: chalk.blueBright('\n\nHow do you add a new property to an existing object in TypeScript?'),
            choices: [
                'using the addProperty() function',
                'By directly assigning a value to a new property',
                'By using the Object.assign() method',
                'By creating a new object and copying properties'
            ]
        },
    ]);
    switch (object2.q2) {
        case 'By using the Object.assign() method':
            console.log(chalk.yellowBright('\n\nCorrect!'));
            score += 20;
            break;
        default:
            console.log(chalk.yellowBright('\n\nIncorrect'));
            break;
    }
    const object3 = await inquirer.prompt([
        {
            name: 'q3',
            type: 'list',
            message: chalk.blueBright('\n\nWhat is an object in TypeScript?'),
            choices: [
                'A data type that represents a collection of properties',
                'A function that returns a value',
                'A loop structure',
                'A conditional statement'
            ]
        },
    ]);
    switch (object3.q3) {
        case 'A data type that represents a collection of properties':
            console.log(chalk.yellowBright('\n\nCorrect!'));
            score += 20;
            break;
        default:
            console.log(chalk.yellowBright('\n\nIncorrect'));
            break;
    }
    const object4 = await inquirer.prompt([
        {
            name: 'q4',
            type: 'list',
            message: chalk.blueBright('\n\nWhat does the spread operator (...) do when used with objects in TypeScript?'),
            choices: [
                'It combines two objects into one',
                'It clones an object',
                'It removes properties from an object',
                'It reverses the order of properties in an object'
            ]
        },
    ]);
    switch (object4.q4) {
        case 'It clones an object':
            console.log(chalk.yellowBright('\n\nCorrect!'));
            score += 20;
            break;
        default:
            console.log(chalk.yellowBright('\n\nIncorrect'));
            break;
    }
    const object5 = await inquirer.prompt([
        {
            name: 'q5',
            type: 'list',
            message: chalk.blueBright('\n\nIn TypeScript, what is the difference between readonly and const when declaring properties in an object?'),
            choices: [
                'There is no difference',
                'readonly makes the entire object immutable, while const makes only the property immutable',
                'readonly makes only the property immutable, while const makes the entire object immutable',
                'readonly and const cannot be used together'
            ]
        }
    ]);
    switch (object5.q5) {
        case 'readonly makes the entire object immutable, while const makes only the property immutable':
            console.log(chalk.yellowBright('\n\nCorrect!'));
            score += 20;
            break;
        default:
            console.log(chalk.yellowBright('\n\nIncorrect'));
            break;
    }
    console.log(shockingPink.underline(`\n\n\n\t\t\tYour quiz score is:${score}`));
    console.log(shockingPink('\n\n\t\t' + '<<==>>'.repeat(7)));
    console.log(shockingPink('\n\n\t\t' + '<<==>>'.repeat(7)));
    console.log(shockingPink.bold('\t\t\t THANKS TO ATTEMPT QUIZ'));
    console.log(shockingPink('\t\t' + '<<==>>'.repeat(7)));
    console.log(shockingPink('\n\n\t\t' + '<<==>>'.repeat(7)));
}
