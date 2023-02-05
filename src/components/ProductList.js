import { AiOutlineShoppingCart } from "react-icons/ai"
import { GiMagnifyingGlass } from "react-icons/gi"
import { StyledLogoMagnify } from "../styled-components/styleComponents"
import styles from "../styles/Home.module.css"
import Favorites from "./favorites"

function ProductList({filter, error, loading, price, addFavorite, addBasket}) {

  return (
    <>
    <div className="product-content">
      {loading && <h3>Wait a moment please</h3>}
            {error && (
                <div>{`There is a problem fetching the post data - ${error}`}</div>
            )}
                      
            { 
      filter.filter( furniture => { return furniture.fields.price > parseInt(price, 10) }).map( furniture => { 
        
        return <div className={styles.product} key={furniture.id}>
          <img src={furniture.fields.image[0].url} alt="furnitures" className="product-img"/>
            <h3>{furniture.fields.name}</h3>
            { furniture.fields.price/100} &euro;
            <div onClick={() => {addFavorite(furniture.id)}}>
            <Favorites />
            </div>
             <div className={styles.featuredToggleLogo} >
                                            
                    <div className={styles.featuredLogo} >

                        <div className={styles.logoMagnify}>
                        <StyledLogoMagnify to={"/product/" + furniture.id}>
                        <GiMagnifyingGlass  />
                        </StyledLogoMagnify>
                        </div>
                        <div className={styles.logoBasket}>
                        <AiOutlineShoppingCart onClick={() => addBasket(furniture.id)}/>
                        </div>

                    </div>
                    
                </div>
        </div>
          
        
      })
      
      }
            
    
    </div>
    </>
  )
}

export default ProductList

/*
<PriceFilter 
            filter={filter}
            price={price}
            />
*/