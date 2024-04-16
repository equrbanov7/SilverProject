import SignUpSignIn from "./Auth";
import BasketItems from "./Basket";

import "./index.scss"

const AuthAndBasket = () => {
  return (
    <div className="AuthAndBasket">
      <SignUpSignIn />

      <BasketItems />

    </div>
  );
};

export default AuthAndBasket;
