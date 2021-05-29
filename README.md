# Budget API

A reference implementation of the REST API described by the [swagger.yaml](swagger.yaml) file provided is located at
https://\<name\>.budgetapi.speurholdings.com. In a nutshell, this API will support the creation of a budget management website 
where users can learn to manage their money more effectively.

Your task is to implement a web **or** mobile application for this API. 

For the web, your implementation should be in JavaScript using either [React](https://reactjs.org/) or 
[Vue.js](https://vuejs.org/).

For mobile, your implementation should be written for Android using the [Kotlin](https://kotlinlang.org/) programming language.

Your implementation should adhere to the following conditions:

* You should have user interface actions for every endpoint in the API (e.g. a login page for the `/login` endpoint)
except the `GET /users` endpoint
* JSON web tokens expire every 10 minutes so re-authenticate the user every so often before that time is up, as long 
as the user is still interacting with the app. The user should be redirected to login if their token expires during 
inactivity.
* Ensure that the JSON web token is stored securely, as far as possible.
* Users of the API fall into two categories: regular user and admin. Admins can perform all actions on 
all users (except logout - an admin is not able to log out another user) whereas regular users may only 
perform actions on themselves. Your application should only cater to regular users. The application itself will act as
an admin to perform actions on arbitraty users where necessary. The admin credentials are as follows:
     * email: *admin@speurgroup.com*
     * password: *admin*
* All endpoints are protected by bearer auth, so you should use a JSON web token for all except the following:
    * `POST /login`
    * `POST /users`
* You should include instructions on how to set up your implementation for testing in a file called `INSTRUCTIONS.md`
* Your implementation should be responsive.
    
You may need to make some other assumptions in order to complete the implementation. As long as they do not conflict 
with one of the requirements that have been clearly stated, feel free to make and state your assumptions in your 
submission.

## Instructions

Fork this repository and write code to satisfy the implementation. When you are satisfied that your code works 
(or when the time is up), submit a merge request back to this repository. You are allowed to make use of any programming
resource (online or otherwise) but ensure that the code you submit is yours.

Make small commits with clear commit messages describing each change made to the code.

Be sure to submit a merge request by the due date even if you are not finished.

## Technologies

In order to implement this REST API effectively, you will need to be familiar with the following:
* [Git](https://git-scm.com/docs)
* [JSON Web Token](https://jwt.io/)
* [OpenAPI 3.0](https://swagger.io/specification/)
* [Markdown](https://spec.commonmark.org/0.29/)

## Bonus points

The following are for bonus points only and are not required:

* Include a working `Dockerfile` and/or `docker-compose.yaml` for your project (see [Docker](https://www.docker.com/))
* Include a working `.gitlab-ci.yaml` file for your project (see [GitLab CI/CD](https://docs.gitlab.com/ce/ci/))
* Include a `Bonus.md` file explaining how you would implement a "forgot password" feature, allowing a user to change
 their password
 * Actually implement the forgot password feature


## Final Remarks

Don't waste too much time reading documentation. Read just enough to get started and then attempt what you were reading.
You might find it useful to spend more time on forums like [stackoverflow](https://stackoverflow.com/) and 
[reddit](https://www.reddit.com/) and include the sites in your search queries.

If you find any issues with the assessment while attempting your implementation, be sure to bring them to my attention 
so that I may address them.

Good skill!
