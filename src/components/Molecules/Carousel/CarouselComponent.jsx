import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import Modal from 'react-modal';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './CarouselSection.css'; // Import custom CSS styles

const images = [
    'https://source.unsplash.com/1600x900/?beach',
    'https://source.unsplash.com/1600x900/?beach',
    'https://source.unsplash.com/1600x900/?beach',
    'https://source.unsplash.com/1600x900/?beach',
    'https://source.unsplash.com/1600x900/?beach',
    'https://source.unsplash.com/1600x900/?beach',
    'https://source.unsplash.com/1600x900/?beach',
];

const CarouselSection = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    const customModalStyles = {
        overlay: {
            zIndex: 3,
        },
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            transform: 'translate(-50%, -50%)',
            maxWidth: '90%',
            maxHeight: '90%',
        },
    };

    const customArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 2,
        background: 'rgba(0, 0, 0, 0.3)',
        color: '#fff',
        padding: '10px',
        cursor: 'pointer',
        border: 'none',
        outline: 'none',
    };

    return (
        <div>
            <Carousel
                showStatus={false}
                showThumbs={false}
                showIndicators={false}
                selectedItem={0}
                emulateTouch
                centerMode
                centerSlidePercentage={80}

                renderArrowPrev={(onClickHandler, hasPrev) =>
                    hasPrev && (
                        <button
                            onClick={onClickHandler}
                            style={{ ...customArrowStyles, left: '10px' }}
                        >
                            &lt;
                        </button>
                    )
                }
                renderArrowNext={(onClickHandler, hasNext) =>
                    hasNext && (
                        <button
                            onClick={onClickHandler}
                            style={{ ...customArrowStyles, right: '10px' }}
                        >
                            &gt;
                        </button>
                    )
                }
            >
                {images.map((image, index) => (
                    <div key={index} onClick={() => openModal(image)}>
                        <img src={image} alt={`Image ${index}`} />
                    </div>
                ))}
            </Carousel>
            <Modal
                isOpen={!!selectedImage}
                onRequestClose={closeModal}
                style={customModalStyles}
            >
                <button onClick={closeModal}>Close</button>
                {selectedImage && (
                    <img
                        src={selectedImage}
                        alt="Selected Image"
                        style={{ width: '100%', height: 'auto' }}
                    />
                )}
            </Modal>

        </div>
    );
};

export default CarouselSection;
