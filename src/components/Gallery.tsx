//@ts-nocheck
import React, { useEffect } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import Image from "next/image";
import "photoswipe/style.css";

const Gallery = (props) => {
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#" + props.galleryID,
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);

  return (
    <div className="pswp-gallery flex mt-1" id={props.galleryID}>
      {props.images.map((image, index) => (
        <a
          href={image.url}
          data-pswp-width={image.width}
          data-pswp-height={image.height}
          key={props.galleryID + "-" + index}
          target="_blank"
          rel="noreferrer"
          className="ml-1 border border-slate-300 rounded-my overflow-hidden"
        >
          <Image
            src={image.url}
            alt="img"
            width={100}
            height={50}
            style={{ objectFit: "cover" }}
          />
        </a>
      ))}
    </div>
  );
};

export default Gallery;
