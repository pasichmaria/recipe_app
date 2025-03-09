import { HeartIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { type Meal, useDebounce } from "@/core";
import { Input, Loading, Row, Typography } from "@/shared";
import { Button, Container } from "@radix-ui/themes";
import { Grid } from "./Grid";

interface MealsProps {
  meals?: Meal[];
  setLetter: (letter: string) => void;
  isLoading: boolean;
  toggleFavorite: (id: string) => void;
}

export const Meals = ({ meals, setLetter, isLoading, toggleFavorite }: MealsProps) => {
  const [value, setValue] = useState("");

  useDebounce(
    () => {
      setLetter(value);
    },
    [value],
    1000,
  );

  const router = useRouter();
  return (
    <Container size="4" className="xs:p-4">
      <Row justify="between" align="center">
        <Typography variant="h4" className="mb-4 text-gray-700">
          Find u fav recipe
        </Typography>
        <Button variant="soft" onClick={() => router.push("/favorites")}>
          <HeartIcon />
          To favorites
        </Button>
      </Row>
      <Input
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="Write meal first letter"
      />
      {isLoading || !meals ? <Loading /> : <Grid meals={meals} toggleFavorite={toggleFavorite} />}
    </Container>
  );
};
