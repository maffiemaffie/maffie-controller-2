import fs from 'fs';
import path from 'path'
import inquirer from 'inquirer';

const replaceString = (filepath, replacement) => {
  const fileContent = fs.readFileSync(filepath, 'utf-8');
  const replaced = fileContent.replace('package-name', replacement);
  fs.writeFileSync(filepath, replaced);
}

inquirer
  .prompt([
    {
      type: 'input',
      name: 'replace',
      message: 'package-name (package-name): ',
    },
  ])
    .then((answers) => {
      const packageName = answers.replace;

      const filesForReplacement = [
        "package.json",
        "rollup-config.mjs",
      ];
      
      for (const filename of filesForReplacement) {
        const filepath = path.resolve(process.cwd(), filename);
        if (fs.readFileSync(filepath)) {
          replaceString(filepath, packageName);
        }
      }

      console.log(`Package renamed to ${packageName}`);
  });
