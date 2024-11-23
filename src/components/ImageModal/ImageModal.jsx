import React from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";
import s from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = ({ isModalOpen, closeModal, largeImageUrl, altText }) => {
  if (!largeImageUrl) {
    console.error("Large image URL is missing!");
    return null;
  }

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      overlayClassName={s.overlay}
      className={s.modal}
    >
      <div>
        <img
          src={largeImageUrl}
          alt={altText || "Image"}
          className={s.image}
          onClick={closeModal}
        />
      </div>
    </Modal>
  );
};

ImageModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  largeImageUrl: PropTypes.string.isRequired,
  altText: PropTypes.string,
};

export default ImageModal;
