import React from 'react';

const GalleryComponent = ({photos}) => {
  return photos.length ? photos.map(({image, comment}) =>
        <div style={{width: '50%', flexDirection: 'row', display: 'flex', justifyContent: 'space-between'}}>
    <img src={image} style={{width: 200}} alt={'user-photos'}/>
          <p>{comment}</p>
  </div>) :
  <div>No Images found</div>
}

export default GalleryComponent;
