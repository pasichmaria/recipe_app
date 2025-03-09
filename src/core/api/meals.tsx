import { instance } from "@/core";
import { Meal } from "./types";

export const getMealsByFirstLetter = async (
  letter: string
): Promise<Meal[]> => {
  const response = await instance.get<{
    meals: Meal[] | string | null;
  }>(`/search.php?f=${letter}`);
  if (response.status !== 200) {
    return [];
  }
  if (Array.isArray(response.data.meals)) {
    return response.data.meals;
  }
  return [];
};

export const getMealsById = async (id: string) => {
  const response = await instance.get<{
    meals: Meal[] | string | null;
  }>(`lookup.php?i=${id}`);
  if (response.status !== 200) {
    return [];
  }
  if (Array.isArray(response.data.meals)) {
    return response.data.meals;
  }
  return [];
};
