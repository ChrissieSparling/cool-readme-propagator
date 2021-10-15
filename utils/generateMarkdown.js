// TODO: Create a function that returns a license badge based on which license is passed in
const inquirer = require('inquirer')

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README

// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(inquireResponse) {
  return `# ${inquireResponse.title}
## table of contents
[Description](#description)
[Author](#author)
[Installation](#installation)
[Usage](#usage)
[Contributing](#contributing)
[License](#license)
[Tests](#tests)
<br>

## Description 
${inquireResponse.description}
<br>
## Author
${inquireResponse.author}
<br>
## Contributing
${inquireResponse.contributing}
<br>
## Installation 
${inquireResponse.installation}
<br>
## Usage 
${inquireResponse.usage}
<br>
## License
${inquireResponse.license}
<br>
## Tests
${inquireResponse.tests}
<br>
## questions
<br>
Any further questions give me a hollar at
<br>
${inquireResponse.email}
<br>
${inquireResponse.github}
<br>
`;
}

export default generateMarkdown;
