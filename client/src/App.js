import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeLight from './pages/HomeLight';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home-light">
            <HomeLight />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
