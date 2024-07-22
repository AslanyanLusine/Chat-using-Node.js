
const { program } = require('commander');
const moment = require('moment');

const first = {
    name:"guest",
    greeting:"hello",
    language:"english"
}

const greetings = {
    English: 'Hello',
    Spanish: 'Ola',
    French: 'Bonjour',
};


program
    .option('-n, --name <name>', 'name to greet', firstArg.name)
    .option('-l, --level <level>', 'verbosity level (1 or 2)', '1')
    .option('-g, --greeting <greeting>', 'custom greeting message', firstArg.greeting)
    .option('-lang, --language <language>', 'language of the greeting', firstArg.language);

program.parse(process.argv);

const options = program.opts();
const name = options.name;
const level = parseInt(options.level);
const customGreeting = options.greeting;
const language = options.language;


const greetingMessage = greetings[language] ?? customGreeting;


let output = `${greetingMessage}, ${name}!`;

if (level === 2) {
    const dateTime = moment().format('YYYY-MM-DD HH:mm:ss');
    output += ` (Date and Time: ${dateTime})`;
}

console.log(output);
