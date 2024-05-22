import { IRecipeDetails } from "../../Interfaces/IRecipe";
import styles from "./DetailRecipePage.module.css";

interface RecipeDetailPageProps {
  recipe: IRecipeDetails;
}

const RecipeDetailPage: React.FC<RecipeDetailPageProps> = ({ recipe }) => {
  return (
    <div className={styles.recipeDetailPage}>
      <img className={styles.image} src={recipe.profile} alt={recipe.recipe_name} /> 
      <div className={styles.info}>
        <h1>{recipe.recipe_name}</h1>
        <p>{recipe.description}</p>
        <div className={styles.details}>
          <span>Difficulty: {recipe.difficulty}</span>
          <span>Category: {recipe.category}</span>
          <span>Preparation Time: {recipe.preparation_time}</span>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetailPage;

