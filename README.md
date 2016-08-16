# smile-project
Liz B's new blog http://www.the-smile-project.com/

## Installation
Get the code

`git clone https://github.com/deadlybutter/smile-project.git`

Install dependencies, this also builds the CSS for you after the installation.

`npm install`

Configure ENV vars

`cp example.env .env`

Run the app (Requires the [Heroku toolbelt](https://toolbelt.heroku.com/))

`heroku local`

## Development

`npm buildcss` - Builds CSS file

`npm watchcss` - Watches for SCSS file changes & builds automatically.

`npm test` - Runs tests
