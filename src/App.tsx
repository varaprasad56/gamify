import { Grid, GridItem, Text } from "@chakra-ui/react";
import { ColorModeButton, useColorMode } from "./components/ui/color-mode";

function App() {
  return (
    <Grid templateRows="60px 1fr" templateColumns="200px 1fr">
      <GridItem
        colorPalette="red"
        colSpan={2}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Text fontSize="2xl">GAMIFY</Text>
        <ColorModeButton />
      </GridItem>
      <GridItem bgColor="red.200">Aside</GridItem>
      <GridItem bgColor="blue.200">Main</GridItem>
    </Grid>
  );
}

export default App;
