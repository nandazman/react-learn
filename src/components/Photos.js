import { useState, useEffect } from 'react';
import Photo from './Photo';

function Photos() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos');
      const data = await response.json();
      setPhotos(data);
    }
    fetchPhotos();
  }, [])
  return (
    <div className="container container-photos">
      {photos.length ? photos.map((photo) => <Photo key={photo.id} photo={photo} />) : 'loading...'}
    </div>
  )
}

export default Photos;