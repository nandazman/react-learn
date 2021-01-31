import Posts from '../components/Posts';
import Photos from '../components/Photos';
import { Route, Switch, Link, Redirect, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUser } from '../redux/userSlice';
import Comments from '../components/Comments';
import { setUser } from '../redux/userSlice';
import { useDispatch } from 'react-redux';

function Main() {
  const user = useSelector(getUser);
  const history = useHistory();
  const dispatch = useDispatch();
  console.log({dispatch, setUser})
  if (!user.login) {
    history.push('/login');
  }
  return (
    <>
      <ul style={{ listStyleType: "none", display: "flex"}}>
        <li style={{ marginRight: "1rem" }}>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/photos">Photos</Link>
        </li>
        <li style={{ marginLeft: "auto", marginRight: "2rem" }}>
          {user.user_name}
        </li>
      </ul>
      <hr/>
      {user.login ? <Switch>
        <Route exact path="/">
          <Posts />
        </Route>
        <Route exact path="/photos">
          <Photos />
        </Route>
        <Route exact path="/comment/:id">
          <Comments />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch> : ''}
    </>
  )
}

export default Main;