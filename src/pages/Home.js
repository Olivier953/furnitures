import Header from "../components/Header"
import SubHeaderHome from "../components/SubHeaderHome"
import HeaderToggle from "../components/HeaderToggle"
import { useEffect, useState } from "react"
import Featured from "../components/Featured"
import axios from "axios"

import styles from "../styles/Home.module.css"

function Home() {
const [toggle, setToggle] = useState(false)
const [furnitures, setFurnitures] = useState(null)
const [error, setError] = useState(null)
const [loading, setLoading] = useState(true)

const ShowToggle = () => setToggle(prevToggle => !prevToggle)

useEffect(() => {
        const getData = async () => {
      
            try{
                const response = await axios.get(
                    `https://course-api.com/javascript-store-products?`
                );
    
    const featured = response.data.filter((product) => product.fields.featured === true);

    setFurnitures(featured)


    localStorage.setItem('dataStored', JSON.stringify(response.data));

      setError(null);
    } catch (err) {
      setError(err.message);
      setFurnitures(null);
    } finally {
      setLoading(false);
    }
    };
    getData()
    }, [])

  return (
    <>
    <div className={styles.header}/>
    <Header handleClick={ShowToggle}/>
    <SubHeaderHome/>
    {toggle ? <HeaderToggle handleClick={ShowToggle} /> : ""}
    
    <div className="featured">
    <Featured
    furnitures={furnitures}
    error={error}
    loading={loading}
    />
    </div>
    </>
  )
}

export default Home