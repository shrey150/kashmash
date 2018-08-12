KashMash
==============

## [Live Demo](http://kashmash.herokuapp.com)

A facemash clone but with portmanteaus of the word "kash".

![Screenshot](https://i.imgur.com/jlmOcKI.png)

Based on an inside joke, the frontend uses React and the backend uses Node (via Express) and MongoDB to store the data.

# Setup

Before running, make sure you set up your MongoDB URL in `src/server/constants.js`.

```
npm                                 # install backend deps 
node scripts/mongo-setup.js         # initialize DB

cd src/client           
npm                                 # install frontend deps
```

# Running the project
```
yarn dev                    # runs development server
```

```
yarn build                  # creates static assets (only needed for production)
```
Both commands should be executed from the project root.