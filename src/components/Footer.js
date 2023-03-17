import sprite from "../assets/images/sprite.svg";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__logo">
          <p className="footer__logo--text">adamkeyes</p>
        </div>
        <div className="footer__social">
          <svg className="footer__social--icon" height="24" width="25">
            <use href={`${sprite}#icon-github`} />
          </svg>
          <svg className="footer__social--icon" height="23" width="26">
            <use href={`${sprite}#icon-frontendmentor`} />
          </svg>
          <svg className="footer__social--icon" height="24" width="25">
            <use href={`${sprite}#icon-linkedin`} />
          </svg>
          <svg className="footer__social--icon" height="20" width="24">
            <use href={`${sprite}#icon-twitter`} />
          </svg>
        </div>
      </footer>
    </>
  );
}
