import { Box, Checkbox, Divider, Radio, Stack, Text } from "@chakra-ui/react";

export const Filter = () => {
  return (
    <Box>
      <Text>Filter</Text>
      <Stack>
        <Text as={"b"}>Price</Text>
        <Checkbox>Under ₹50,000</Checkbox>
        <Checkbox>₹50,000 - ₹1,00,000</Checkbox>
        <Checkbox>Over ₹1,00,000</Checkbox>
      </Stack>
      <Divider/>
      <Stack>
        <Text as={"b"}>Product Type</Text>
        <Checkbox>Earrings</Checkbox>
        <Checkbox>Rings</Checkbox>
        <Checkbox>Necklaces</Checkbox>
        <Checkbox>Pendants</Checkbox>
        <Checkbox>Bracelets</Checkbox>
        <Checkbox>Bangles</Checkbox>
        <Checkbox>Mangalsutra</Checkbox>
      </Stack>
    </Box>
  );
};
