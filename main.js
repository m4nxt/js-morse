const prompt = require("prompt-sync")();
const fs = require('fs');
const rawinp = prompt('> ');
const json = fs.readFileSync('./morse.json');

const obj = JSON.parse(json);
var i = 0;

if (/[a-zA-Z]/.test(rawinp) && !/\d/.test(rawinp)) {
    const input = rawinp.replaceAll(" ", "_");
    while (i < input.length) {
        eval(`process.stdout.write(obj.${input[i]})`);
        process.stdout.write(" ");
        i += 1;
    };
} else if (!/\d/.test(rawinp)) {
    const input = rawinp.replaceAll('.', '0')
    .replaceAll('-', '1').replaceAll(' ', ' d').split(' ');
    input.splice(0,1,`d${input[0]}`);
    while (i < input.length) {
        eval(`process.stdout.write(obj.${input[i]})`);
        i += 1;
    };
};