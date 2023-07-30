// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
      switch (license) {
      case 'ISC':
        return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]';
      case 'MIT':
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
        case 'GNU GPLv3':
          return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]';
          case 'Apache 2.0':
            return '[![License:Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]';
      default:
        return '';
    }
  }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'ISC':
      return 'License: [ISC License (ISC)](https://opensource.org/licenses/ISC)';
    case 'MIT':
      return 'License: [The MIT License](https://opensource.org/licenses/MIT)';
      case 'GNU GPLv3':
        return 'License: [GNU GPL v3](https://www.gnu.org/licenses/gpl-3.0)';
        case 'Apache 2.0':
          return 'License: [Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license && license.trim() !== '') {
    return `${renderLicenseLink(license)}\n\n${renderLicenseBadge(license)}`;
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

${data.questions}

GitHub: [${data.github}](https://github.com/${data.github})
`;
}

module.exports = generateMarkdown;
