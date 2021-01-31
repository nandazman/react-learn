import LazyLoad from 'react-lazyload';

function Post({ post }) {
  return (
    <LazyLoad placeholder={'Loading....'}>
      <div className="post">
        {post.body}
      </div>
    </LazyLoad>
  )
}

export default Post;