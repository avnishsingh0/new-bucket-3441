import { Box, Button, Image, Text } from "@chakra-ui/react";

export const SingleProdCard = ({ name, type, image1, image2, price }) => {
  return (
    <>
      <Box p="5">
        <Image
          src={image1}
          alt={name}
          boxShadow="xs"
          p="1"
          rounded="md"
          bg="white"
        />
        <Text as={"b"}>₹{price}</Text>
        <br />
        <Text as={"b"}>Check delivery date </Text>
        <br />
        <Text color={"grey"}>{name}</Text>
        <Button variant="outline" border={"1px"}>
          Book Try at Home
        </Button>
      </Box>
    </>
  );
};
