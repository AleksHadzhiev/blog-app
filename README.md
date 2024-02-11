# blog-app

## Description of the project

A blog app where people will be able to post and read blogs. Add a little integration of AI, which will be able to recommend what to read to the users.
### Timeline of the project
The project aims to be complete before the end of February 2024 with a timeline like this:
| Milestone | Description | Due Date |
|-----------------|-----------------|-----------------|
| User Service | Create the user service part of the project. That means users will be able to register, login, change-password, get personal data, forgot password. In here the first two of the Notification Service functionalities are also implemented -sending eamil to verify account and sending email for forgot-password | 12.02.2024 |
| Basic CI/CD | Init the basic CI/CD by creating a styling job, testing job and deployment job | 14.02.2024 |


## Pull the project

To pull the project on your local machine you will have to run the following command:

```
git clone git@github.com:AleksHadzhiev/blog-app.git
```

## Git Structure

The application will be structured in one repository which will have the backend and frontend is seperate sub-directories.
Before working on a new issue the following command should be ran to make sure that the codebase on the local machine is the same as the one in the repository:

```
git pull origin main
```

When handling an issue a new branch should be created following the structure of:
```
git checkout -b blog-<backend/frontend>-#<issue-number>-<name-of-the-issue>
```

While working on an issue keep the changes small, so that the MR and commits do not become too big.
The commit naming is as following:

```
docs: adding or improving documentation
feat: adding a new featore
fix: fixing a bug or a problem
ref: refactoring code, which is not a bug
```

And the commit itself is (for example feature):

```
git add -p
git commit -m "feat: <what-has-been-done>
```


## Backend

For the most part the backend will be developed in nestjs. To run the backend locally run this command:

```
npm install # to install the latest dependencies
nest start # Starts listening to PORT:3000
```
To start the DB run the following command:

```
docker compose up -d
```
This will start the DB and a pgadmin, where you can checkout the updates of the local DB.

To run the app and DB together in docker run:
```
docker compose --profile app up -d
```
This will start the 3 services together. Keep in mind the backed serice takes a bit longer to start up.
The backend structure will be seperated in a few modules:

### User Module 

The User module will handle the actions of the user such as: 
- [x] Creating a User
- [x] Loging in
- [x] Geting personal information
- [x] Changing password
- [x] Forgot password

### Notification Module

THe Notification Module will serve to send emails to users:
- [ ] Verify registration of account
- [ ] Forgot password
- [ ] Delete account


