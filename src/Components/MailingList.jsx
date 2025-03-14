import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./MailingList.css";
import mailingListImg from "../Assets/mailingList.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function MailingList() {
    const mailingRef = useRef(null);

    useEffect(() => {
        const el = mailingRef.current;
        gsap.fromTo(
            el,
            { opacity: 0, y: 100 }, 
            {
                opacity: 1,
                y: 0,
                duration: 2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%", 
                    end: "top 50%",
                    scrub: true, 
                },
            }
        );
    }, []);

    return (
        <div className="mailing_container" ref={mailingRef}>
            <div className="mailing_image">
                <img src={mailingListImg} alt="mailing list" />
                <div className="mailing_text">
                    <h1>Join Our Mailing List</h1>
                    <p>Stay updated with our latest flavors and exclusive deals!</p>
                    <button className="mailing_btn">SUBSCRIBE</button>
                </div>
            </div>
        </div>
    );
}
