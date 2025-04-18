import { Meal } from "@/core/api/types"; 
import { Card } from "@/shared/components/card";
import { Container, Grid , Text } from "@radix-ui/themes";

interface FavoritesProps {
  meals: Meal[];
}
export const Favorites = ({ meals }: FavoritesProps) => {
  const allIngredients = [
    ...new Set(
      meals.flatMap((meal) =>
        Object.keys(meal)
          .filter((key) => key.startsWith("strIngredient") && meal[key as keyof Meal])
          .map((key) => meal[key as keyof Meal]),
      ),
    ),
  ].filter(Boolean);

  return (
    <Container size="4" className="xs:p-4">
      <Text as="p" className="mb-4 text-gray-700">
        Favorite Recipes
      </Text>
      <Grid columns={{ xs: "1", md: "3" }} gap="4" className="mt-4">
        {meals.map((meal) => (
          <Card
            key={meal.idMeal}
            title={meal.strMeal}
            subTitle="Favorite Recipe"
            image={meal.strMealThumb}
            description={meal.strInstructions}
          />
        ))}
      </Grid>
      <Text as="p" className="mt-6 text-gray-700 font-semibold">
        Ingredients
      </Text>
      <div className="flex flex-wrap justify-center gap-2 mt-4">
        {allIngredients.map((ingredient, index) => (
          <span
            key={index}
            className="flex items-center gap-2 px-3 py-1 text-sm font-medium bg-green-100 text-green-700 rounded-full shadow-sm"
          >
            {ingredient}
          </span>
        ))}
      </div>
    </Container>
  );
};
