import React, { useState } from "react";
import "../Css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Modal } from "react-bootstrap";
import "../Css/Photos.css";

// Import all images from the Assets folder
const importAll = (requireContext) => {
  return requireContext.keys().map((key) => ({
    src: requireContext(key),
    alt: key.replace("./", "").split(".")[0], // Generate alt text from the filename
  }));
};

const images = importAll(require.context("../Assets", false, /\.(png|jpe?g|svg)$/));

function Photos() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <Card className="photos-card">
      <Card.Body>
        <div className="photos-grid">
          {images.map((image, index) => (
            <div
              key={index}
              className="photo-item"
              onClick={() => handleImageClick(image)}
            >
              <img
                src={image.src}
                alt={image.alt || `Photo ${index + 1}`}
                className="photo-img"
              />
            </div>
          ))}
        </div>

        {/* Modal to show enlarged image */}
        <Modal show={!!selectedImage} onHide={handleClose} centered>
          <Modal.Body className="text-center" style={{ backgroundColor: "#333333"}}>
            {selectedImage && (
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="img-fluid enlarged-photo"
              />
            )}
          </Modal.Body>
        </Modal>
      </Card.Body>
    </Card>
  );
}

export default Photos;
