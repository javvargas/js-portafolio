const fs = require('fs');

fs.wruteFileSync('./.env', `API=${process.env.API}\n`)