# <div align="center">`EmailJS`</div>
<div align="center">

[![GitHub repo forks](https://img.shields.io/github/forks/angulardevelopment/emailjs?style=flat&logo=github&logoColor=whitesmoke&label=Forks)](https://github.com/angulardevelopment/emailjs/network)&#160;
[![GitHub repo stars](https://img.shields.io/github/stars/angulardevelopment/emailjs?style=flat&logo=github&logoColor=whitesmoke&label=Stars)](https://github.com/angulardevelopment/emailjs/stargazers)&#160;
[![GitHub repo contributors](https://img.shields.io/github/contributors-anon/angulardevelopment/emailjs?style=flat&logo=github&logoColor=whitesmoke&label=Contributors)](https://github.com/angulardevelopment/emailjs/graphs/contributors)
[![GitHub repo Issues](https://img.shields.io/github/issues/angulardevelopment/emailjs?style=flat&logo=github&logoColor=red&label=Issues)](https://github.com/angulardevelopment/emailjs/issues)&#160;
[![GitHub repo PRs](https://img.shields.io/github/issues-pr/angulardevelopment/emailjs?style=flat&logo=github&logoColor=orange&label=PRs)](https://github.com/angulardevelopment/emailjs/pulls)&#160;
[![GitHub repo Merged PRs](https://img.shields.io/github/issues-search/angulardevelopment/emailjs?style=flat&logo=github&logoColor=green&label=Merged%20PRs&query=is%3Amerged)](https://github.com/angulardevelopment/emailjs/pulls?q=is%3Apr+is%3Amerged)&#160;

</div>

## Overview
*EmailJS is an Angular-based project designed to provide email functionalities using JavaScript. The application leverages EmailJS to send emails directly from the front-end, making it simple to integrate email sending features without the need for back-end API configurations.*

## Hacktoberfest 2024 ✨

**This project is participating in [Hacktoberfest 2024](https://hacktoberfest.com/)!**

We welcome contributions from the open-source community, by adding of new javascript topics or enhancements to the documentation. Every contribution counts toward your Hacktoberfest goal.

### How to Contribute
1. **Fork this repository** and create a new branch.
2. **Find an issue** to work on, or propose a new feature by opening an issue.
3. **Submit your pull request** before October 31st to make it count for Hacktoberfest!
   
## Contributing

We welcome all contributions to the EmailJS project! Please read our [Contributing Guidelines](CONTRIBUTING.md) and [Code of Conduct](CODE_OF_CONDUCT.md) before you start.

## Features

- **Send Emails**: Use the app to send emails directly from the front end.
- **Angular Integration**: Built with Angular, using TypeScript.
- **Responsive Design**: Optimized for both desktop and mobile platforms.
- **Email Templates**: Create and manage customizable email templates.

## Prerequisites

Before running this project, ensure that you have the following installed:

- [Node.js](https://nodejs.org/) (v12 or above)
- [Angular CLI](https://angular.io/cli) (v12 or above)
- EmailJS account for API access

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/angulardevelopment/emailjs.git
   ```
2. Navigate to the project directory:
   ```bash
   cd emailjs
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Add your EmailJS configuration in `src/environments/environment.ts`:
   ```ts
    export const environment = {
     production: false,
     emailJS: {
      serviceId: 'your-service-id',
      templateId: 'your-template-id',
      userId: 'your-user-id'
     }
    };
    ```
5. Running the project:
   ```bash
   ng serve
   ```
   Navigate to `http://localhost:4200/`. The app will automatically reload if you make any changes to the source files.

## Build
To build the project for production, run:

  ```bash
   ng build --prod
  ```
The build artifacts will be stored in the `dist/` directory.

### Usage
1. Configure your EmailJS account and obtain the required service, template, and user IDs.
2. Use the app's front end to compose and send emails.

## Contributors 🌎

Many thanks to these amazing people :
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="25%"><a href="https://github.com/sunny7899"><img src="https://avatars.githubusercontent.com/u/15168009?v=4" width="100px;"/><br /><sub><b>Sunny</b></sub></a><br /></td>
      <td align="center" valign="top" width="25%"><a href="https://github.com/yockerfx"><img src="https://avatars.githubusercontent.com/u/61665083?v=4" width="100px;"/><br /><sub><b>YockerFX</b></sub></a><br /></td>
    </tr>
  </tbody>
</table>
<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

Happy Contributing! 🚀
