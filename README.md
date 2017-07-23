# npm-module-template

Template project for building [KrimzenNinja](https://github.com/KrimzenNinja/) npm modules

## Prerequisites

Install [Chandler](https://github.com/mattbrictson/chandler) to sync your `CHANGELOG.md` entries to GitHub

## Process

1.  Copy this template.
2.  In the `package.json` file update the following fields:
    1.  `name`
    2.  `description`
    3.  `repository.url`
    4.  `keywords`
    5.  `bugs.url`
    6.  `homepage`
    7.  `license` if private then `UNLICENSED`
3.  In the `CHANGELOG.md` file, update the path to `unreleased`.
4.  Replace the `README.md` file.
5.  Make sure the included `LICENSE` file is appropriate. if private then delete the file.
6.  In the `.circleci/config.yml` file:
    1.  Update the `working_directory` field.
    2.  If this is a private package then after `npm publish .` add `--access restricted`
7.  Add the project to CircleCi if it is not picked up automatically
8.  Add the `$NPM_TOKEN` environment variable

## API

Put link here.

## TODO

1.  Make a Yeoman generator to do all the steps.
2.  Add snyk &| nsp 

## License

MIT © [Ryan Kotzen](https://github.com/eXigentCoder)
