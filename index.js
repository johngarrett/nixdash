const { exec } = require('child_process');
const dir = process.argv.slice(2)[0];


exec(`grep -rEoh "_\\.\\w*(?:\\()" ${dir} | sort | uniq -c | sort -r`, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(stderr)
        return;
    }
    console.log(stdout);
});



