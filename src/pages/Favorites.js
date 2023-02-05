import { useContext } from "react"
import { useState } from "react"
import Banner from "../components/Banner"
import HeaderOtherPages from "../components/HeaderOtherPages"
import FurnituresContext from "../utils/FurnituresContext"
import styles from "../styles/Favorites.module.css"

function Favorites() {

const {findFavorite, removeFavorite} = useContext(FurnituresContext)
const [product] = useState("My Favorite.s")

  return (
    <div>
        <HeaderOtherPages/>
        <Banner product={product}/>
        <div className={styles.favoritesMain}>
        {
          findFavorite.map((favorite) => {
            return(
              <div key={favorite.id} className={styles.favoritesContent}>
                <img src={favorite.fields.image[0].url} alt="" />
                <h3>{favorite.fields.name}</h3>
                <button onClick={() => {removeFavorite(favorite.id)}}>remove</button>
              </div>
            )
          })
        }
    </div>
    </div>
  )
}

export default Favorites