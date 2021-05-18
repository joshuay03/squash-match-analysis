import logo from './Squash-Australia-Positive-Logo.png';
import './App.css';
import AnnotationList from './components/AnnotationList';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
    <Switch>
    <Route path="/annotate">
      <AnnotationList />
    </Route>
    <Route path="/"> 
      <AnnotationList />
    </Route>
    </Switch>
    </Router>
  );
}


export default App;
