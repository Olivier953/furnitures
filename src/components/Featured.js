import { FeaturedContent, FeaturedTitle, StyledFeaturedBtn } from "../styled-components/styleComponents"

import styles from "../styles/Home.module.css"
import Logos from "./Logos"

function Featured({furnitures, loading, error, productDetail}) {
  console.log(productDetail)
  return (
    <FeaturedContent>
    <FeaturedTitle>
        <span>/</span>
        <h1>Featured</h1>
    </FeaturedTitle>

    <div className={styles.productOverall}>
      {loading && <h3>Wait a moment please</h3>}
            {error && (
                <div>{`There is a problem fetching the post data - ${error}`}</div>
            )}

    {
      furnitures &&
      furnitures.map((furniture) => {
        return (
          <div className={styles.product} key={furniture.id}>
            <img src={furniture.fields.image[0].url} alt="furnitures" className={styles.productImg} />
            <h3>{furniture.fields.name}</h3>
            <p>$ {furniture.fields.price/100}</p>
            
            <Logos furnitures={furnitures}/>
            
          </div>
        )
      })
    }
    
    </div>

    <StyledFeaturedBtn to="/products">Show all</StyledFeaturedBtn>

    </FeaturedContent>
  )
}

export default Featured