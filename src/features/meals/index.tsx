import { Meal } from "@/core/hooks/types";
import { Input, Loading } from "@/shared";
import { Button, Container, Grid as GridLib, Text } from "@radix-ui/themes";
import { Grid } from "./Grid";
import { useDebounce } from "@/core/hooks/useDebounce";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { HeartIcon } from "@radix-ui/react-icons";

interface MealsProps {
  meals?: Meal[];
  setLetter: (letter: string) => void;
  isLoading: boolean;
  toggleFavorite: (id: string) => void;
}

export const Meals = ({
  meals,
  setLetter,
  isLoading,
  toggleFavorite,
}: MealsProps) => {
  const [value, setValue] = useState("");

  useDebounce(
    () => {
      setLetter(value);
    },
    [value],
    1000
  );

  const router = useRouter();
  return (
    <Container size="4" className="xs:p-4">
      <GridLib gap='4' columns={{
        xs: '1',
        md: '2'
      }} className="mb-4">
        <Text as="p" size='4' className="text-gray-700">Search for your favorite meal</Text>
        <Button variant='soft' onClick={() => router.push("/favorites")}>
          <HeartIcon />To favorites</Button>
      </GridLib>
      <Input
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="Write meal first letter"
      />
      {isLoading || !meals ? (
        <Loading />
      ) : (
        <Grid meals={meals} toggleFavorite={toggleFavorite} />
      )}
    </Container>
  );
};
