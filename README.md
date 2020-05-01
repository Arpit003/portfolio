### Base setup of React.js structure
    | Assets
    |-- Images
    | Components # General Components Here
    |-- Commons
    |   |-- Topbar
    |   |-- Footer
    |   |-- Toast
    |-- Helpers
    |   | Api Handler   # Global Api Handler Middleware
    |   | Paths         # Used to Store URLs
    |   | Status Code   # Contains all Status codes
    |   | Utils         # Utility Functions
    |-- Redux
    |-- Routes
    |-- Styles
    |   | Constants
    |   | Utils         # Utility Styling Functions / Global Styles regards


### Features :
- Global Api Handler.
- Route Based [code splitting](https://reactjs.org/docs/code-splitting.html) using [React Loadable](https://www.npmjs.com/package/react-loadable)
- Global Toast Message.
- Generalized Theme Configurations (themeSettings.js)
- Authentication Base
- Redux (Already Configured Browser Extension).
- Minimal and Runtime styling using [Styled Components](https://www.npmjs.com/package/styled-components)
- Most of the status codes are available.

### Things To Consider :
- All of File, Folder and Component names must be in Pascal Case.
- All of function name must be in Pascal Case / Camel Case.
- Size of Any component Should not exceed 1000 lines.
- Size of Any function Should not exceed 250 lines.
- Style of any component must be within same folder. [component-name].style.js
- Don't create global styles like font-size-X, Margin-X etc.
- Include function comments and line comments to wherever possible.
- There should not be any errors or warning in console.


### Please note :
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). So for any advance configuration please visit CRA docs.
