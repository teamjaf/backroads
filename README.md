# Backroads App [Working Application - Deployed](https://backroads-app.netlify.app/) - backroads-html - working html/css/javascript project (contains assets) - final(complete source code) - working react application - navigate to the folder - run 'npm install' - once the dependencies are installed run 'npm start' #### React Course [My React Course](https://www.udemy.com/course/react-tutorial-and-projects-course/?referralCode=FEE6A921AF07E2563CEF) #### Support Find the Content Useful? [You can always buy me a coffee](https://www.buymeacoffee.com/johnsmilga) #### Create New React App - install ```sh npx create-react-app@latest backroads-app ``` - run dev server ```sh npm start ``` #### SRC Folder (boilerplate) - index.js ```js import React from 'react' import ReactDOM from 'react-dom/client' // styles (typically global) import './index.css' // convention to name it App and setup in a separate file import App from './App' // import report web vitals import reportWebVitals from './reportWebVitals' // StrictMode // StrictMode is a tool for highlighting potential problems in an application.Activates additional checks and warnings for its descendants.Runs only in Development, does not impact the production build. RENDERS TWICE !!! Possible to remove. const root = ReactDOM.createRoot(document.getElementById('root')) root.render( ) // If you want to start measuring performance in your app, pass a function // to log results (for example: reportWebVitals(console.log)) // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals reportWebVitals() ``` - remove in src - setupTests.js - reportWebVitals.js - App.test.js - be careful with multiple css files App.js ```js function App() { return 
backroads app
} export default App ``` - remove - remove logo.svg - App.css #### Setup Structure - public/index.html - change title - copy/paste font-awesome link (from html project) - index.css - copy/paste css (from html project - css/styles.css) - error in line 209, just comment out for now ```css @media screen and (min-width: 768px) { /* .hero { background: linear-gradient(rgb(44, 174, 186, 0.7), rgba(0, 0, 0, 0.7)), url('../images/main.jpeg') center/cover no-repeat; } */ } ``` - src folder - copy/paste images folder (from html project) - move favicon.ico to public - App.js - refactor to - copy/paste all the content within body tags, up to 
