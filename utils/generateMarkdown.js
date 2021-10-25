//const badges = require (`./licenseBadges`)
 badges = (licensing) => {
  if (licensing === "Apache") {
      return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;        
  }
  if (licensing === "GNU") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)`;
  }
  if (licensing === "IBM") {
    return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
  }
  if (licensing === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }
  if (licensing === "Mozilla") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  }
  if (licensing === "Zlib") {
    return `[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)`;
  }
};

function generateMarkdown(data) {
    return `# ${data.title}
    
${badges(data.licensing)}    
    
## Table of Contents 
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Testing](#testing)
- [Additional Info](#additional-info)
   
## Description:
${data.description}
    
## Installation:
${data.installation}
    
## Usage:
${data.usage}
    
    
## Contribution:
${data.contribution}
   
## Testing:
${data.testing}

## License:
${data.licensing}

## Additional Info:
- Github Profile: [${data.github}](https://github.com/${data.github})
- Email me @ ${data.email} `;
}
  
  module.exports = generateMarkdown;