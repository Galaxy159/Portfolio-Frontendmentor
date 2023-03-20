export default function Contact() {
  return (
    <>
      <section className="contact">
        <div className="contact__container">
          <div className="contact__content">
            <h3 className="contact__content--headline">Contact</h3>
            <p className="contact__content--text">
              I would love to hear about your project and how I could help.
              Please fill in the form, and I’ll get back to you as soon as
              possible.
            </p>
          </div>
          <form action="" className="contact__form">
            <div className="contact__form--input">
              <input
                className="contact__form--input-name"
                type="text"
                placeholder="NAME"
              />
            </div>
            <div className="contact__form--input">
              <input
                className="contact__form--input-email"
                type="email"
                placeholder="EMAIL"
              />
            </div>
            <div className="contact__form--input">
              <textarea
                className="contact__form--input-message"
                type="text"
                placeholder="MESSAGE"
              ></textarea>
            </div>
            <div className="contact__form--btn">
              <button>SEND MESSAGE</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
