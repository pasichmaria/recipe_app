import type { Meal as MealApi } from "../api";
export interface Meal extends MealApi {
  isFavorite?: boolean;
}
