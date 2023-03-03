import { Box, Center, Checkbox, Divider, Stack, Text } from "@chakra-ui/react";

export const Filter = ({ onFilterChange, categories }) => {
  return (
    <Box
      p={5}
      border="1px solid black"
      bgColor={"white"}
      position="sticky"
      top={"20%"}
      zIndex={10}
    >
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
        <Checkbox>Under ₹50,000</Checkbox>
        <Checkbox>₹50,000 - ₹1,00,000</Checkbox>
        <Checkbox>Over ₹1,00,000</Checkbox>
      </Stack>
      <Divider p={1} />
      <Stack
        p={0}
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
