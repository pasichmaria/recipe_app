"use client";
import { useMealsById } from "@/core";
import { Meal } from "@/features/meal";
import { Loading } from "@/shared";
import { useParams } from "next/navigation";

export default function Recipe() {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading } = useMealsById({ id });

  if (!data || isLoading) {
    return <Loading />;
  }

  if (data.length === 0) {
    return <div>Meal not found</div>;
  }

  return <Meal meal={data[0]} />;
}
