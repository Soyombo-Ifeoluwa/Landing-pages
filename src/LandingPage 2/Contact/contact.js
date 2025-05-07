import "./contact.css";



function Contact() {
    return(
        <div className="contact-container">
            <h1>GET IN TOUCH</h1>
            <form>
                    <div className="form-group1">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>
                    <button type="submit" className="submit-BUTTON">Send Message</button>
                </form>
                <p>© 2025 KARIS. All rights reserved.</p>
        </div>
    )
};

export default Contact;