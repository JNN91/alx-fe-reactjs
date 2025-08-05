import { useRecipeStore } from "../store/recipeStore";
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.length === 0 && <p>No recipes added yet.</p>}
      {recipes.map((recipe) => (
        <div key={recipe.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
          <h3><Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link></h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;