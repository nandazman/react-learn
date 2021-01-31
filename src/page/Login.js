import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/userSlice';

function Login() {
  const [userName, setUserName] = useState('');
  const [password, setUserPassword] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  const userLogin = (e) => {
    e.preventDefault();
    dispatch(setUser(userName));
    localStorage.setItem('userlearning', userName);
    history.push('/');
  }

  return (
    <div className="container">
      <form onSubmit={(e) => userLogin(e)}>
        <div className="container">
          <label htmlFor="uname"><b>Username</b></label>
          <input type="text" placeholder="Enter any username" name="uname" value={userName} onChange={(e) => setUserName(e.target.value)} />

          <label htmlFor="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter mock Password" name="psw" value={password} onChange={(e) => setUserPassword(e.target.value)} />

          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login;