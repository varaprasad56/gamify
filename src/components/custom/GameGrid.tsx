import { Genre } from "@/hooks/useGenres";
import { Button, GridItem } from "@chakra-ui/react";

interface Props {
  selectedGenre: Genre | null;
}
const GameGrid = ({ selectedGenre }: Props) => {
  return (
    <GridItem>
      {selectedGenre && (
        <Button colorPalette="blue">{selectedGenre?.name}</Button>
      )}
    </GridItem>
  );
};
export default GameGrid;
