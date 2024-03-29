import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./component/pages/Home";
import View from "./component/student/View"
import Edit from "./component/student/Edit"
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/view/:id" component={View} />
          <Route exact path="/edit/:id" component={Edit} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
