import Header from "../components/Header"
import { HomeHeader } from "./stylePages"
import SubHeaderHome from "../components/SubHeaderHome"
import HeaderToggle from "../components/HeaderToggle"
import { useEffect, useState } from "react"
import Featured from "../components/Featured"
import axios from "axios"

function Home() {

const [toggle, setToggle] = useState(false)

function ShowToggle () {
  setToggle(prevToggle => !prevToggle)
}

const [furnitures, setFurnitures] = useState(null)
const [error, setError] = useState(null)
const [loading, setLoading] = useState(true)

useEffect(() => {
        const getData = async () => {
      
            try{
                const response = await axios.get(
                    `https://course-api.com/javascript-store-products`
                );

    setFurnitures(response.data)

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
    <div className="Header">
    <HomeHeader/>
    <Header handleClick={ShowToggle}/>
    <SubHeaderHome/>
    {toggle ? <HeaderToggle handleClick={ShowToggle} /> : ""}
    
    </div>

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