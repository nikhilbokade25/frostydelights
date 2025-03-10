import "./Hero.css";
import heroImg1 from "../Assets/heroImg2.png";
import icecreamIcon from "../Assets/icecream_icon.png";
export default function Hero() {
    return (
        <div className="hero_container">
            <div className="hero_text">
                <div className="hero_text_content">
                    <h1>FROSTY DELIGHTS</h1>
                    <p>Indulge in our naturally flavored, handcrafted ice cream.</p>
                    <button className="hero_button">
                        <span>SHOP </span>
                        <img src={icecreamIcon} alt="Ice Cream Icon" className="button_icon" />
                    </button>
                </div>
            </div>
            <div className="hero_image">
                <div className="hero_float_image">
                    <img src={heroImg1} alt="Ice Cream" className="hero_img floating" />
                </div>
            </div>
        </div>
    );
}
