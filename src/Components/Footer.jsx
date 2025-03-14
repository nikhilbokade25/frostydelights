import './Footer.css';

export default function Footer() {
    return (
        <div className="footer_container">
            {/* Subscribe Section */}
            <div className="footer_subscribe">
                <h2>Get 10% Off on Your First Order!</h2>
                <p>Sign up for our newsletter and enjoy exclusive discounts & updates.</p>
                <div className="footer_input_container">
                    <input type="email" placeholder="Enter your email" />
                    <button>Subscribe</button>
                </div>
            </div>

            {/* Footer Links Section */}
            <div className="footer_links">
                <div className="footer_column">
                    <h3>About Us</h3>
                    <p>Our Story</p>
                    <p>Store Locator</p>
                </div>

                <div className="footer_column">
                    <h3>Support</h3>
                    <p>Help & FAQ</p>
                    <p>Contact</p>
                </div>

                <div className="footer_column">
                    <h3>Account</h3>
                    <p>Register</p>
                    <p>Login</p>
                </div>

                <div className="footer_column">
                    <h3>Legal</h3>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
        </div>
    );
}
