// import { IAuthorRecipe } from "../../Interfaces/IRecipe";
// import styles from "./RecipeCard.module.css";

// interface RecipeCardProps {
//   recipe: IAuthorRecipe;
// }

// const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
//   return (
//     <div className={styles.recipeCard}>
//       <img className={styles.image} src={recipe.image} alt={recipe.title} />
//       <div className={styles.info}>
//         <h3>{recipe.title}</h3>
//         <div className={styles.stats}>
//           <span>{recipe.likes} лайков</span>
//           <span>{recipe.comments} комментариев</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RecipeCard;

// RecipeCard.tsx


// RecipeCard.tsx
// RecipeCard.tsx


import { IRecipeCardProps } from "../../Interfaces/IRecipe";
import styles from "./RecipeCard.module.css";
import likeIcon from '../../Assets/icons/RecipeIcons/white/like_icon.svg';
import savedIcon from '../../Assets/icons/RecipeIcons/white/saved_icon.svg';


const RecipeCard: React.FC<IRecipeCardProps> = ({ recipe, onFavorite, onLike }) => {
  return (
    <div className={styles.recipeCard}>
      <img className={styles.photo} src={recipe.image} alt={recipe.title} />
      <h3>{recipe.title}</h3>
      <div className={styles.interactions}>
        <span>
          <img src={likeIcon} alt="Like" /> {recipe.likes}
        </span>
        <span>
          <img src={savedIcon} alt="Saved" /> {recipe.favorites}
        </span>
      </div>
      <div className={styles.actions}>
        {onFavorite && (
          <button onClick={() => onFavorite(recipe.slug)}>
            <img src={savedIcon} alt="Saved" /> В избранное
          </button>
        )}
        {onLike && (
          <button onClick={() => onLike(recipe.slug)}>
            <img src={likeIcon} alt="Like" /> Лайк
          </button>
        )}
      </div>
    </div>
  );
};

export default RecipeCard;
