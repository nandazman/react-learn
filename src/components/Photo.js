import LazyLoad from 'react-lazyload';

function Photo({ photo }) {
  return (
    <LazyLoad height={150} offset={100} placeholder={<p style={{height: '150px'}}>Loading...</p>}>
      <img src={photo.thumbnailUrl} alt={photo.id} />
    </LazyLoad>
  )
}

export default Photo;