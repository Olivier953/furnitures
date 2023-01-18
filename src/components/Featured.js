import { FeaturedContent, FeaturedTitle } from "./styleComponents"

function Featured({furnitures, loading, error}) {
    console.log(furnitures)

  return (
    <FeaturedContent>
    <FeaturedTitle>
        <span>/</span>
        <h1>Featured</h1>
    </FeaturedTitle>

    <div className="products">
      {loading && <h3>Wait a moment please</h3>}
            {error && (
                <div>{`There is a problem fetching the post data - ${error}`}</div>
            )}

    {
      furnitures &&
      furnitures.map((furniture) => {
        return (
          <div key={furniture.id}>
            <img src={furniture.fields.id} alt="" />
            <p>{furniture.fields.image}</p>
          </div>
        )
      })
    }
    </div>

    <button>Show all</button>
    </FeaturedContent>
  )
}

export default Featured