# fs.synced()

**Synced** (for short) is a productivity tool and message aggregator that puts all your messages and notifications from the various messaging platforms and social media apps all in one place. Because it's in one app, you can perform checks, search, and filter among those messages.

## **Goals**
 - Server management and procurement
 - Familiarity with AWS (Lambda, RDS, possibly more)
 - Proficiency with consuming public APIs
 - Engineering

## **Technologies Used**:
### Frontend:
  React Native
    - Sending and receiving data from the backend
    - Passing data through components via props

### Backend:
  Express.js
  Node.js
    - Created models
      - Included a one-to-many relationship between models
    - Created RESTful CRUD routes for both the database and the external APIs

### Database:
  MongoDB
  Mongoose
    - The project took a NoSQL approach, though SQL could have also been used because of the model relationships.

Together these represent the MERN Stack. AWS Lambda and AWS's API Gateway were also used on the backend. Because the app is so event-centric, Node.js/Express were used as technologies that are known for exceptionally handling events due to asynchronous programming. React Native was used to create a mobile app, as the project's first iteration. 

### Authentication:
  OAuth
  JWT

## **Dependencies**
    "@react-navigation/native": "^6.1.3",
    "@react-navigation/native-stack": "^6.9.9",
    "@rneui/base": "^4.0.0-rc.7",
    "@rneui/themed": "^4.0.0-rc.7",
    "axios": "^1.3.2",
    "expo": "~47.0.12",
    "expo-status-bar": "~1.4.2",
    "react": "18.1.0",
    "react-devtools": "^4.27.1",
    "react-hook-form": "^7.43.1",
    "react-native": "0.70.5",
    "react-native-safe-area-context": "4.4.1",
    "react-native-screens": "~3.18.0"
    "@slack/web-api": "^6.8.1",
    "bcrypt": "^5.1.0",
    "bcryptjs": "^2.4.3",
    "cors": "^2.8.5",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "express-async-handler": "^1.2.0",
    "jsonwebtoken": "^9.0.0",
    "mongoose": "^6.9.0",
    "morgan": "^1.10.0",
    "serverless-http": "^3.1.1"

This project does require access tokens to perform actions as a user.
