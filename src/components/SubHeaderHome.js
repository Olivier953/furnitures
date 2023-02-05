import { SubHeaderHomeContent } from "../styled-components/styleComponents"
import { StyledLinkButton } from "../styled-components/styleComponents"


function SubHeaderHome() {
  return (
    <SubHeaderHomeContent>
        <h1>Rest, Relax, Unwind</h1>
        <p>Embrace your choices - we do</p>
        <StyledLinkButton to="/products">show now</StyledLinkButton>
    </SubHeaderHomeContent>
  )
}

export default SubHeaderHome