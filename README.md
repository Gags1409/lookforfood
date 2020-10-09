# Look for Food

Find a food truck near you in San Francisco

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites
Make sure you have Node v10.13.x+ 
Checkout code from Github 

```
git clone https://github.com/Gags1409/lookforfood.git
cd lookforfood
```

Install node packages 
```
npm i 
```
### Setup server

This application is using Express , start node server

```
npm run start-server
```
Server will start on port 3000 and on localhost , example would be - http://localhost:3000/trucks
You can test url with postman, note that its a post call.

### Setup client
Open a new tab in terminal , client would be running on different port. This application  is using open-wc web components 

```
npm run start
```

## Running the tests

Explain how to run the automated tests for this system

### Client test cases

Run test cases for client - more than 90% coverage

```
npm run test
```

### Server  test cases

Run test cases for server 

```
npm run server-test
```

## Built With

* [Open Web component](https://open-wc.org/) - Open Web Component Recommendations
* [Lion Web components](https://github.com/ing-bank/lion) - Reusable Web components
* [Express](https://expressjs.com/) - Node.js web application framework


## Versioning

We use [Standard Versioning](https://www.npmjs.com/package/standard-version) for versioning. For the versions available, see the [tags on this repository](https://github.com/Gags1409/lookforfood/tags). 

Major release  for breaking changes,run
```
npm run major
```

Minor release  for features,run
```
npm run minor
```

Patch release  for fixes,run
```
npm run patch
```

Dry-run with no version update , run
```
npm run dry-run
```
## Changelog
Changelog (CHANGELOG.md) is generated on basis of commit history when version is updated. Commit history is validated on each commit , commitlint (https://www.npmjs.com/package/@commitlint/config-conventional) is used.


## Deployment
Webpack (https://webpack.js.org/) is used to bundle the code and would be available under dist folder. To run build, run

```
npm run build
```

## Linting
Eslint (https://eslint.org/) is used find and fix problems in javascript

```
npm run lint
```


## Documentationg
[CODE-DOCS.md](CODE-DOCS.md)  is generated by web-component-analyser(https://www.npmjs.com/package/web-component-analyzer).

```
npm run document:components
```


## Accessibility
All web components used on frontend are accessible and covered by test cases.


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
