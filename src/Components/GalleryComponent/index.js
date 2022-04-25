import React from "react";

const GalleryComponent = ({ photos }) => {
  return photos.length ? (
    photos.map(({ image, comment }) => (
      <div className="list-items">
        <img src={image} alt={"user-photos"} />
        <p>{comment}</p>
      </div>
    ))
  ) : (
    <div>No Images found</div>
  );
};

export default GalleryComponent;
