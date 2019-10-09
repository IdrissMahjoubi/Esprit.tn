var util = require('util')
var exec = require('child_process').exec;

function puts(error, stdout, stderr) { util.puts(stdout,error,stderr) }

var os = require('os');

if (os.type() === 'Linux') 
   exec("concurrently \"nodemon server.js\" \"cd client/backend && set PORT=3002 && npm start\" \"cd client/frontend && PORT=3001 npm start\"", puts); 
else if (os.type() === 'Darwin') 
   exec("concurrently \"nodemon server.js\" \"cd client/backend && set PORT=3002 && npm start\" \"cd client/frontend && PORT=3001 npm start\"", puts); 
else if (os.type() === 'Windows_NT') 
   exec("concurrently \"nodemon server.js\" \"cd client/backend && set PORT=3002 && npm start\" \"cd client/frontend && set PORT=3001 && npm start\"", puts);
else
   throw new Error("Unsupported OS found: " + os.type());