var path = require('path'),
    help = require('u-help'),
    fs = require('fs'),
    
    recount = require('../main.js'),
    location = path.resolve(process.cwd(),process.argv[3] || ''),
    txt,re,m;

if(process.argv.length != 4) return help.show('recount <RegExp> <file>');

re = new RegExp(process.argv[2],'g');
txt = fs.readFileSync(location).toString();
m = recount(txt,re);

if(m.length == 1) console.log('1 match');
else console.log(m.length + ' matches');
