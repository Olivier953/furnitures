import { GiMagnifyingGlass } from "react-icons/gi"
import { AiOutlineShoppingCart } from "react-icons/ai"
import styles from "../styles/Home.module.css"
import { StyledLogoMagnify } from "../styled-components/styleComponents"

function Logos() {
  
  return (
    <>
                <div className={styles.featuredToggleLogo} >
                                            
                    <div className={styles.featuredLogo} >

                        <div className={styles.logoMagnify}>
                        <StyledLogoMagnify to="/product/">
                        <GiMagnifyingGlass />
                        </StyledLogoMagnify>
                        </div>
                        <div className={styles.logoBasket}>
                        <AiOutlineShoppingCart />
                        </div>

                    </div>
                    
                </div>

    </>
  )
}

export default Logos

/*
onMouseEnter={MouseOver} 
                    onMouseLeave={MouseOut}
*/