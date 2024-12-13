import useData from "@/hooks/useData";
import { Genre } from "@/hooks/useGenres";
import ImageUrlService from "@/services/ImageUrlService";
import {
  Button,
  Card,
  GridItem,
  Image,
  RatingGroup,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { Rating } from "../ui/rating";

interface Props {
  selectedGenre: Genre | null;
}
interface Game {
  id: number;
  name: string;
  background_image: string;
  rating: number;
  platforms: Platform[];
}

interface Platform {
  id: number;
  slug: string;
  name: string;
}
const GameGrid = ({ selectedGenre }: Props) => {
  const { data, error, isLoading } = useData<Game>({ apiEndpoint: "/games" });
  const skeletonKeyCards = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <GridItem>
      {selectedGenre && (
        <Button colorPalette="blue">{selectedGenre?.name}</Button>
      )}

      <SimpleGrid
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          sm: "repeat(2,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(3,1fr)",
          xl: "repeat(4,1fr)",
        }}
        gridGap="4"
        padding="5"
        alignContent="center"
        justifyContent="center"
      >
        {error && <Text>Some error occurred</Text>}

        {data.map((data) => (
          <Card.Root width="100%" borderRadius="5" overflow="hidden">
            <Image
              src={ImageUrlService({ url: data.background_image })}
            ></Image>
            <Card.Header>
              <Text fontSize="lg" fontWeight="semibold">
                {data.name}
              </Text>
            </Card.Header>
            <Card.Body>
              <Rating
                readOnly
                allowHalf
                colorPalette={
                  data.rating > 4 ? "green" : data.rating > 3 ? "orange" : "red"
                }
                value={data.rating}
              ></Rating>
            </Card.Body>
          </Card.Root>
        ))}
      </SimpleGrid>
    </GridItem>
  );
};
export default GameGrid;
