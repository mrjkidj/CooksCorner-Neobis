import { IAuthorRecipe } from "../../Interfaces/IRecipe";
import styles from "./RecipeCard.module.css";

interface RecipeCardProps {
  recipe: IAuthorRecipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <div className={styles.recipeCard}>
      <img className={styles.image} src={recipe.image} alt={recipe.title} />
      <div className={styles.info}>
        <h3>{recipe.title}</h3>
        {/* <p>by {recipe.author}</p> Если в IAuthorRecipe нет author, можно удалить эту строку */}
        <div className={styles.stats}>
          <span>{recipe.likes} лайков</span>
          <span>{recipe.comments} комментариев</span>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;

