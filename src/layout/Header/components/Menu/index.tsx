import AuthAndBasket from "./components/AuthAndBasket"
import Navbar from "./components/Navbar"

import "./index.scss"

const MenuNavbar = () => {
  return (
    <div className="MenuNavbarEQ1">
      <div className="LogoPage">
        <h3>Silverbin</h3>
      </div>

        <Navbar />
        <AuthAndBasket />
    </div>
  )
}

export default MenuNavbar