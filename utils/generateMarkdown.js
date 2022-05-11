

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'none') {
    if (license == 'X11') {
      return license = '[![License](https://img.shields.io/crates/l/x11?color=green&style=for-the-badge)]';
    }
    if (license == 'GNU') {
      return license = '[![License](https://img.shields.io/crates/l/gnu?color=green&style=for-the-badge)]';
    }
    if (license == 'BSD') {
      return license = '[![License](https://img.shields.io/crates/l/BSD?color=green&style=for-the-badge)]';
    }
    else {
      return license = '';
    }
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'none') {
    return license = '* [License](#license)';
  } else {
    return license = '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license.length) {
    return license = '';
  } else {
    return `## License
  
    ${license}`;
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `

  ${renderLicenseBadge(data.license)}

  # ${data.title} 
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseLink(data.license)}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}

  ${renderLicenseSection(data.license)}
  
  ## Contributing
  
  ${data.contributing}
 
  ## Tests
  
  ${data.tests}
  
  ## Questions
  if you have any questions you can reach me here

  [GITHUB](https://github.com/${data.github})
  
  [EMAIL](${data.email})
  
  `;
}

module.exports = generateMarkdown;
