import PropTypes from 'prop-types';
import ModalImage from 'react-modal-image';

const ImageModal = ({imgSrc, altText, styles}) => {
    
  return (
    <ModalImage 
        small={imgSrc}
        large={imgSrc}
        altText={altText}
        className={` cursor-pointer ${styles}`}
    />
  );
};


ImageModal.propTypes = {
    imgSrc: PropTypes.string,
    altText: PropTypes.string,
    styles: PropTypes.string,
};

export default ImageModal