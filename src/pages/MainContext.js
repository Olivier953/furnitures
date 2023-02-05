import axios from "axios"
import { useEffect, useState } from "react"
import FurnituresContext from "../utils/FurnituresContext"

const MainContext = ({children}) => {
  const [product] = useState("Products")
  const [toggle, setToggle] = useState(false)
  const [furnitures, setFurnitures] = useState([])
  const [favorite, setFavorite] = useState([])
  const [error, setError] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState([])
  const [price, setPrice] = useState(500)


  useEffect(() => {
        const getData = async () => {
      
            try{
                const response = await axios.get(
                    `https://course-api.com/javascript-store-products?`
                );
    
    setFurnitures(response.data)
    setFilter(response.data)
    setFavorite(response.data)

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
    

const showToggle = () => setToggle(prevToggle => !prevToggle)

const handleSearch = (e) => {
let value = e.target.value.toLowerCase();
let result = [];
result = furnitures.filter((data) => {
return data.fields.name.search(value) !== -1;
});
setFilter(result);
}

const handleAll = () => {
let result = [];
result = furnitures.filter((data) => {
return data
})
setFilter(result)
}

const handleIkea = () => {
let result = [];
result = furnitures.filter((data) => {
return data.fields.company === "ikea"
})
setFilter(result)
}

const handleMarcos = () => {
let result = [];
result = furnitures.filter((data) => {
return data.fields.company === "marcos"
})
setFilter(result)
}


const handleCaressa = () => {
let result = [];
result = furnitures.filter((data) => {
return data.fields.company === "caressa"
})
setFilter(result)
}

const handleLiddy = () => {
let result = [];
result = furnitures.filter((data) => {
return data.fields.company === "liddy"
})
setFilter(result)
}

const handleInput = (e) => {
  setPrice(e.target.value)
}

let findFavorite = favorite.filter(Meal => 
   favorite.includes(Meal.id)
   )

const addFavorite = id => {
  if(!favorite.includes(id)) 
  setFavorite(favorite.concat(id))
  console.log(id)
}

const removeFavorite = id => {
    let index = favorite.indexOf(id);
    let temp = [...favorite.slice(0, index), ...favorite.slice(index + 1)];
    setFavorite(temp);
}

let findBasket = favorite.filter(Meal => 
   favorite.includes(Meal.id)
   )

const addBasket = id => {
  if(!favorite.includes(id)) 
  setFavorite(favorite.concat(id))
  console.log(id)
}

const removeBasket = id => {
    let index = favorite.indexOf(id);
    let temp = [...favorite.slice(0, index), ...favorite.slice(index + 1)];
    setFavorite(temp);
}

  return (
    <FurnituresContext.Provider 
    value={{product, 
            toggle, 
            furnitures,
            error,
            loading,
            filter,
            price,
            showToggle,
            handleSearch,
            handleAll,
            handleCaressa,
            handleIkea,
            handleInput,
            handleLiddy, 
            handleMarcos,
            findFavorite,
            addFavorite,
            favorite,
            removeFavorite,
            findBasket,
            addBasket,
            removeBasket
            }}>

        {children}

    </FurnituresContext.Provider>
  )
}

export default MainContext