import { Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { ColorModeButton } from "./components/ui/color-mode";
import { GenreList } from "./components/custom/GenreList";
import { Genre } from "./hooks/useGenres";
import { useState } from "react";

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  return (
    <Grid templateRows="60px 1fr" templateColumns="160px 1fr">
      <GridItem
        colorPalette="red"
        colSpan={2}
        display="flex"
        paddingX={3}
        alignItems="center"
        justifyContent="space-between"
      >
        <Text fontSize="2xl">GAMIFY</Text>
        <ColorModeButton />
      </GridItem>
      <GridItem>
        <GenreList
          selectedGenre={selectedGenre}
          setSelectedGenre={setSelectedGenre}
        />
      </GridItem>
      <GridItem>{selectedGenre && <Text>{selectedGenre.name}</Text>}</GridItem>
    </Grid>
  );
};

export default App;
