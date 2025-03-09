import { useQuery } from "react-query";
import { getMealsById } from "@/core";

export const useMealsById = ({ id }: { id: string }) => {
  return useQuery({
    queryKey: ["meals", id],
    queryFn: () => getMealsById(id),
  });
};
