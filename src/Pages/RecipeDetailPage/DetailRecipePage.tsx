// import { IRecipeDetails } from "../../Interfaces/IRecipe";
// import styles from "./DetailRecipePage.module.css";

// interface RecipeDetailPageProps {
//   recipe: IRecipeDetails;
// }

// const RecipeDetailPage: React.FC<RecipeDetailPageProps> = ({ recipe }) => {
//   return (
//     <div className={styles.recipeDetailPage}>
//       <img className={styles.image} src={recipe.profile} alt={recipe.recipe_name} /> 
//       <div className={styles.info}>
//         <h1>{recipe.recipe_name}</h1>
//         <p>{recipe.description}</p>
//         <div className={styles.details}>
//           <span>Difficulty: {recipe.difficulty}</span>
//           <span>Category: {recipe.category}</span>
//           <span>Preparation Time: {recipe.preparation_time}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RecipeDetailPage;

// DetailRecipePage.tsx
// RecipeDetailPage.tsx
import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRecipeBySlug } from "../../Https/Https";
import { IRecipeDetails } from "../../Interfaces/IRecipe";
import styles from "./DetailRecipePage.module.css";

import likeIcon from '../../Assets/icons/RecipeIcons/black/like_icon.svg';
import savedIcon from '../../Assets/icons/RecipeIcons/black/saved_icon.svg';

const RecipeDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [recipe, setRecipe] = useState<IRecipeDetails | null>(null);

  useEffect(() => {
    if (slug) {
      fetchRecipe(slug);
    }
  }, [slug]);

  const fetchRecipe = async (slug: string) => {
    try {
      const response = await getRecipeBySlug(slug);
      setRecipe(response.data);
    } catch (error) {
      console.error("Ошибка при получении деталей рецепта:", error);
    }
  };

  if (!recipe) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className={styles.recipeDetailPage}>
      <img className={styles.image} src={recipe.photo} alt={recipe.recipe_name} />
      <div className={styles.info}>
        <h1>{recipe.recipe_name}</h1>
        <p>{recipe.description}</p>
        <div className={styles.details}>
          <span>Сложность: {recipe.difficulty}</span>
          <span>Категория: {recipe.category}</span>
          <span>Время приготовления: {recipe.preparation_time}</span>
        </div>
      </div>
      <div className={styles.interactions}>
        <span>
        <img src={likeIcon} alt="Like" /> {recipe.likes}
        </span>
        <span>
        <img src={savedIcon} alt="Saved" /> {recipe.favorites}
        </span>
      </div>
      <h2>Ингредиенты</h2>
      <ul>
        {recipe.ingredients.map((ingredient) => (
          <li key={ingredient.id}>{ingredient.amount} {ingredient.unit} {ingredient.ingredient_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeDetailPage;
