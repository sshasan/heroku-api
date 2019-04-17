#### Steps I have followed
1. created an account on Heruko
2. cloned getting-started-sample
3. Added psql database in Heroku and local env
4. imported sql file in both Heroku and local db
5. added end points in index.js file for allBranches and branchDetails APi.
6. added ejs file to handle the out put.
7. tested on local machine > heroku local web
8. Pushed local chnages to remote machine > git push heroku master
9. deployed on remote machine > heroku open


#### APi documentation
1.  endPoint: /branchDetails
    reqType: get
    Header: {ifscCode: <IFSC_CODE>}
    Output: complete details of this branch

2.  endPoint: /allBranche
    reqType: get
    Header: {bankName: <BANK_NAME>, city: <CITY>}
    Output: Complete details of all the branches matching this criteria



#### Where I looked into google
1. How to host service on heroku
2. How to add psql service to heroku
3. How to import sql file to heroku






# node-js-getting-started

A barebones Node.js app using [Express 4](http://expressjs.com/).

This application supports the [Getting Started with Node on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs) article - check it out.

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku CLI](https://cli.heroku.com/) installed.

```sh
$ git clone https://github.com/heroku/node-js-getting-started.git # or clone your own fork
$ cd node-js-getting-started
$ npm install
$ npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

```
$ heroku create
$ git push heroku master
$ heroku open
```
or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)
