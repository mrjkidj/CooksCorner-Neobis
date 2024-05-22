import axios, { AxiosResponse } from "axios";
import { IRecipe, IIngredient, IRecipeInfo, IRecipeDetails, IUser } from "../Interfaces/IRecipe";

const instance = axios.create({
  baseURL: "https://ramazan-imashov-auth.pp.ua", 
  headers: {
    Accept: "*/*",
    "Content-Type": "application/json",
  },
});

interface UserLogin {
  email: string;
  password: string;
}

export interface UserRegister {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

const registrationURL = "https://ramazan-imashov-auth.pp.ua/api/v1/accounts/register/";

export const ApiRegistration = async (data: UserRegister): Promise<AxiosResponse> => {
  try {
    const response = await axios.post(registrationURL, data, {
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error: any) {
    if (error.response) {
      console.error("Server response error:", error.response.data);
    } else if (error.request) {
      console.error("Network error:", error.request);
    } else {
      console.error("Error:", error.message);
    }
    throw error;
  }
};

export const ApiAuth = async (data: UserLogin): Promise<any> => {
  try {
    console.log(data);
    const response = await instance.post("/api/v1/accounts/login/", data);
    return response;
  } catch (error: any) {
    console.log("error>>>", error);
  }
};

// Функция для получения изображений рецептов
export const getRecipeImages = async (): Promise<AxiosResponse<IRecipe[]>> => {
  try {
    return await instance.get("/api/v1/recipe/add_image");
  } catch (error) {
    console.error("Get recipe images error:", error);
    throw error;
  }
};

// Функция для получения ингредиентов рецептов
export const getRecipeIngredients = async (): Promise<AxiosResponse<IIngredient[]>> => {
  try {
    return await instance.get("/api/v1/recipe/add_ingredient");
  } catch (error) {
    console.error("Get recipe ingredients error:", error);
    throw error;
  }
};

// Функция для получения списка всех рецептов
export const getAllRecipes = async (): Promise<AxiosResponse<IRecipeInfo[]>> => {
  try {
    return await instance.get("/api/v1/recipe/recipe");
  } catch (error) {
    console.error("Get all recipes error:", error);
    throw error;
  }
};

// Функция для получения деталей конкретного рецепта по его slug
export const getRecipeBySlug = async (slug: string): Promise<AxiosResponse<IRecipeDetails>> => {
  try {
    return await instance.get(`/api/v1/recipe/recipe/${slug}`);
  } catch (error) {
    console.error(`Get recipe by slug (${slug}) error:`, error);
    throw error;
  }
};

// Получение информации об авторе
export const getAuthorInfo = async (slug: string): Promise<AxiosResponse<IUser>> => {
  try {
    return await instance.get(`/api/v1/recipe/recipe/${slug}`);
  } catch (error) {
    console.error(`Get author info (${slug}) error:`, error);
    throw error;
  }
};

// Добавление изображения к рецепту
export const addRecipeImage = async (slug: string, imageData: FormData): Promise<AxiosResponse> => {
  try {
    return await instance.post(`/api/v1/recipe/recipe/${slug}/add_image`, imageData);
  } catch (error) {
    console.error(`Add recipe image (${slug}) error:`, error);
    throw error;
  }
};

// Добавление ингредиента к рецепту
export const addRecipeIngredient = async (slug: string, ingredientData: IIngredient): Promise<AxiosResponse> => {
  try {
    return await instance.post(`/api/v1/recipe/recipe/${slug}/add_ingredient`, ingredientData);
  } catch (error) {
    console.error(`Add recipe ingredient (${slug}) error:`, error);
    throw error;
  }
};

// Добавление комментария к рецепту
export const addRecipeComment = async (slug: string, commentData: { text: string }): Promise<AxiosResponse> => {
  try {
    return await instance.post(`/api/v1/recipe/recipe/${slug}/comment`, commentData);
  } catch (error) {
    console.error(`Add recipe comment (${slug}) error:`, error);
    throw error;
  }
};

// Добавление рецепта в избранное
export const addRecipeToFavorites = async (slug: string): Promise<AxiosResponse> => {
  try {
    return await instance.post(`/api/v1/recipe/recipe/${slug}/favorites`);
  } catch (error) {
    console.error(`Add recipe to favorites (${slug}) error:`, error);
    throw error;
  }
};

// Лайк рецепта
export const likeRecipe = async (slug: string): Promise<AxiosResponse> => {
  try {
    return await instance.post(`/api/v1/recipe/recipe/${slug}/like`);
  } catch (error) {
    console.error(`Like recipe (${slug}) error:`, error);
    throw error;
  }
};

// Обновление рецепта
export const updateRecipe = async (slug: string, recipeData: IRecipeDetails): Promise<AxiosResponse> => {
  try {
    return await instance.put(`/api/v1/recipe/recipe/${slug}`, recipeData);
  } catch (error) {
    console.error(`Update recipe (${slug}) error:`, error);
    throw error;
  }
};

// Частичное обновление рецепта
export const patchRecipe = async (slug: string, recipeData: Partial<IRecipeDetails>): Promise<AxiosResponse> => {
  try {
    return await instance.patch(`/api/v1/recipe/recipe/${slug}`, recipeData);
  } catch (error) {
    console.error(`Patch recipe (${slug}) error:`, error);
    throw error;
  }
};

// Удаление рецепта
export const deleteRecipe = async (slug: string): Promise<AxiosResponse> => {
  try {
    return await instance.delete(`/api/v1/recipe/recipe/${slug}`);
  } catch (error) {
    console.error(`Delete recipe (${slug}) error:`, error);
    throw error;
  }
}