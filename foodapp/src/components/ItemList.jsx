export default function ItemList({ food, isLoading }) {
  return (
    <div>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        food.extendedIngredients.map((item) => (
          <div>
            <img
              src={
                `https://spoonacular.com/cdn/ingredients_100x100/` + item.image
              }
              alt=""
            />
            <h4>{item.name}</h4>
            <h4>
              {item.amount} {item.unit}
            </h4>
          </div>
        ))
      )}
      {}
    </div>
  );
}
