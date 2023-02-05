import { AiOutlineShoppingCart } from "react-icons/ai"
import { HeaderContent, HeaderLeft, HeaderRight, HeaderRightBasket, HeaderTitle, HeaderRightBasketNumber } from "../styled-components/styleComponents"
import { StyledLinkOtherPages } from "../styled-components/styleComponents"

export default function HeaderOtherPages(props) {

  return (
    <HeaderContent className="header-content-home">
        <HeaderLeft className="header-left-home">
            <li><StyledLinkOtherPages to="/home">Home</StyledLinkOtherPages></li>
            <li><StyledLinkOtherPages to="/products">Product</StyledLinkOtherPages></li>
            <li><StyledLinkOtherPages to="/about">About</StyledLinkOtherPages></li>
        </HeaderLeft>

        <HeaderTitle className="header-title-color">
            comfy
        </HeaderTitle>

        <HeaderRight>

        <HeaderRightBasket className="basket" onClick={props.handleClick}>
            <AiOutlineShoppingCart />
        </HeaderRightBasket>

        <HeaderRightBasketNumber>
          1
        </HeaderRightBasketNumber>
        </HeaderRight>
    </HeaderContent>
  )
}
