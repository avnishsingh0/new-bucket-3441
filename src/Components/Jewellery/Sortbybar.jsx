import { Box, Button, Flex, Select, Spacer } from "@chakra-ui/react";

export const Sortbybar = () => {
  return (
    <Box>
      <Flex>
        <Flex
          w={"60%"}
          p={7}
          gap={4}
          bgGradient="linear(to-r, #fff5c8, #fcd5f5)"
        >
          <Button colorScheme={"purple"}>All</Button>
          <Button>Try at Home</Button>
          <Button>Designs in Store</Button>
          <Button>Fast Delivery</Button>
          <Button>New In</Button>
        </Flex>
        <Flex w={"40%"} bgGradient="linear(to-r, #fcd5f5, #bfb3fe)">
        <Spacer/>
          <Select w={'40%'} p={7} bg placeholder="Sort By:">
            <option value="option1">Price: Low to High</option>
            <option value="option2">Price: High to Low</option>
          </Select>
        </Flex>
      </Flex>
    </Box>
  );
};
