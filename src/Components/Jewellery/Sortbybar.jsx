import { Box, Button, Flex, Select, Spacer } from "@chakra-ui/react";

export const Sortbybar = ({ sortby }) => {
  const sorthandleclick = (e) => {
    console.log(e);
  };
  return (
    <Box position='sticky' top={'20%'}>
      <Flex>
        <Box w={"60%"} bgGradient="linear(to-r, #fff5c8, #fcd5f5)" p={5}>
          <Flex>
            {sortby.map((e) => (
              <Button colorScheme={'none'} color>{e}</Button>
            ))}
          </Flex>
          <Flex gap={4} p={2}>
            <Button colorScheme={"purple"}>All</Button>
            <Button boxShadow={'sm'} >Try at Home</Button>
            <Button boxShadow={'sm'}>Designs in Store</Button>
            <Button boxShadow={'sm'}>Fast Delivery</Button>
            <Button boxShadow={'sm'}>New In</Button>
          </Flex>
        </Box>

        <Flex w={"40%"} bgGradient="linear(to-r, #fcd5f5, #bfb3fe)">
          <Spacer />
          <Select
            w={"40%"}
            p={7}
            bg
            placeholder="Sort By:"
            onClick={(e) => sorthandleclick(e)}
          >
            <option value="option1">Price: Low to High</option>
            <option value="option2">Price: High to Low</option>
          </Select>
        </Flex>
      </Flex>
    </Box>
  );
};
