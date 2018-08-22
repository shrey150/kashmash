KashMash
========

## [Live Demo](http://kashmash.herokuapp.com)

A facemash clone but with portmanteaus of the word "kash".

![Screenshot](https://i.imgur.com/jlmOcKI.png)

Based on an inside joke, the frontend uses React and the backend uses Node (via Express) and MongoDB to store the data.

# Setup

First, set up a MongoDB database, then add your connection string as an environment variable:

```
export MONGO_URI=[YOUR MONGO DB URI]            # Mac/Linux
set MONGO_URI=[YOUR MONGO DB URI]               # Windows
```

Then proceed with the rest of the setup:

```
npm                                             # install backend deps 
node scripts/mongo-setup.js                     # initialize DB

cd src/client           
npm                                             # install frontend deps
```


# Running the project

```
yarn dev                    # runs development server
```

```
yarn build                  # creates static assets (only needed for production)
```
Both commands should be executed from the project root.