import { useState } from "react"
import { AiFillHeart } from "react-icons/ai"

function Favorites() {

const [favorite, setFavorite] = useState(true)

const styles2 = {
  color : "gold"
}

let changeIcon = 
favorite ? <AiFillHeart className="favorites"/> : 
<AiFillHeart className="favorites" style={styles2}/>

function ClickOnFavorite () {
  setFavorite(prevFavorite => !prevFavorite)
}

  return (
    <div>
        <div onClick={() => ClickOnFavorite()}>
            {changeIcon}
            </div>
    </div>
  )
}

export default Favorites