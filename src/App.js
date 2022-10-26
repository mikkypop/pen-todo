// Import necessary files and dependencies.
import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './pages/Main';

// function App() {
//   return (
//     <div>Hello</div>
//   );
// }

// Import Todo Component

const App = () => {
  /*
   Examples of react hooks
   useState
 
   is a react hook that allows us to add react state to our component.
   what is state?
   is a built in react-object that is used to store or contain data/info
   about our component
   */
  /*
  constants declared to implement useState must have a [] bracket
  objects are created using curly brackets
  methods, functions, objects and constants are passed into a function within {} brackets
  */
  return (
    <Main />
  );
}
export default App;