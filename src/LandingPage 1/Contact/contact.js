import "./contact.css";
function Contact(){
    return(
        <div className="contact-content">
            <div className="contact-text">
                <h2>CONTACT US</h2>
                <p>If you have any questions or inquiries,<br/> feel free to reach out to us!<br/> You can also visit our website<br/> <span className="website"> www.alternativeeducation.com</span> to know more about us. </p>
                <div className="contact-info">
                    <h3>Email:</h3>
                    <p>AltEducation@gmail.com</p>
                    <h3>Phone:</h3>
                    <p>+1 (123) 456-7890</p>
                    <h3>Address:</h3>
                    <p>1234 Education Lane,<br/> Learning City, ST 56789</p>
                </div>
            </div>
            <div className="contact-form">
                <h2>GET IN TOUCH</h2>
                <form>
                    <div className="form-group">
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
                    <button type="submit" className="submit">Send Message</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;