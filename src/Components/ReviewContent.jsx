import { useEffect } from "react";
import gsap from "gsap";
import './ReviewContent.css';

export default function ReviewContent() {
    useEffect(() => {
        gsap.fromTo(
            ".reviewcontent_container h1:nth-child(1)", 
            { x: -200, opacity: 0 }, 
            { 
                x: 0, opacity: 1, 
                duration: 1.5, ease: "power4.out", 
                scrollTrigger: { 
                    trigger: ".reviewcontent_container", 
                    start: "top bottom", 
                    end: "bottom top", 
                    scrub: true 
                }
            });
        
        gsap.fromTo(
            ".reviewcontent_container h1:nth-child(2)", 
            { x: 200, opacity: 0 }, 
            { 
                x: 0, opacity: 1, 
                duration: 1.5, ease: "power4.out", 
                delay: 0.5, 
                scrollTrigger: { 
                    trigger: ".reviewcontent_container", 
                    start: "top bottom", 
                    end: "bottom top", 
                    scrub: true 
                }
            });
        
        gsap.fromTo(
            ".reviewcontent_container h1:nth-child(3)", 
            { x: -200, opacity: 0 }, 
            { 
                x: 0, opacity: 1, 
                duration: 1.5, ease: "power4.out", 
                delay: 1, 
                scrollTrigger: { 
                    trigger: ".reviewcontent_container", 
                    start: "top bottom", 
                    end: "bottom top", 
                    scrub: true 
                }
            });
    }, []);

    return (
        <div className="reviewcontent_container">
            <h1>WHAT</h1> 
            <h1>EVERYONE</h1>
            <h1>SAYING</h1>
        </div>
    );
}
