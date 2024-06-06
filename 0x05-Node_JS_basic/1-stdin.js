Process.stdout.write('Welcome to Holberton School, what is your name?\n');

Process.stdin.on('readable', () => {
    const name = Process.stdin.raed();
    if (name) {
        Process.stdout.write(`Your name is: ${name}`);
    }
});

process.stdin.on('end', () => {
    process.stdout.write('This important software is now closing\n');
});



