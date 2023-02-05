import { useState } from "react";
import HeaderOtherPages from "../components/HeaderOtherPages";
import Banner from "../components/Banner"
import SingleProduct from "../components/SingleProduct";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function ProductDetail() {

const [header, setHeader] = useState(<HeaderOtherPages/>)
const [product, setProduct] = useState("id")
const [productDetail, setProductDetail] = useState([])
const [error, setError] = useState(null)
const [loading, setLoading] = useState(true)

let params = useParams();

useEffect(() => {
  const getData = async () => {
    try{
      const response = await axios.get(
        `https://course-api.com/javascript-store-single-product?id=${params.name}`
      );
      setProductDetail(response.data);
      
      setError(null);
    } catch(err) {
      setError(err.message);
      setProductDetail(null);
    } finally{
      setLoading(false)
    }
  };
  getData()
}, [params.name])
console.log(productDetail)

  return (
    <div >
      {header}
      <Banner product={product}/>
      <SingleProduct
      productDetail={productDetail}
      error={error}
      loading={loading}
      />
    </div>
  )
}

