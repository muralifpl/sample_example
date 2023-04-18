import { useCallback, useState } from "react";
// import Slider from "@material-ui/core/Slider";
import Cropper from "react-easy-crop";
import getCroppedImg from "./Crop";
import "./App.css"
import Kee from "./Kee"
const EasyCrop = ({image}) => {

//   const [kk, setA] = useState(image);

  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null); 
  const [croppedImage, setCroppedImage] = useState(null);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const showCroppedImage = useCallback(async (e) => {
    try {
      const croppedImage = await getCroppedImg(
        image,
        croppedAreaPixels,
      );
      console.log("donee", [ croppedImage]);
      setCroppedImage(croppedImage);
    } catch (e) {
      console.error(e);
    }
  }, [croppedAreaPixels, image]);

  const onClose = useCallback(() => {
    setCroppedImage(null);
  }, []);

  return (
    <div>
      <button
        style={{
          display: image === null || croppedImage !== null ? "none" : "block",
        }}
        onClick={showCroppedImage}
      >
        Crop
      </button>
      <div
        className="container"
        style={{
          display: image === null || croppedImage !== null ? "none" : "block",
        }}
      >
        <div className="crop-container">
          <Cropper
            image={image}
            crop={crop}
            // rotation={rotation}
            zoom={zoom}
       
            aspect={16 / 9}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
            onRotationChange={setRotation}
        
          />
        </div>
        <div className="controls">
        
        </div>
      </div>
     
      <div>
      {croppedImage && (
        <div>
          <h2>Cropped Image</h2>
          <img alt="Cropped Img" src={croppedImage} width="50%" />
        </div>
      )}
{/* <Kee imgs={croppedImage}/> */}
      </div>
    </div>
  );
};

export default EasyCrop;