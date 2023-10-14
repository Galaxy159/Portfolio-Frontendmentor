import heroMobile from "../assets/images/image-profile-mobile.webp";
import heroTablet from "../assets/images/image-profile-tablet.webp";
import heroDesktop from "../assets/images/image-profile-desktop.webp";
import bgPartternRings from "../assets/images/pattern-rings.svg";
import bgPartterncircle from "../assets/images/pattern-circle.svg";

export default function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero__photo">
          <picture>
            <source srcSet={heroDesktop} media="(min-width: 1110px)" />
            <source srcSet={heroTablet} media="(min-width: 768px)" />
            <img src={heroMobile} alt="" className="hero__photo--img" />
          </picture>
          <img
            src={bgPartterncircle}
            alt=""
            className="hero__photo--bgPattern-circle"
          />
          <img
            src={bgPartternRings}
            alt=""
            className="hero__photo--bgPattern-rings"
          />
        </div>
        <img src={bgPartternRings} alt="" className="hero__bgPattern-rings" />
        <div className="hero__content">
          <h1 className="hero__content--headline">
            Nice to<br className="hero__content--headline-break"></br> meet you!
            I'm <span>Adam Keyes</span>.
          </h1>
          <p className="hero__content--text">
            Based in the UK, I’m a front-end developer
            <br className="hero__content--headline-break"></br> passionate about
            building accessible web apps
            <br className="hero__content--headline-break"></br> that users love.
          </p>
          <button className="hero__content--btn">CONTACT ME</button>
        </div>
      </section>
    </>
  );
}
