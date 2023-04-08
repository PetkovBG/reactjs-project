# reactjs-project

## Project Overview
### This is a real estate website built with React and React Router. It has the following components:

- Components
-- Home: The landing page of the website.
CreateProperty: A form for creating a new property listing.
EditProperty: A form for editing an existing property listing.
Footer: The footer section of the website.
Header: The header section of the website.
Login: A form for logging in.
Logout: A button for logging out.
NotFound: A page for displaying 404 errors.
Profile: A page for displaying user profiles.
Properties: A page for displaying all property listings.
PropertyDetails: A page for displaying details of a specific property.
Register: A form for registering a new user account.
There are two contexts used in the project:

AuthContext: For handling user authentication and authorization.
PropertyContext: For handling property data and state.
Several custom hooks are also used:

useForm: For handling form inputs and state.
useLocalStorage: For storing data in local storage.
useService: A utility hook for making HTTP requests.
useValidation: For validating form inputs and handling errors.
The project also includes several services:

requester: A utility service for making HTTP requests with the correct CRUD operations.
propertyService: A service for handling property-related requests, such as getting all properties, getting a single property, deleting a property, and editing a property.
commentService: A service for handling comment-related requests, such as getting all comments for a property and creating a new comment.
authService: A service for handling user authentication-related requests, such as logging in, registering a new user account, and logging out.
The project uses module.css for styling the components.

In addition, the project includes two route guards:

RouteGuard.js: A guard for routes that require the user to be logged in.
PropertyOwner.js: A guard for routes that require the user to be the owner of a specific property.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
