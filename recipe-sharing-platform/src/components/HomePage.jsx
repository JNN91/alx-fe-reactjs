import { useState, useEffect } from "react";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((err) => console.error("Error loading recipes:", err));
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Recipe Sharing Platform
      </h1>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transform transition duration-300 hover:scale-105"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2 hover:text-blue-600 transition-colors duration-200">
                {recipe.title}
              </h2>
              <p className="text-gray-600 text-sm">{recipe.summary}</p>
              <a
                href={`/recipe/${recipe.id}`}
                className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition-colors"
              >
                View Recipe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
