import styles from "../styles/SingleProduct.module.css"

function SingleProduct({productDetail, error, loading}) {
  return (
    <div className={styles.singleProductMain}>
      {loading && <h3>Wait a moment please</h3>}
            {error && (
                <div>{`There is a problem fetching the post data - ${error}`}</div>
            )}

          <div className={styles.singleProductContent}>
          <img src={productDetail?.fields?.image[0]?.url} alt="" />
          <h3>{productDetail?.fields?.name}</h3>

          <p>{productDetail?.fields?.description}</p>
          </div>
  
    </div>
  )
}

export default SingleProduct