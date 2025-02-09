import PropTypes from "prop-types";
import "./ProfilePhotoModal.css";
import { useState } from "react";

function ProfilePhotoModal({ isOpen, currentPhoto, onClose, onSave }) {
  const [newPhoto, setNewPhoto] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setNewPhoto(previewUrl);
    }
  };

  const saveNewPhoto = () => {
    if (newPhoto) {
      onSave(newPhoto); // Pass new photo URL to parent
    }
    onClose(); // Close modal
  };

  if (!isOpen) return null; // Don't render modal if not open

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Change Profile Photo</h2>
        <div className="current-photo">
          <img
            src={newPhoto || currentPhoto}
            alt="Current or New Profile"
            className="profile-preview"
          />
        </div>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <div className="buttons-container">
          <button
            onClick={saveNewPhoto}
            className="wh-button wh-button--primary"
          >
            Save
          </button>
          <button
            onClick={onClose}
            className="wh-button wh-color-gray-1 wh-bg-gray-4"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

ProfilePhotoModal.propTypes = {
  isOpen: PropTypes.func.isRequired,
  currentPhoto: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default ProfilePhotoModal;
