import { HeartFilledIcon, HeartIcon } from "@radix-ui/react-icons";
import { Box, Button, Container, Grid as GridLib } from "@radix-ui/themes";

import type { Meal } from "@/core/hooks/types";
import { Card, Pagination, Row } from "@/shared";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface TableProps {
  meals: Meal[];
  toggleFavorite: (id: string) => void;
}

export const Grid = ({ meals, toggleFavorite }: TableProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();
  const [category, setCategory] = useState("");
  const itemsPerPage = 6;

  const uniqueCategories = Array.from(new Set(meals.map((meal) => meal.strCategory)));

  const filteredMeals = meals.filter((meal) => {
    return meal.strCategory === category || category === "";
  });

  const totalPages = Math.ceil(filteredMeals.length / itemsPerPage);

  const displayedMeals = filteredMeals.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <Container size="4" className="mt-6">
      <Box className="flex flex-wrap justify-center gap-2 mb-4">
        {uniqueCategories.map((c, index) => (
          <Button
            key={index}
            size="2"
            variant={category === c ? "solid" : "outline"}
            onClick={() => {
              setCategory(c);
              setCurrentPage(1);
            }}
          >
            {c}
          </Button>
        ))}
      </Box>
      <GridLib columns={{ sm: "2", md: "3" }} gap="4" className="mt-4">
        {displayedMeals.map((meal, index) => (
          <Card
            key={index}
            title={meal.strMeal}
            image={meal.strMealThumb}
            subTitle={meal.strArea}
            description={meal.strInstructions}
            footer={
              <Row justify="between">
                <Button
                  size="2"
                  variant="solid"
                  onClick={() => {
                    router.push(`/meals/${meal.idMeal}`);
                  }}
                >
                  See More
                </Button>
                <button
                  className="p-2 rounded-full hover:bg-gray-200 transition"
                  onClick={() => toggleFavorite(meal.idMeal)}
                >
                  {meal.isFavorite ? (
                    <HeartFilledIcon className="w-6 h-6 text-red-500" />
                  ) : (
                    <HeartIcon className="w-6 h-6 text-red-500" />
                  )}
                </button>
              </Row>
            }
          />
        ))}
      </GridLib>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </Container>
  );
};
