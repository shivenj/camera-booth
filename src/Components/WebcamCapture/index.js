import React from "react";
import Webcam from "react-webcam";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};

const WebcamCapture = ({ onCapture }) => (
  <Webcam
    audio={false}
    height={500}
    screenshotFormat="image/jpeg"
    width={800}
    videoConstraints={videoConstraints}
  >
    {({ getScreenshot }) => (
      <button
        onClick={() => {
          const imageSrc = getScreenshot();
          onCapture(imageSrc);
        }}
        className="capture-button"
      >
        Capture photo
      </button>
    )}
  </Webcam>
);

export default WebcamCapture;
