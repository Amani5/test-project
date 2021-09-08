import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Appheader from "./components/header";
import Appfooter from "./components/footer";
import UserForm from "./components/userform";
import Characters from "./pages/characters";

function App() {
  return (
    <div className="App">
      <Appheader />
      <BrowserRouter>
        <Switch>
          <Route path="/characters">
            <Characters />
          </Route>
          <Route path="/">
            <UserForm />
          </Route>
        </Switch>
      </BrowserRouter>
      <Appfooter />
    </div>
  );
}

export default App;
