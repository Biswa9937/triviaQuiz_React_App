# triviaQuiz_React_App
This is a quiz web app built with React JS. 

## Overview
A simple quiz webapp built using React JS. Expects an answer from the user against the question loaded. Displays coorect or incorrect status of the entered answer. A 3 seconds delay
has been provided before loading of subsequent questions. The [config](https://github.com/Biswa9937/triviaQuiz_React_App/blob/main/src/config.js) file file contains the API for fetching the Q&A.

## Installation

[NodeJS](https://nodejs.org/) is needed (preferably the latest LTS version, at the time of writing it is version 10).
Yarn is a prefered package manager:

```
npm install --global yarn
```

Install dependencies

```
yarn install
```
## Run

This command will run development server for the app on port 3000 by default.
```
yarn start
```
### Structure

`/src` directory contains several subdirectories:

- `ApiService` - clients for SDU APIs, methods related to authentication,
- `TriviaQuiz` - main quiz UI component
