import sprite from "../assets/images/sprite.svg";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="header__logo">
          <p className="header__logo--text">adamkeyes</p>
        </div>
        <div className="header__social">
          <svg className="header__social--icon" height="24" width="25">
            <use href={`${sprite}#icon-github`} />
          </svg>
          <svg className="header__social--icon" height="23" width="26">
            <use href={`${sprite}#icon-frontendmentor`} />
          </svg>
          <svg className="header__social--icon" height="24" width="25">
            <use href={`${sprite}#icon-linkedin`} />
          </svg>
          <svg className="header__social--icon" height="20" width="24">
            <use href={`${sprite}#icon-twitter`} />
          </svg>
        </div>
      </header>
    </>
  );
}
