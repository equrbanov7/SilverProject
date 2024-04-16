import React from 'react'

//Icon

// import IconTest from "../../assets/icons/header/phoneHeader.svg";

// Scss Style
import "./index.scss";


//Props Types

interface LogoTextProps {
  Info?: string;
  Icon?: string;
}



const LogoText: React.FC<LogoTextProps> = ({Info, Icon}) => {
  return (
    <div className="LogoTextEQ1">
      {
        Icon && <div className="LogoIcon">
        <img src={Icon} alt="icon" />
      </div>
      }
      
      {Info && <h6 className="LogoTextEQ1Text">{Info}</h6> }
      
    </div>
  );
};

export default LogoText;
