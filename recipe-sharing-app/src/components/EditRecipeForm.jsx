import { useState } from 'react';
import { useRecipeStore } from '../store/recipeStore';

function EditRecipeForm({ recipe }) {
  const [form, setForm] = useState({ ...recipe });
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe(recipe.id, form);
    alert('Recipe updated!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" value={form.title} onChange={handleChange} />
      <textarea name="description" value={form.description} onChange={handleChange} />
      <button type="submit">Update</button>
    </form>
  );
}

export default EditRecipeForm;