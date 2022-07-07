# RESTful-API-Node-Express-boilerplate
A RESTful Node/Express API for quick start

## Stack

### API
- Express server (Node basis)
- PostgreSQL database, interactions throught datamapper design
- Express Session (Session handling)
- Cors configuration
- Express Swagger Generator (API Doc)
- Joi (type validation)
- BCrypt (encryptions)
- Axios (fetching external ressources)
- Jest / Supertest / Supertest-Session for E2E testings
- Custom error handling
- Custom middlewares

### Database
- PostgreSQL database
- Sqitch (versionning)

## Architecture
### API
```
|- API
  |- documentation
    |- API_Endpoints.md
    |- API_Architecture.md
  |- src
    |- controllers
    |- database
      |- models
      |- dbclient.js
    |- Errors
      |- APIError.js
    |- external_api
      |- fetchAPI.js
      |- index.js
    |- middlewares
      |- checkingUser.js
      |- handleError.js
      |- routerWrapper.js
    |- router
    |- validation
      |- schemas
      |- validator.js
  |- tests
    |- Jest
    |- REST Client
  |- app.js
  |- start.js
  |- package-lock.json
  |- package.json

```

### Data
```
|- data
  |- 0 - documentation
  |- deploy
  |- revert
  |- verify
  |- deploy.example.sh
  |- package-lock.json
  |- package.json
  |- seeding.js
  |- sqitch.conf
  |- sqitch.plan
```

## How to use it
This repos is a template, so you can directly clone it on your own GitHub namespace.

This template is a "all in one". It has both data structuring files and API files.
It needs before all a clean database install, because the API structure relies on it.
So first you might want to dig in the deploy.example.sh file, in data folder.

Once you installed the base, you can initialize the API.
So to start you must use the commands :
```cd API```, then ```npm i```.

From API folder, you can now use the commands ```npm run start``` or ```npm run test```

And... that's all !

Oh, I almost forgot : when you'll need to push some modifications, don't forget to move in the root of the repos before doing it, or you'll only push modifications from the subfolder you're in.

## Ok so why are you keeping calling this a boilerplate ?
I know this template is pretty opinionated, but I figured out that without a few code samples, people usually get overwhelmed by all stuff being implied and not showed.
So... I made this one out of my previous boilerplate, which was a true empty project shell

## Ok, so what now ?
This template was made concurrently to my education.
So I know this is far from perfect, but if you have remarks and comments that could help improve it, don't hesitate.
I have myself a lot of thoughts now on how refactor a bunch of stuff.
