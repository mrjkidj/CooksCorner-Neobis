// import { useEffect, useState } from "react";
// import RecipeCard from "../../Components/RecipeCard/RecipeCard";
// import { getAllRecipes} from "../../Api/Api";
// import { IRecipeInfo} from '../../Interfaces/IRecipe'
// import styles from "./HomePage.module.css";

// export default function HomePage() {
//   const [recipes, setRecipes] = useState<IRecipeInfo[]>([]);

//   useEffect(() => {
//     // При монтировании компонента вызываем функцию получения данных для всех рецептов
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       // Получаем все рецепты для отображения на главной странице
//       const allRecipesResponse = await getAllRecipes();
//       // Явно указываем тип данных, которые мы ожидаем получить от getAllRecipes
//       const recipesData: IRecipeInfo[] = allRecipesResponse.data;
//       setRecipes(recipesData);
//     } catch (error) {
//       console.error("Error fetching recipes:", error);
//     }
//   };

//   return (
//     <div className={styles.homePage}>
//       <div className={styles.homePageContent}>
//         <div className={styles.userGreeting}>Hi, Sarthak. UI Designer & Cook</div>
//         <div className={styles.recipeWrapper}>
//           <h2>Category</h2>
//           <div className={styles.recipeCategories}>
//             <button
//               type="button"
//               className={styles.recipeCategory}
//               onClick={fetchData}
//             >
//               Breakfast
//             </button>
//             <button
//               type="button"
//               className={styles.recipeCategory}
//               onClick={fetchData}
//             >
//               Lunch
//             </button>
//             <button
//               type="button"
//               className={styles.recipeCategory}
//               onClick={fetchData}
//             >
//               Dinner
//             </button>
//           </div>
//           <div className={styles.recipeCards}>
//             {recipes.map((recipe) => (
//               <RecipeCard recipe={recipe} key={recipe.slug} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// HomePage.tsx
// HomePage.tsx
import { useEffect, useState } from "react";
import RecipeCard from "../../Components/RecipeCard/RecipeCard";
import { getAllRecipes } from "../../Api/Api";
import { IRecipeInfo } from "../../Interfaces/IRecipe";
import styles from "./HomePage.module.css";

const HomePage: React.FC = () => {
  const [recipes, setRecipes] = useState<IRecipeInfo[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const allRecipesResponse = await getAllRecipes();
      const recipesData: IRecipeInfo[] = allRecipesResponse.data;
      setRecipes(recipesData);
    } catch (error) {
      console.error("Ошибка при получении рецептов:", error);
    }
  };

  return (
    <div className={styles.homePage}>
      <div className={styles.userGreeting}>Hi, Sarthak. UI Designer & Cook</div>
      <div className={styles.recipeWrapper}>
        <h2 className={styles.category} >Category</h2>
        <div className={styles.recipeCategories}>
          <button type="button" className={styles.recipeCategory} onClick={fetchData}>Breakfast</button>
          <button type="button" className={styles.recipeCategory} onClick={fetchData}>Lunch</button>
          <button type="button" className={styles.recipeCategory} onClick={fetchData}>Dinner</button>
        </div>
        <div className={styles.recipeCards}>
          {recipes.map((recipe) => (
            <RecipeCard recipe={recipe} key={recipe.slug} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
