import { HeaderToggleContent, ToggleBottom, ToggleTop } from "./styleComponents"
import { AiOutlineClose } from "react-icons/ai";


function HeaderToggle(props) {
  return (
    <HeaderToggleContent>
        <ToggleTop>
        <p onClick={props.handleClick}><AiOutlineClose/></p>
        <h3>Your Bag</h3>
        </ToggleTop>

        <ToggleBottom>
            <h3>Total : 0$</h3>
            <button>checkout</button>
        </ToggleBottom>
    </HeaderToggleContent>
  )
}

export default HeaderToggle