"use client"; // Ensures this component only runs on the client (Next.js 13+)

import Masonry from "react-masonry-css";
import { useState, useEffect } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // Import Lightbox styles

const Gallery = ({ photos }) => {
	// console.log('photos', photos)
	const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    // if (!photos || !photos.data.length) {
    //     return <p className="text-center">Loading...</p>; // Prevents hydration mismatch
    // }

    // Breakpoint settings for responsive masonry layout
    const breakpointColumns = {
        default: 3,
        1100: 2,
        700: 1,
    };

	const imageUrls = photos && photos.data && photos.data.length &&  photos.data.map(photo => `https://disegno.dervitsani.ovh${photo.attributes.url}`);
	// console.log('imageUrls', imageUrls)


    return (
        <>{photos && photos.data && photos.data.length && <div className="container-fluid no-padding more-photos">
            <Masonry breakpointCols={breakpointColumns} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
                {photos.data.map((photo, i) => (
                    <img
                        key={`photo${i}`}
                        src={`https://disegno.dervitsani.ovh${photo.attributes.formats.small.url}`}
                        alt={`Gallery Image ${i}`}
                        className="w-full mb-4 rounded-lg shadow-md"
						onClick={() => {
                            setPhotoIndex(i);
                            setIsOpen(true);
                        }}
                    />
                ))}
            </Masonry>
			 {/* Lightbox Component */}
			 {isOpen && (
                <Lightbox
                    mainSrc={imageUrls[photoIndex]}
                    nextSrc={imageUrls[(photoIndex + 1) % imageUrls.length]}
                    prevSrc={imageUrls[(photoIndex + imageUrls.length - 1) % imageUrls.length]}
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() => setPhotoIndex((photoIndex + imageUrls.length - 1) % imageUrls.length)}
                    onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % imageUrls.length)}
                />
            )}
        </div>}</>
    );
};

export default Gallery;