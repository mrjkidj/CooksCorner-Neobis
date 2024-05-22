// import { useEffect, useState } from "react";
// import { IUser, IRecipe, IRecipeInfo } from "../../Interfaces/IRecipe";
// import { getAuthorInfo, addRecipeToFavorites, likeRecipe } from "../../Api/Api";
// import RecipeCard from "../../Components/RecipeCard/RecipeCard";
// import styles from "./AuthorPage.module.css";

// interface AuthorPageProps {
//   slug: string;
// }

// // Добавляем недостающие свойства к типу IRecipe
// interface IRecipeWithInfo extends IRecipe {
//   recipe_name: string;
//   profile: string;
// }

// const AuthorPage: React.FC<AuthorPageProps> = ({ slug }) => {
//   const [author, setAuthor] = useState<IUser | null>(null);

//   useEffect(() => {
//     fetchAuthorInfo();
//   }, [slug]);

//   const fetchAuthorInfo = async () => {
//     try {
//       const response = await getAuthorInfo(slug);
//       setAuthor(response.data);
//     } catch (error) {
//       console.error("Error fetching author info:", error);
//     }
//   };

//   const handleFavorite = async (recipeSlug: string) => {
//     try {
//       await addRecipeToFavorites(recipeSlug);
//       fetchAuthorInfo();
//     } catch (error) {
//       console.error("Error adding recipe to favorites:", error);
//     }
//   };

//   const handleLike = async (recipeSlug: string) => {
//     try {
//       await likeRecipe(recipeSlug);
//       fetchAuthorInfo();
//     } catch (error) {
//       console.error("Error liking recipe:", error);
//     }
//   };

//   if (!author) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className={styles.authorPage}>
//       <div className={styles.authorInfo}>
//         <img className={styles.avatar} src={author.avatar} alt={author.username} />
//         <div className={styles.info}>
//           <h2>{author.username}</h2>
//           <p>{author.bio}</p>
//           <div className={styles.stats}>
//             <span>{author.postsCount} Posts</span>
//             <span>{author.followersCount} Followers</span>
//             <span>{author.followingCount} Following</span>
//           </div>
//           {/* <button onClick={handleFollow}>{author.isFollowed ? "Unfollow" : "Follow"}</button> */}
//         </div>
//       </div>
//       <div className={styles.recipes}>
//         {author.recipes.map((recipe) => (
//           <RecipeCard key={recipe.slug} recipe={recipe as IRecipeWithInfo} onFavorite={handleFavorite} onLike={handleLike} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AuthorPage;




import { IUser } from "../../Interfaces/IRecipe";
import RecipeCard from "../../Components/RecipeCard/RecipeCard";
import styles from "./AuthorPage.module.css";

interface AuthorPageProps {
  author: IUser;
}

const AuthorPage: React.FC<AuthorPageProps> = ({ author }) => {
  return (
    <div className={styles.authorPage}>
      <div className={styles.authorInfo}>
        <img className={styles.avatar} src={author.avatar} alt={author.username} />
        <div className={styles.info}>
          <h2>{author.username}</h2>
          <p>{author.bio}</p>
          <div className={styles.stats}>
            <span>{author.postsCount} posts</span>
            <span>{author.followersCount} followers</span>
            <span>{author.followingCount} following</span>
          </div>
        </div>
      </div>
      <div className={styles.recipes}>
        {author.recipes.map(recipe => (
          <RecipeCard key={recipe.slug} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default AuthorPage;
