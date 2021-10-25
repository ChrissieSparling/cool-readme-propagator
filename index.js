const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

promptUser = () => {
    return inquirer.prompt([
                 {
                    type: 'input',
                    message: 'Title?',
                    name: 'title',
                  },
                  {
                    type: 'input',
                    message: 'Description?',
                    name: 'description',
                  },
                  {
                      type: 'input',
                      message: 'Installation?',
                      name: 'installation',
                    },
                    {
                      type: 'input',
                      message: 'Usage?',
                      name: 'usage',
                    },
                    {
                      type: 'input',
                      message: 'Contribution?',
                      name: 'contribution',
                    },
                    {
                      type: 'input',
                      message: 'Testing?',
                      name: 'testing',
                    },
                    {
                        type: 'list',
                        message: 'License?',
                        name: 'licensing',
                        choices: [
                          "Apache",
                          "BSD",
                          "GNU",
                          "IBM",
                          "MIT",
                          "Mozilla",
                          "Zlib"
                      ]
                      },
                    {
                      type: 'input',
                      message: 'Your Github username?',
                      name: 'github',
                    },
                    {
                        type: 'input',
                        message: 'Your email for additional questions?',
                        name: 'email',
                      },


                ])}
       

async function init() {
    try {
        const inputs = await promptUser();
        const generateContent = generateMarkdown(inputs);
        await writeFileAsync('README2.md', generateContent);
        console.log('README generated');
    }   
    
    catch(err) { 
        console.log(err);
    }
  }

  init();
