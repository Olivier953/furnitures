import { useState } from "react"
import Banner from "../components/Banner"
import HeaderOtherPages from "../components/HeaderOtherPages"

function About() {
const [product, setProduct] = useState("About")

  return (
    <>
  <HeaderOtherPages/>
  <Banner product={product}/>
    </>
  )
}

export default About