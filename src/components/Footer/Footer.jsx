import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logos">
        <div className="footer__logo">
          <img
            className="footer__logo-image"
            src="/public/fullSizeLogo.svg"
            alt="brand's logo"
          />
        </div>
        <div className="footer__logo">
          <img
            className="footer__logo-image"
            src="/public/app_store.svg"
            alt="app store's logo"
          />
        </div>
        <div className="footer__logo">
          <img
            className="footer__logo-image"
            src="/public/google_play.svg"
            alt="google play store's logo"
          />
        </div>
      </div>
      <div className="footer__links">
        <h5 className="footer__links-title">Company</h5>
        <div>
          <a className="footer__link">About us</a>
          <a className="footer__link">Contact us</a>
          <a className="footer__link">Blog</a>
        </div>
      </div>
      <div className="footer__links">
        <h5 className="footer__links-title">Support</h5>
        <div>
          <a className="footer__link">Faqs</a>
          <a className="footer__link">Privacy Policy</a>
          <a className="footer__link">Terms & Condition</a>
        </div>
      </div>
      <div className="footer__links">
        <h5 className="footer__links-title">Follow us</h5>
        <div>
          <a className="footer__link">Instagram</a>
          <a className="footer__link">Facebook</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
