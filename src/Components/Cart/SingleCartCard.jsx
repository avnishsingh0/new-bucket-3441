import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Flex,
  HStack,
  Image,
  Select,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import {
  handleQuantity,
  handleRemove,
} from "../../Redux/AppReducer/Cart/action";

const SingleCartCard = ({ product }) => {
  const [qty, setQty] = useState(product.quantity);
  const dispatch = useDispatch();

  const handleQuanityChange = () => {
    dispatch(handleQuantity(product.id, product.price, qty));
  };

  const handleRemoveItem = () => {
    dispatch(handleRemove(product.id));
  };

  return (
    <Flex
      border="1px solid"
      borderColor="#D9E1EA"
      w="100%"
      h="auto"
      bg="white"
      borderRadius="5px"
      padding="0.5rem"
    >
      <HStack w="100%">
        <Flex
          margin="auto"
          w="20%"
          border="1px solid"
          borderColor="#D9E1EA"
          borderRadius="5px"
        >
          <Image
            maxW="100%"
            bg="white"
            maxWidth="100%"
            src={product.image1}
          ></Image>
        </Flex>
        <Flex margin="auto" h="100%" w="50%">
          <Card margin="auto" w="95%">
            <CardBody w="100%">
              <Text
                textAlign="left"
                textfamily="MuliLight,Helvetica Neue,Helvetica,Arial, sans-serif"
                lineHeight="1rem"
                color="rgb(35, 21, 53)"
              >
                {product.name}
              </Text>
              <Text
                textAlign="left"
                textfamily="MuliLight,Helvetica Neue,Helvetica,Arial, sans-serif"
                lineHeight="1rem"
                color="rgb(35, 21, 53)"
              >
                JR03126-WGP900
              </Text>
              <HStack>
                <Text as="b">Size: {product.size}</Text>
                <Spacer></Spacer>
                <Text as="b">Quantity:</Text>
                <Select
                  size="sm"
                  border="none"
                  value={qty}
                  onChange={(e) => setQty(e.target.value)}
                  onClick={handleQuanityChange}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </Select>
              </HStack>
              <br></br>
              <br></br>
              <Text
                textAlign="left"
                textfamily="MuliSemiBold,Helvetica Neue,Helvetica,Arial, sans-serif"
                lineHeight="1rem"
                color="rgb(136, 99, 251)"
              >
                Delivery by - 23rd Jan
              </Text>
              <HStack w="100%">
                <Text
                  textAlign="left"
                  textfamily="MuliBold,Helvetica Neue,Helvetica,Arial, sans-serif"
                  lineHeight="1rem"
                >
                  ₹{product.price}
                </Text>
              </HStack>
            </CardBody>
          </Card>
        </Flex>
        <Flex margin="auto" h="100%" w="30%">
          <Stack
            alignSelf="end"
            direction="column"
            spacing={6}
            align="center"
            width="70%"
          >
            <Button
              textfamily="MuliRegular,Helvetica, Arial, sans-serif"
              padding="0.7rem"
              border="1px solid"
              borderColor="rgb(136, 99, 251)"
              bg="transparent"
              w="100%"
              borderRadius="0.2rem"
              onClick={handleRemoveItem}
            >
              Remove
            </Button>
            <Button
              textfamily="MuliRegular,Helvetica, Arial, sans-serif"
              padding="0.7rem"
              border="1px solid"
              borderColor="rgb(136, 99, 251)"
              bg="transparent"
              w="100%"
              borderRadius="0.2rem"
            >
              Move to Wishlist
            </Button>
          </Stack>
        </Flex>
      </HStack>
    </Flex>
  );
};

export default SingleCartCard;
