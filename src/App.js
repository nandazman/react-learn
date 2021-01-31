import Main from './page/Main';
import Login from './page/Login';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';

function App() {
  const path = localStorage.getItem('path');
  const history = useHistory();
  if (path) {
    localStorage.removeItem('path');
    history.push(`/${path}`);
  }
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
