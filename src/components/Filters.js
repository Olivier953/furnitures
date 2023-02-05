import styles from "../styles/Products.module.css"
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { StyledLinkFavorites } from "../styled-components/styleComponents"


function Filters(props) {

  let minPrice = 500;
  let maxPrice = 8000;
  return (
    <>
    <input type="text" placeholder="Search..." className={styles.inputSearch} onChange={(e) => props.handleSearch(e)}/>

    <div className={styles.companiesFilter}>
        <h3>Companies</h3>
        <div className={styles.companiesFilterBtn}>
        <button onClick={props.handleAll}>All</button>
        <button onClick={props.handleIkea}>Ikea</button>
        <button onClick={props.handleMarcos}>Marcos</button>
        <button onClick={props.handleCaressa}>Caressa</button>
        <button onClick={props.handleLiddy}>Liddy</button>
        </div>
    </div>

    <div className={styles.priceFilter}>
        <h3>Price</h3>
        <input type="range" className={styles.inputPrice} 
        onInput={props.handleInput}
        min={minPrice}
        max={maxPrice}
        value={props.price}
        />
        <h3>Value : $ {props.price/100}</h3>
    </div>

    <StyledLinkFavorites to="/favorites">
    <h3 className={styles.favorites}>
        My favorites <AiFillHeart className={styles.heartInput}/>
    </h3>
    </StyledLinkFavorites>
    </>
  )
}

export default Filters