import "./Footer.scss";
import qlogo from "../../assets/icon/logo.svg";
import madeInUkraine from "../../assets/icon/made-in-ukraine.svg";
import visa from "../../assets/icon/visa.svg";
import mastercard from "../../assets/icon/mastercard.svg";
import googlePay from "../../assets/icon/google-pay.svg";
import applePay from "../../assets/icon/apple-pay.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__left">
          <div className="footer__left--logos">
            <img src={qlogo} alt="Q logo" className="footer__left--Qlogo" />

            <div className="footer__left--ua-container">
              <img
                src={madeInUkraine}
                alt="Made in Ukraine"
                className="footer__left--ua"
              />
            </div>
          </div>

          <span className="footer__left--text">
            AQVEX © 2026 | Все права защищены
          </span>
        </div>

        <div className="footer__payments">
          <img src={mastercard} alt="mastercard" className="footer__payments--mastercard" />
          <img src={visa} alt="visa" className="footer__payments--visa" />
          <img src={applePay} alt="applepay" className="footer__payments--applepay" />
          <img src={googlePay} alt="gpay" className="footer__payments--googlepay" />
        </div>
      </div>
    </footer>
  );
};
