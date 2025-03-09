"use client";

import { useMeals } from "@/core";
import { Favorites } from "@/features/favorites";
import { Loading } from "@/shared";

export default function Container() {
  const { isLoading, data } = useMeals();
  if (!data || isLoading) {
    return <Loading />;
  }
  return <Favorites meals={data.filter(({ isFavorite }) => isFavorite)} />;
}
