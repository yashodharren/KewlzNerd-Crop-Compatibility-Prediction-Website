const { exec } = require('child_process');

// Command to open VS Code
const command = process.platform === 'win32' ? 'code .' : 'code .';

// Execute the command
exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error opening VS Code: ${error}`);
    return;
  }
  console.log('VS Code opened successfully!');
});