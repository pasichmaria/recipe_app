import { getMealsById } from "@/core";
import { useQuery } from "react-query";

export const useMealsById = ({ id }: { id: string }) => {
  return useQuery({
    queryKey: ["meals", id],
    queryFn: () => getMealsById(id),
  });
};
