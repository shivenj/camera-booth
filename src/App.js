import React, { useState } from "react";
import WebcamCapture from "./Components/WebcamCapture";
import "./App.css";
import GalleryComponent from "./Components/GalleryComponent";

function App() {
  const initialPhotoObj = { image: "", comment: "" };
  const [photoLibrary, setPhotoLibrary] = useState([]);
  const [photoObj, setPhotoObj] = useState(initialPhotoObj);

  const handleCapture = (img) => {
    setPhotoLibrary([...photoLibrary, { ...photoObj, image: img }]);
    setPhotoObj(initialPhotoObj);
  };

  const handleComments = (e) =>
    setPhotoObj({ ...photoObj, comment: e.target.value });

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ position: "relative" }}>
          <WebcamCapture onCapture={handleCapture} />
        </div>
        <textarea
          name={"comment"}
          required
          onChange={handleComments}
          placeholder="Enter your comment"
          rows={1}
        />
        <GalleryComponent photos={photoLibrary} />
      </header>
    </div>
  );
}

export default App;
