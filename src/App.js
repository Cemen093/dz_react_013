import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import  Home from "./components/Home";
import  About from "./components/About";

function App() {
  return (
    <>
    {
     
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Redirect to="/" />
        </Switch>
      </Router>
    }
    </>
  );
};

export default App;

// npx create-react-app my-app
// cd my-app
// npm i react-router-dom@4.2.2
// npm run build
// npm start