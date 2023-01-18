import { AiOutlineShoppingCart } from "react-icons/ai"
import { HeaderContent, HeaderLeft, HeaderRight, HeaderRightBasket, HeaderTitle, HeaderRightBasketNumber } from "./styleComponents"

function Header(props) {

  return (
    <HeaderContent className="header-content-home">
        <HeaderLeft className="header-left-home">
            <li>Home</li>
            <li>Products</li>
            <li>About</li>
        </HeaderLeft>

        <HeaderTitle>
            comfy
        </HeaderTitle>

        <HeaderRight>

        <HeaderRightBasket onClick={props.handleClick}>
            <AiOutlineShoppingCart />
        </HeaderRightBasket>

        <HeaderRightBasketNumber>
          1
        </HeaderRightBasketNumber>
        </HeaderRight>
    </HeaderContent>
  )
}

export default Header