import styles from "../styles/ToggleMenu.module.css"
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { useContext, useState } from "react";
import FurnituresContext from "../utils/FurnituresContext"

function BasketContent() {

  const {findBasket, removeBasket} = useContext(FurnituresContext)
  const [counter, setCounter] = useState(1)

  function Add () {
    setCounter(prevCount => prevCount +1)
  }

  function Sub () {
    setCounter(prevCount => prevCount -1)
  }
  return (
    <>
        {
        findBasket.map((basket) => {
          return(
            <div className={styles.toggleAll}>
            <div key={basket.id} className={styles.toggleMenuContent}>
              <img src={basket.fields.image[0].url} alt="" />
              <h3>{basket.fields.name}</h3>
              <button onClick={() => {removeBasket(basket.id)}}>remove</button>
            </div>
            <div className={styles.toggleRight}>
              <AiOutlineCaretUp onClick={Add}/>
              <h3>{counter}</h3>
              <AiOutlineCaretDown onClick={Sub}/>
            </div>
            </div>
          )
        })
      }
    </>
  )
}
export default BasketContent

/*

*/