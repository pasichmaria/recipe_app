"use client";

import { useMeals } from "@/core";
import { Meals } from "@/features";

export default function Container() {
  const { isLoading, data, setLetter, toggleFavorite } = useMeals();

  return (
    <Meals
      isLoading={isLoading}
      meals={data}
      setLetter={setLetter}
      toggleFavorite={toggleFavorite}
    />
  );
}
