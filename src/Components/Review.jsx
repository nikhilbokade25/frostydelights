import './Review.css';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { REVIEW_DATA } from './Data';

export default function Reviews() {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true, 
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        centerPadding: "20px",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='review_container'>
            <div className='review_box'>
            {REVIEW_DATA && REVIEW_DATA.length > 0 ? (
                <Slider {...settings}>
                    {REVIEW_DATA.map((item, index) => (
                        <div className='review_content' key={index}>
                            <p>{item.review || "No Title Available"}</p>
                            <p className='review_name'>{item.name}</p>
                        </div>
                    ))}
                </Slider>
            ) : (
                <p className="no_reviews">No reviews available</p>
            )}


            </div>
        </div>
    );
}