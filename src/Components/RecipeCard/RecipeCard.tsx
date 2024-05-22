import { IRecipeInfo } from '../../Interfaces/IRecipe';
import styles from './RecipeCard.module.css';
import like_icon from '../../Assets/icons/RecipeIcons/white/like_icon.svg';
import saved_icon from '../../Assets/icons/RecipeIcons/white/saved_icon.svg';

interface IRecipeCardProps {
  recipe: IRecipeInfo;
  onFavorite?: (slug: string) => void;
  onLike?: (slug: string) => void;
}

const RecipeCard: React.FC<IRecipeCardProps> = ({ recipe }) => {
  return (
    <div className={styles.recipeCard}>
      <img className={styles.recipePhoto} src={recipe.photo} alt="" />
      <div className={styles.recipeCardInfo}>
        <p className={styles.recipeName}>{recipe.title}</p>
        <p className={styles.recipeAuthor}>by {recipe.author}</p>
        <div className={styles.recipeCardRatings}>
          <p>
            <img src={like_icon} alt="like" />
            {recipe.likes}
          </p>
          <p>
            <img src={saved_icon} alt="save" />
            {recipe.savedCount}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
