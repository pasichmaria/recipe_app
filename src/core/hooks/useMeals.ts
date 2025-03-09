import {
  QueryCache,
  useQuery,
  useQueryClient,
  UseQueryResult,
} from "react-query";
import { getMealsByFirstLetter } from "@/core";
import { useState } from "react";
import { Meal } from "./types";

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
      (
        await Promise.all(
          letters.map((letter) => getMealsByFirstLetter(letter))
        )
      ).flat(),
    enabled: !!letters.length,
  });

  return {
    ...query,
    toggleFavorite: (id: string) => {
      console.log("TOOGLE", id);
      queryClient.setQueryData<Meal[]>(
        ["meals", ...letters],
        (oldData?: Meal[]) => {
          console.log(id, oldData);
          if (!oldData) return [];
          const index = oldData.findIndex((meal) => meal.idMeal === id);
          if (index >= 0)
            oldData[index].isFavorite = !oldData[index].isFavorite;
          console.log(index, oldData[index]);
          return oldData;
        }
      );
    },
    cache,
    setLetter: (letter?: string) =>
      setLetters(letter ? [letter] : defaultLetters),
  };
};
