import { GridItem, Text } from "@chakra-ui/react";
import { ColorModeButton } from "../ui/color-mode";

const Header = () => {
  return (
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
  );
};

export default Header;
