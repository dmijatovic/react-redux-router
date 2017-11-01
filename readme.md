# React-redux-router4 test project

This project is created using create-react-app cli. After creating it **npm eject** is runned to extract definitions and node scripts from cli. Then support for scss files is added to webpack definitions. After that I added router v4 and redux.

## Folder structure

- **config**: holds all configurations defined by create-react-app cli. Here I added scss support into dev version of webpack.config file
- **public**: folder was created by cli and contains static contact (I presume)..
- **scripts**: create when cli eject function was runned. It holds all custom react cli scripts.
- **src**: where the source code of our app goes. I still need to think about how to structure files in here.
  - **layout**: basic app layout components and styles, incl. variables, mixins etc.
  - **firebase**: firebase classes here, maybe?

## Environments

Environment variables are supported in build script by using .env file(s) **in the root of the project**. In this test I disabled source maps in production environment. For more information see ./config/env.js file and references to github pages. In addition there is more info at [create-react-app](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-development-environment-variables-in-env).


## Development

```cmd
npm start
```

## Builds

```cmd
npm run build
```

It runs build.js node script. To serve build project you can use serve command (after serve is installed globaly) using npm.

```cmd
serve -s build
```

## React-router-dom v4

This project is used to learn react-router v4. It seems this version takes new approach favouring dynamic routing. More info is avaliable on the [website](https://reacttraining.com/react-router/web/example/basic).