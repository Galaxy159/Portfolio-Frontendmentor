import { useState } from "react";
import error from "../assets/images/error.svg";

export default function Contact() {
  const [isValid, setIsValid] = useState(true);
  const [inputVal, setInputVal] = useState("");
  const validateEmail = function (email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };
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
                onChange={(e) => setInputVal(e.target.value)}
                className={
                  isValid
                    ? "contact__form--input-email"
                    : "contact__form--input-email errorBorder"
                }
                type="email"
                placeholder="EMAIL"
              />
              <p
                className={
                  isValid
                    ? "contact__form--input-error"
                    : "contact__form--input-error show"
                }
              >
                Error, please check your email
              </p>
              <img
                src={error}
                alt=""
                className={
                  isValid
                    ? "contact__form--input-error-img"
                    : "contact__form--input-error-img show"
                }
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
              <button onClick={() => setIsValid(validateEmail(inputVal))}>
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
