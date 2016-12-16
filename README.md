# Webpack React Boilerplate
## by Markus Wälchli

# js-dev-env
Javascript Development Environment - Starter Kit
In order to edit/master this file check [Markdown](https://guides.github.com/features/mastering-markdown/)

# Toolchain Decisions
The toolchain decisions are critical. Consider it as a checklist or receipt and make sure that steps are not forgotten (critical) 

## Editors and Configurations
* Visual Studio Code 
* [Editorconfig](http://editorconfig.org/) for formatting (Download / Install the plugin in Visual Studio Code)

# Installation instruction.
git clone the current repository.

1. Run `npm install` (This installs the required node modules)
2. Run `npm link typescript`
3. Run eiter
 1. `npm start` to launch the application with a browser window.
 2. `npm run no-browser` to start the application on localhost without launching a browser window.


# Initial Configruation 

1. Clone this repository
2. `npm install -g typescript webpack`
3. `npm install --save react react-dom @types/react @types/react-dom`
4. `npm install --save-dev ts-loader source-map-loader`
5. `npm link typescript`
6. `npm install --save-dev office-ui-fabric-react`
7. `npm install --save-dev sp-pnp-js` 


# Execute
Either run webpack or npm run build and open index.html in a browser of your choice

# Run Locale Webserver
