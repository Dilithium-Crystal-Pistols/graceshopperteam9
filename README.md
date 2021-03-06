<<<<<<< HEAD
=======
#Notes: https://docs.google.com/document/d/19-e5uiifU9H_oLUh4jaOFUDUgrd6YLEfs1JyPfdW0Yg/edit?usp=sharing

>>>>>>> 9ce2c6b785332ffd5833db22c41f418da2733d03
#Team-Contract

Roles
* Taskmaster
<<<<<<< HEAD
* Gitmaster
* Testmaster (writes out test specs?)
=======
* Testmaster/Gitmaster (Extra work each day for that person: at EOD this person will test that features are working properly and merge/push to main)
>>>>>>> 9ce2c6b785332ffd5833db22c41f418da2733d03

Daily process
* Meeting 1: Morning standup started by yesterday's Taskmaster
  * New roles assigned (by yesterday’s Taskmaster)
  * Yesterday? Today? Obstacles? (by today’s Taskmaster)
* Pair on assigned tasks
  * Random to start and then complementing skill sets
  * Message in team slack what branch you’re working on (also check for others as well)
  * Standard format: driver and navigator
  * Allow for independent time – ask for 10 minutes to start to look at it individually
* Record issues that are non-blocking and discuss right after lunch at re-group meeting
* Bring up any blocking issues after 20 minutes of spinning your wheels
<<<<<<< HEAD
* Meeting 2: (After lunch regroup) At 2:30pm have re-group meeting where you check-in with blockers, status updates and plan for EOD merge
=======
* Meeting 2: (After lunch regroup) At 2:30pm have re-group meeting where you check-in with status updates, blockers, and plan for EOD merge
>>>>>>> 9ce2c6b785332ffd5833db22c41f418da2733d03
  * Limit to 15 minutes
* Meeting 3: Immediately prior to end of day make applicable push/pull requests, review each other’s code and merge into master
  * 10 minutes before EOD
  * Day 1: more time

Team expectations
* Each of us reserves the rights to our nights and weekends, and we have all been straightforward about when and how we can commit to working on the project
* If you have a blocking issue, slack before interrupting another’s train of coding-thought
* We will assign tasks vertically (instead of horizontally)
* None of us will specialize in terms of front-end and back-end code
* Don’t interrupt - raise your hand
* Share the mic
* Disagree often and discuss -- argue infrequently
* At least message the group when you change what you are working on

Issues
* If the group is divided on a certain decision we will take the following steps:
  * Take 5 minutes for independent research then discuss. If we cannot reach agreement, bring on fellow/instructor as final decision maker.
* If you are frustrated
  * Voice it sooner than later to avoid the eventual explosion. So leave a time slot in daily stand ups for “getting things off your chest”.
  * In the moment and it’s a little too much, ask for a 5-minute break. 
* If you are stuck
  * Set a 20-minute timer and then if you’re stuck, reach out to the team for help.


<<<<<<< HEAD

=======
>>>>>>> 9ce2c6b785332ffd5833db22c41f418da2733d03
# FS-App-Template

## Setup

To use this as boilerplate, you'll need to take the following steps:

* Don't fork or clone this repo! Instead, create a new, empty
  directory on your machine and `git init` (or create an empty repo on
  Github and clone it to your local machine)

* Now you will have to add the fs-app-template as a remote and merge it into your own repository.

```
git remote add boilermaker git@github.com:FullstackAcademy/fs-app-template.git
git fetch boilermaker
git merge boilermaker/main
git branch -m master main
```

## Customize

Now that you've got the code, follow these steps to get acclimated:

* Update project name and description in `package.json`
* `npm install`
* Create two postgres databases (`MY_APP_NAME` should match the `name`
  parameter in `package.json`):
* These commands will create both your **development** and **test** databases

```
createdb <YOUR APP NAME HERE FROM package.json>
createdb <YOUR APP NAME HERE FROM package.json>-test
```

* By default, running `npm test` will use your test database, while
  regular development uses development database

## Start

Sync and seed your database by running `npm run seed`. Running `npm run start:dev` will make great things happen!

- start:dev will both start your server and build your client side files using webpack
- start:dev:logger is the same as start:dev, but you will see your SQL queries (can be helpful for debugging)
- start:dev:seed will start your server and also seed your database (this is useful when you are making schema changes and you don't want to run your seed script separately)


### Heroku

1.  Set up the [Heroku command line tools][heroku-cli]
2.  `heroku login`
3.  Add a git remote for heroku:

[heroku-cli]: https://devcenter.heroku.com/articles/heroku-cli

* **If you are creating a new app...**

  1.  `heroku create` or `heroku create your-app-name` if you have a
      name in mind.
  2.  `heroku config:set JWT=<your secret here!>` to set a secret for JWT signing

Database Setup

  3.  `heroku addons:create heroku-postgresql:hobby-dev` to add
      ("provision") a postgres database to your heroku dyno (This creates your production database)

  4.  `heroku config:set SEED=true` to get heroku to sync and seed your database

  5.   note everytime your app restarts, the database tables will be dropped and re-created. To avoid this you can `config:unset SEED`


* **If you already have a Heroku app...**

  1.  `heroku git:remote your-app-name` You'll need to be a
      collaborator on the app.


Now, you should be deployed!
