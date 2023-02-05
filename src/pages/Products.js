import { useContext } from "react"
import Banner from "../components/Banner"
import Filters from "../components/Filters"
import HeaderOtherPages from "../components/HeaderOtherPages"
import HeaderToggle from "../components/HeaderToggle"
import ProductList from "../components/ProductList"
import styles from "../styles/Products.module.css"
import FurnituresContext from "../utils/FurnituresContext"

function Products() {
    const { product, 
            toggle, 
            furnitures,
            error,
            loading,
            filter,
            price,
            showToggle,
            handleSearch,
            handleAll,
            handleCaressa,
            handleIkea,
            handleInput,
            handleLiddy, 
            handleMarcos,
            addFavorite,
            addBasket
          } = useContext(FurnituresContext)
  
   return (
    <>
    <div className="header">
      <HeaderOtherPages handleClick={showToggle}/>
      <Banner product={product}/>
      {toggle ?  <HeaderToggle handleClick={showToggle}/> : ""} 
      </div>

      <div className={styles.productMainContent}>
        <div className={styles.productFilters}>
        <Filters 
        handleSearch={handleSearch}
        handleIkea={handleIkea}
        handleAll={handleAll}
        handleCaressa={handleCaressa}
        handleLiddy={handleLiddy}
        handleMarcos={handleMarcos}
        price={price}
        handleInput={handleInput}
        />
        </div>
        <div className={styles.productList}>
        <ProductList
        furnitures={furnitures}
        error={error}
        loading={loading}
        filter={filter}
        price={price}
        addFavorite={addFavorite}
        addBasket={addBasket}
        />
        </div>
      </div>
      
      </>
  )
}

export default Products