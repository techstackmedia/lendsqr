# Lead Sqr Front end Project

## Installation

Node.js installation is needed in order to use `npx` through `npm` to install **React**

```bash
npx create-react-app <project-name> --template typescript
npm start
npm install sass
```

Note: Make sure [Node.js](https://nodejs.org/en/) is installed. To be 100% sure you use `npm` instead of `yarn` run the command below:

```bash
npx create-react-app <project-name> --template typescript --use-npm
```

If you want to follow along the project, click on the branch drop-down and you will see a list of dropdown branches.

## Clone Project

You can clone or download the zip file from the **green code button** with a dropdown or [click the link here](https://github.com/techstackmedia/lendsqr-fe-test/archive/refs/heads/master.zip). Extract the file in your folder and you are good to go.

Note: The green code button won't be seen for tab screen size or lesser. [Click the link to download the zip file](https://github.com/techstackmedia/lendsqr-fe-test/archive/refs/heads/master.zip) for smaller screens less than 768 pixel `<768px`.

```bash
git clone https://github.com/techstackmedia/lendsqr-fe-test.git
npm install
git checkout <branch-name>
```

To see all the project branches remotely run the code:

```bash
git branch -r
```

Note: Git must be installed for commands to work. Check if Git is installed with the command `git --version`. If it is already available on PC the version will show up. If you get an error, [download and install Git](https://git-scm.com/downloads) on your PC.

## Techstack

Technology used are:

- React
- TypeScript
- SCSS
- React Router
- Heroku

## Project Description

1.) The project dashboard or users page shows users detail on a table. Must relevant data displayed in the users page are:

- Organization
- Phone Number
- Email
- Username
- Status
- Date Joined

The API for the users is shown below:

```txt
https://www.google.com/url?q=https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/
```

Paste it on your browser search bar or any API platform like [Postman](https://www.postman.com/), [Insomnia](https://insomnia.rest/), etc. to get the full data.

2.) The project has a couple of components listed below:

- Logo
- Button
- Login Form
- User Table
- Navbar
- Sidebar
- Pagination
- User Tier
- Filter
- User Detail
- Spinner
- Pagination

3.) The user detail page contails all detail of a specific user based on the id. It also has detailed information of the guarantor like the name, phone number, email, and relationship with the user. You can get the API as shown below:

 ```txt
https://www.google.com/url?q=https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/:id
```

Paste it on your browser search or any API platform like Postman, Insomnia, etc. to get the full data.
Based on the current id, it is between `1 to 100`. That is replace `:id` to any number between 1 to 100.

## Design

Click the [link to get the Figma design](https://www.google.com/url?q=https://www.figma.com/file/ZKILoCoIoy1IESdBpq3GNC/Frontend&sa=D&source=editors&ust=1673861562837685&usg=AOvVaw13_5gDNbAIEaae_KDWvVyu)

## Deployment

To [deploy the app using Heroku](https://www.heroku.com/nodejs) make sure Heroku is installed on PC. To install Heroku [click the link here](https://devcenter.heroku.com/articles/heroku-cli) and follow the instructions based on your Operating System. Also make sure you have a file named **Procfile** with no extension in the project root directory. The Procfile must have the text `web: npm start` for it to work. Follow the steps below:

```bash
git add -A
git commit -m 'commit message here'
git push origin <branch-name>
heroku login
heroku create
heroku config:set MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.m0ghjqa.mongodb.net/?retryWrites=true&w=majority
git push heroku <branch-name>
```

Note: You do not have to run `npm run build` to have the project in production environment. This will be done automatically by Heroku.

## Heroku Config

If you are using a backend like node, configure the variable by using the command syntax `heroku config:set <VAR_NAME>=<VAR_VALUE>`

For example:

```bash
heroku config:set MONGODB_URI=mongodb://localhost:27017/myapp
heroku config:set NODEMAILER_EMAIL=test@example.com
heroku config:set NODEMAILER_PASSWORD=secret
```

## Project Link

You will get a unique random link. To rename the link run the command:

```bash
heroku apps:rename <newname>
```

The link to the made up [project can be found here](https://lendsq.vercel.app/).

## Resources

🌍 Useful Links

- [React](https://beta.reactjs.org/)
- [Sass](http://sass-lang.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [TypeScript and React](https://www.typescriptlang.org/docs/handbook/react.html)
- [React Router](https://reactrouter.com/en/main)
- [Git](https://git-scm.com/)
- [Heroku](https://www.heroku.com)
- [Heroku Deployment with Git](https://devcenter.heroku.com/articles/git)

You may also [checkout my website at Techstack Media](https://techstackmedia.com) for more resources.

---

Happy Coding! 😊
