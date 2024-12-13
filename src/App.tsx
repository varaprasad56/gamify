import { GenreList } from "./components/custom/GenreList";
import { Genre } from "./hooks/useGenres";
import { useState } from "react";
import Header from "./components/custom/Header";
import GameGrid from "./components/custom/GameGrid";
import { Grid } from "@chakra-ui/react";

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  return (
    <Grid
      templateRows="60px 1fr"
      templateColumns={{ base: "repeat(1,1fr)", lg: "180px 1fr" }}
    >
      <Header></Header>

      <GenreList
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
      />

      <GameGrid selectedGenre={selectedGenre}></GameGrid>
    </Grid>
  );
};

export default App;
