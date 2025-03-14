import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./About.css";
import aboutImg from "../Assets/aboutImg.png";
import aboutImg1 from "../Assets/aboutImg1.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    useEffect(() => {
        gsap.fromTo(
            ".about_text h1",
            { x: -200, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1, 
                ease: "power4.out",
                scrollTrigger: {
                    trigger: ".about_container",
                    start: "top 20%", 
                    end: "top 20%", 
                    toggleActions: "play none none reverse", 
                },
            }
        );

        gsap.fromTo(
            ".about_text p",
            { x: -200, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1, 
                ease: "power4.out",
                delay: 0.1, 
                scrollTrigger: {
                    trigger: ".about_container",
                    start: "top 20%", 
                    end: "top 20%", 
                    toggleActions: "play none none reverse",
                },
            }
        );
    }, []);

    return (
        <div className="about_container">
            <div className="about_text">
                <h1>A New Kind of Sweet Indulgence</h1>
                <p>
                    Our slightly bougie ice cream cups blend the creamy, indulgent flavors of your favorite frozen treats with ultra-portability to bring next-level sweetness wherever you go. Scoop, savor, and enjoy on the go!
                </p>
            </div>

            <div className="about_image">
                <div className="about_img">
                    <img src={aboutImg1} alt="ice cream" />
                </div>
            </div>

            <div className="about_overlay">
                <img src={aboutImg} alt="floating ice creams" />
            </div>
        </div>
    );
}