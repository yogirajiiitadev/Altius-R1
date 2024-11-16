# Altius-R1
A Frontend React application for user authentication and registering purpose.

- This is a simple React Application created using vite which allows users to authenticate (signin/login) themselves into the portal.
- The application has fields like username, passwords, firstname, lastname, age which can be filled in for the registration and login puspose.
- The Landing page itself has both the form (Login and Signin) which are rendered conditionally based on the toggle button provided.
- Since no backend server could be used due to time constraint, We are storing username and password in localStorage instead of JSON bearer token used in API calls.
- On logout the localStorage variable is cleared which serves as the Session Management for the user.
- The form has multiple validation checks such as null check, distnct username constraints, etc.

- If had more time :
- Was about to implement login and signup endpoint using Express server and Mongo DB for storing the details.
- The authorization for protected endpoint could be done in the middleware implementation which particularly checks for user's bearer token.
- In that case the handleLogin and handleSignUp would be calling theses endpoint using axios with necessary token.
