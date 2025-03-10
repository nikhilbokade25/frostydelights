import "./About.css";
import aboutImg from "../Assets/aboutImg.png";
import aboutImg1 from "../Assets/aboutImg1.jpg";
export default function About(){
    return(
        <div className="about_container">
            <div className="about_text">
                <h1>A New Kind of Sweet Indulgence</h1>
                <p>
                    Our slightly bougie ice cream cups blend the creamy, indulgent flavors of your favorite frozen treats with ultra-portability to bring next-level sweetness wherever you go. Scoop, savor, and enjoy on the go!
                </p>
            </div>

            <div className="about_image">
                <div className="about_img">
                    <img src={aboutImg1}
/>                </div>
            </div>

            <div className="about_overlay">
                <img src={aboutImg} alt="floating ice creams" />
            </div>
        </div>
    );
}