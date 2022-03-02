# Earthquake Zen Garden - Alex Usanin

This project is a based on React framework utilizing hooks and functional components architecture. I don't believe that complexity of this project warranties use of Redux pattern, though I did use a `useReducer` hook for sorting capabilities.

Testing frame work in use is `Jest`. I am a personal fan of Jest because it encapsulates most of the needed tooling out of the box. I used a variety of tooling including `Karma`, `Chai`, `Sinon` & `Cypress` frameworks and their combinations, but while they all perform quite well, unity of Jest tooling and especially snapshot and module mocking is brilliant in my opinion.

I opted out from using `Storybooks` in this project to keep it rather simple. I am a fan of `Storybooks` however because they provide a great environment for developing well architected components in isolation.

For development server and packaging I chose `Webpack` and Babel. I have experience with `ESBuild` as well, which is much quicker, but I prefer `WebPack` for smaller projects mainly for a variety of loaders.

## Getting Started

1. Fetch dependencies:
   > npm install
2. Run the project:
   > npm run start

## Additional Commands

Run tests:

> npm run test
