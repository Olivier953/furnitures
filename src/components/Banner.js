import styles from "../styles/Products.module.css"

function Banner({product}) {

  return (
    <>
    <div className={styles.bannerContent}>
        <div className={styles.bannerTitle}>
            / {product}
        </div>
    </div>
    </>
  )
}

export default Banner