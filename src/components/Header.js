import { AiOutlineShoppingCart } from "react-icons/ai"
import { StyledLink } from "../styled-components/styleComponents"
import { HeaderContent, HeaderLeft, HeaderRight, HeaderRightBasket, HeaderTitle, HeaderRightBasketNumber } from "../styled-components/styleComponents"

function Header(props) {

  return (
    <HeaderContent className="header-content-home">
        <HeaderLeft className="header-left-home">
            <li><StyledLink to="/home">Home</StyledLink></li>
            <li><StyledLink to="/products">Product</StyledLink></li>
            <li><StyledLink to="/about">About</StyledLink></li>
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