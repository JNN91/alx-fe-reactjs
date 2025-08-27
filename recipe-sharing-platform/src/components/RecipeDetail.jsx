import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const foundRecipe = data.find((r) => r.id === parseInt(id));
        setRecipe(foundRecipe);
      })
      .catch((err) => console.error("Error loading recipe:", err));
  }, [id]);

  if (!recipe) {
    return (
      <div className="text-center p-10 text-gray-600">
        Loading recipe details...
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 max-w-3xl">
      {/* Back link */}
      <Link
        to="/"
        className="inline-block mb-6 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
      >
        ← Back to Recipes
      </Link>

      {/* Recipe Card */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-md mb-6"
        />

        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          {recipe.title}
        </h1>
        <p className="text-gray-600 mb-6">{recipe.summary}</p>

        {/* Ingredients Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">
            Ingredients
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>

        {/* Instructions Section */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">
            Instructions
          </h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            {recipe.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
