import {
  Box,
  Center,
  Checkbox,
  Divider,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";

export const Filter = ({ onFilterChange, categories, onFilterPrice, prices }) => {
  return (
    <Box p={5} border="1px solid black" borderRadius={30} bgColor={"#f6f3f9"} position='sticky' top={'20%'}>
      <Center h={"50px"} fontSize="lg">
        Filter By
      </Center>
      <Stack
        p={0}
        direction={{
          base: "row",
          sm: "row",
          md: "row",
          lg: "column",
        }}
      >
        <Text as={"b"}>Price</Text>
        {prices.map((price) => (
          <label key={price}>
            <input onChange={onFilterPrice} type="checkbox" value={price} />
            {price}
          </label>
        ))}
      </Stack>
      <Divider p={1} />
      <Stack
        p={2}
        direction={{
          base: "row",
          sm: "row",
          md: "row",
          lg: "column",
        }}
      >
        <Text as={"b"}>Product Type</Text>
        {categories.map((category) => (
          <label key={category}>
            <input onChange={onFilterChange} type="checkbox" value={category} />
            {category}
          </label>
        ))}
      </Stack>
    </Box>
  );
};
