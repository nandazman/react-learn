import { useState, useEffect } from 'react';
import Post from './Post';
import { Route, Switch, Link, Redirect } from 'react-router-dom';

function Posts () {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setPosts(data);
    }
    fetchPosts();
  }, [])

  return (
    <div className="container">
      <Switch>
        <Route path="/">
          {posts.map((post, i) => (
            <Link key={i} to={"/comment/" + post.id}>
              <Post post={post}/>
            </Link>
          ))}
        </Route>
        <Route path="/comment/:id/*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </div>
  )
}

export default Posts;