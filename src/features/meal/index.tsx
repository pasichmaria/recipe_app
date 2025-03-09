import type { Meal as MealType } from "@/core/hooks/types";
import { Card, Row, Typography } from "@/shared";
import { Button, Container, Grid } from "@radix-ui/themes";

interface MealProps {
  meal: MealType;
}

export const Meal = ({ meal }: MealProps) => {
  const ingredients = Object.keys(meal)
    .filter((key) => key.startsWith("strIngredient") && meal[key as keyof MealType])
    .map((key, index) => ({
      ingredient: meal[key as keyof MealType] as string,
      measure: meal[`strMeasure${index + 1}` as keyof MealType] as string,
    }))
    .filter((item) => item.ingredient.trim() !== "");

  return (
    <Container size="3">
      <Card
        timeClamp={60}
        title={meal.strMeal}
        image={meal.strMealThumb}
        subTitle={`${meal.strCategory} • ${meal.strArea}`}
        description={meal.strInstructions}
        footer={
          <Row justify="between">
            {meal.strYoutube && (
              <a href={meal.strYoutube} target="_blank" rel="noopener noreferrer">
                <Button size="2" variant="outline">
                  Watch on YouTube
                </Button>
              </a>
            )}
          </Row>
        }
      />

      <Grid className="mt-6">
        <Typography variant="h5" className="text-gray-700 font-semibold">
          Ingredients
        </Typography>
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {ingredients.map((item, index) => (
            <span
              key={index}
              className="flex gap-2 px-3 py-1 text-sm font-medium bg-green-100 text-green-700 rounded-full shadow-sm"
            >
              {item.ingredient}
              <span className="text-gray-500">({item.measure})</span>
            </span>
          ))}
        </div>
      </Grid>

      {meal.strTags && (
        <div className="mt-4">
          <Typography variant="body1" className="text-gray-700 font-semibold">
            Tags
          </Typography>
          <div className="flex flex-wrap gap-2 mt-2">
            {meal.strTags.split(",").map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm font-medium bg-blue-100 text-blue-700 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </Container>
  );
};
