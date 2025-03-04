import "./Component-Styles/Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-content">
        <h2>Contact</h2>
        <p>
          I have a deep understanding of full-stack development and a passion
          for creating engaging experiences. I'm always eager to take on new and
          exciting challenges. If you'd like to connect, ask questions, or just
          say hi, my inbox is always open—I’ll do my best to respond quickly!
        </p>
        {/* TODO: Maybe I should create a new email specifically for this  */}
        <a href="mailto:jwzehms@gmail.com" className="cta-button">Email Me<span className="fas fa-envelope"></span></a>
      </div>
    </section>
  );
};

export default Contact;
