// Calling Person Icon

import PersonIcon from "../../../../../../../assets/icons/header/menu/Person.svg";

// Style
import "./index.scss"

const SignUpSignIn = () => {
  return (
    <div className="SignUpSide">
      <div className="PersonIcon">
        <img src={PersonIcon} alt="personIcon" />
      </div>

      <div className="SignUpAndSignInBtns">
        <button className="AuthMergeClass">Login</button>
        <span className="lineForBreak">/</span>
        <button className="AuthMergeClass">Register</button>
      </div>
    </div>
  );
};

export default SignUpSignIn;
