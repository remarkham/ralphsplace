import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
    {
        original: "/static/slides/slide-01.jpg",
        thumbnail: "/static/slides/thumbs/thumb-slide-01.jpg",
    },
    {
        original: "/static/slides/slide-02.jpg",
        thumbnail: "/static/slides/thumbs/thumb-slide-02.jpg",
    },
    {
        original: "/static/slides/slide-03.jpg",
        thumbnail: "/static/slides/thumbs/thumb-slide-03.jpg",
    },
    {
        original: "/static/slides/slide-04.jpg",
        thumbnail: "/static/slides/thumbs/thumb-slide-04.jpg",
    },
    {
        original: "/static/slides/slide-05.jpg",
        thumbnail: "/static/slides/thumbs/thumb-slide-05.jpg",
    },
    {
        original: "/static/slides/slide-06.jpg",
        thumbnail: "/static/slides/thumbs/thumb-slide-06.jpg",
    },
    {
        original: "/static/slides/slide-07.jpg",
        thumbnail: "/static/slides/thumbs/thumb-slide-07.jpg",
    },
    {
        original: "/static/slides/slide-08.jpg",
        thumbnail: "/static/slides/thumbs/thumb-slide-08.jpg",
    },
    {
        original: "/static/slides/slide-09.jpg",
        thumbnail: "/static/slides/thumbs/thumb-slide-09.jpg",
    },
    {
        original: "/static/slides/slide-10.jpg",
        thumbnail: "/static/slides/thumbs/thumb-slide-10.jpg",
    },
    {
        original: "/static/slides/slide-11.jpg",
        thumbnail: "/static/slides/thumbs/thumb-slide-11.jpg",
    },
    {
        original: "/static/slides/slide-12.jpg",
        thumbnail: "/static/slides/thumbs/thumb-slide-12.jpg",
    },
    {
        original: "/static/slides/slide-13.jpg",
        thumbnail: "/static/slides/thumbs/thumb-slide-13.jpg",
    },
    {
        original: "/static/slides/slide-14.jpg",
        thumbnail: "/static/slides/thumbs/thumb-slide-14.jpg",
    },
    {
        original: "/static/slides/slide-15.jpg",
        thumbnail: "/static/slides/thumbs/thumb-slide-15.jpg",
    },
    {
        original: "/static/slides/slide-16.jpg",
        thumbnail: "/static/slides/thumbs/thumb-slide-16.jpg",
    },
    {
        original: "/static/slides/slide-17.jpg",
        thumbnail: "/static/slides/thumbs/thumb-slide-17.jpg",
    },
    {
        original: "/static/slides/slide-18.jpg",
        thumbnail: "/static/slides/thumbs/thumb-slide-18.jpg",
    },
    {
        original: "/static/slides/slide-19.jpg",
        thumbnail: "/static/slides/thumbs/thumb-slide-19.jpg",
    },
    {
        original: "/static/slides/slide-20.jpg",
        thumbnail: "/static/slides/thumbs/thumb-slide-20.jpg",
    },
    {
        original: "/static/slides/slide-21.jpg",
        thumbnail: "/static/slides/thumbs/thumb-slide-21.jpg",
    },
    {
        original: "/static/slides/slide-22.jpg",
        thumbnail: "/static/slides/thumbs/thumb-slide-22.jpg",
    },
];

const EyeCandy = () => (
    <div className="container-sm">
        <ImageGallery items={images} />
    </div>
);

export default EyeCandy;
