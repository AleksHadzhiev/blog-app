# blog-app

## Description of the project

A blog app where people will be able to post and read blogs. Add a little integration of AI, which will be able to recommend what to read to the users.

## Init the project

To initialize the project on your local machine you will have to run the following command:

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

The backend structure will be seperated in a few modules:

### User Module

The User module will handle the actions of the user such as: 
- Creating a User
- Loging in
- Geting personal information
- Changing password
- Forgot password


