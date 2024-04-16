// Callling Icons And Componenets

import SearchIcon from "../../../../../../../assets/icons/header/menu/Search.svg"
import TrolleyIcon from "../../../../../../../assets/icons/header/menu/Trolley.svg"
import FavoriteIcon from "../../../../../../../assets/icons/header/menu/Heart.svg"


import LogoText from "../../../../../../../components/LogoText"

//Style
import "./index.scss"

const BasketItems = () => {
  return (
    <div className="BasketItems">
        <LogoText Icon={SearchIcon} />
        <LogoText Icon= {TrolleyIcon} Info="1" />
        <LogoText  Icon= {FavoriteIcon} Info="1"/>
    </div>
  )
}

export default BasketItems