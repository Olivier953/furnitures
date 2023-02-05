import { HeaderToggleContent, ToggleBottom, ToggleTop } from "../styled-components/styleComponents"
import { AiOutlineClose} from "react-icons/ai";
import BasketContent from "./BasketContent";

function HeaderToggle(props) {

  return (
    <HeaderToggleContent>
        <ToggleTop>
        <p onClick={props.handleClick}><AiOutlineClose/></p>
        <h3>Your Bag</h3>
        </ToggleTop>
      
      <BasketContent/>

        <ToggleBottom>
            <h3>Total : 0$</h3>
            <button>checkout</button>
        </ToggleBottom>
    </HeaderToggleContent>
  )
}

export default HeaderToggle