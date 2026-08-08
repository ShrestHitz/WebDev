const { Command } = require('commander');
const fs = require('fs');

const program = new Command();

program
  .name('word-counter')
  .description('Count the number of words in a file')
  .argument('<filepath>', 'path to the file')
  .action((filepath) => {
    try {
      const content = fs.readFileSync(filepath, 'utf-8');
      const words = content.trim().split(/\s+/).filter(Boolean);
      console.log(`You have ${words.length} words in this file`);
    } catch (err) {
      if (err.code === 'ENOENT') {
        console.error(`Error: File not found at ${filepath}`);
      } else {
        console.error(`Error reading file: ${err.message}`);
      }
      process.exit(1);
    }
  });

program.parse();