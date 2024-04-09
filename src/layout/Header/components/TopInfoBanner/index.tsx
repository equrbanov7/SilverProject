//import components
import LogoText from "../../../../components/LogoText";

//import Style
import "./index.scss";

// import Image
import PhoneBanner from "../../../../assets/icons/header/phoneHeader.svg";
import MailBanner from "../../../../assets/icons/header/mailHeader.svg";

// social Media Icons
import Instagram from "../../../../assets/icons/header/Instagram.svg";
import Youtube from "../../../../assets/icons/header/Youtube.svg";
import Facebook from "../../../../assets/icons/header/Facebook.svg";
import Twitter from "../../../../assets/icons/header/Twitter.svg";

const TopInfoBanner = () => {
  return (
    <div className="topBannerHeaderEQ1">
      <div className="catchContactInfo">
        <LogoText Info="(225) 555-0118" Icon={PhoneBanner} />
        <LogoText Info="michelle.rivera@example.com" Icon={MailBanner} />
      </div>

      <div className="centralBanner">
        <LogoText Info="Follow Us  and get a chance to win 80% off" />
      </div>

      <div className="socialMedias">
        <LogoText Info="Follow us :" />
        <div className="mediaIcons">
          <a
            href="https://www.instagram.com/accounts/login/?hl=en"
            target="_blank"
          >
            <div className="imgMedia">
              <img src={Instagram} alt="instagram" />
            </div>
          </a>

          <a href="https://www.youtube.com/"  target="_blank">
            <div className="imgMedia">
              <img src={Youtube} alt="Youtube" />
            </div>
          </a>
          <a href="https://www.facebook.com/"  target="_blank">
            <div className="imgMedia">
              <img src={Facebook} alt="Facebook" />
            </div>
          </a>

          <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Fhome"  target="_blank">
            <div className="imgMedia">
              <img src={Twitter} alt="Twitter" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopInfoBanner;
