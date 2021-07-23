module.exports = {
    generateMD: (answers) => {
        function badge(type) {
            const licenses = {
            "MIT": "[![License: MIT ](https://img.shields.io/badge/License-MIT-yellow.svg)]",
            "IPL": "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)]",
            "Apache": "[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]",
            "MPL 2.0": "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]"
            }
            return licenses[type];
            }

    return `
# <${answers.title}>

## Description
    
${answers.description}
    
## Table of Contents
    
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contribute)
- [Tests](#tests)
- [Questions](#questions)
    
## Installation
    
${answers.installation}
    
## Usage
    
${answers.usage}
![${answers.title}](${answers.image})
    
## License
${badge(answers.license)}
    
## Contribute
    
${answers.contribute}
    
## Tests
    
${answers.test}
    
## Questions
    
[${answers.github}](${answers.github})
${answers.email}
You can reach me at my GitHub profile or by email. I usually respond within one day.
    `
    }
}