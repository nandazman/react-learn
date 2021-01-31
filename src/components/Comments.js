import { useHistory, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Comments() {
  const { id } = useParams();
  const history = useHistory();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
        if (!response || response.status > 399) throw Error();
        const data = await response.json();
        setComments(data);
      } catch (err) {
        history.push('/');
      }
    }
    fetchComments();
  }, [history, id]);

  return (
    <div className="container">
      {comments.length ? comments.map((comment, i) => <p key={i}>{comment.body}</p>) : 'loading...'}
    </div>
  )
}

export default Comments;