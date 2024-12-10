import { Button, HStack, Text } from "@chakra-ui/react";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <HStack>
      <Button onClick={() => setCounter(counter - 1)}>Decrement</Button>
      <Text>{counter}</Text>
      <Button onClick={() => setCounter(counter + 1)}>Increment</Button>
    </HStack>
  );
}

export default App;
