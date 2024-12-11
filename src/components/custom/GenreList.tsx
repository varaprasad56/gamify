import userGenres, { Genre } from "@/hooks/useGenres";
import { HStack, Image, List, Spinner, Text } from "@chakra-ui/react";

interface Props {
  setSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

export const GenreList = ({ selectedGenre, setSelectedGenre }: Props) => {
  const { genres, error, isLoading } = userGenres();

  return (
    <List.Root colorPalette="blue" variant="plain" paddingX={3}>
      {error && <Text fontSize="sm"> Some error occurred!</Text>}
      {isLoading && <Spinner></Spinner>}
      {genres.map((genre) => (
        <List.Item
          key={genre.id}
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
        >
          <HStack
            marginY={1}
            width="100%"
            onClick={() => setSelectedGenre(genre)}
            _hover={{ bg: "colorPalette.50" }}
          >
            <Image
              boxSize={10}
              borderRadius={3}
              objectFit="cover"
              src={genre.image_background}
              alt={genre.name}
            ></Image>
            <Text textStyle={selectedGenre?.id === genre.id ? "lg" : "md"}>
              {genre.name}
            </Text>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};