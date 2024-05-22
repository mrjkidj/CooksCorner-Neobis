export interface IUser {
  id: number;
  username: string;
  avatar: string;
  bio: string;
  postsCount: number;
  followersCount: number;
  followingCount: number;
  isFollowing?: boolean;
}

export interface IRecipe {
  id: number;
  photo: string;
  title: string;
  likes: number;
  category: string;
  author: string;
  savedCount: number;
  slug: string;
}

export interface IIngredient {
  id: number;
  ingredient_name: string;
  amount: number;
  unit: string;
  recipe_id: string;
}

export interface IRecipeInfo {
  slug: string;
  recipe_name: string;
  profile: string;
  id: number;
  photo: string;
  title: string;
  likes: number;
  category: string;
  author: string;
  savedCount: number;
}

export interface IRecipeDetails {
  slug: string;
  profile: string;
  recipe_name: string;
  description: string;
  difficulty: string;
  category: string;
  preparation_time: string;
}

export interface IAuthorRecipe {
  slug: string;
  title: string;
  image: string;
  likes: number;
  favorites: number;
}

export interface IRecipeCardProps {
  recipe: IRecipeInfo;
  onFavorite?: (slug: string) => void;
  onLike?: (slug: string) => void;
}


const users: IUser[] = [];

const recipes: IRecipe[] = [];

const ingredients: IIngredient[] = [];

const recipeInfos: IRecipeInfo[] = [];

const recipeDetailsArray: IRecipeDetails[] = [];

const authorRecipes: IAuthorRecipe[] = [];

const recipeCardPropsArray: IRecipeCardProps[] = [];