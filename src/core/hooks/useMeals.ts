import { getMealsByFirstLetter } from "@/core";
import type { Meal } from "@/core/hooks/types";
import { useState } from "react";
import { QueryCache, type UseQueryResult, useQuery, useQueryClient } from "react-query";

export const useMeals = () => {
  const queryClient = useQueryClient();
  const defaultLetters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];
  const [letters, setLetters] = useState<string[]>(defaultLetters);

  const queryCache = new QueryCache();
  const cache = queryCache.find<Meal[]>(["meals", ...letters]);

  const query: UseQueryResult<Meal[], unknown> = useQuery({
    queryKey: ["meals", ...letters],
    queryFn: async () =>
      (await Promise.all(letters.map((letter) => getMealsByFirstLetter(letter)))).flat(),
    enabled: !!letters.length,
  });

  return {
    ...query,
    toggleFavorite: (id: string) => {
      queryClient.setQueryData<Meal[]>(["meals", ...letters], (oldData?: Meal[]) => {
        if (!oldData) {
          return [];
        }
        const index = oldData.findIndex((meal) => meal.idMeal === id);
        if (index >= 0) {
          oldData[index].isFavorite = !oldData[index].isFavorite;
        }
        return oldData;
      });
    },
    cache,
    setLetter: (letter?: string) => setLetters(letter ? [letter] : defaultLetters),
  };
};
