import {
  Box,
  FormControl,
  Input,
  Button,
  FormLabel,
  Grid,
  GridItem,
  Image,
  Spacer,
  StackDivider,
  VStack,
  Flex,
  Text,
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCustomerData } from "../Redux/AppReducer/PaymentDetails/action";
import SinglePaymentCard from "../Components/Cart/SinglePaymentCard";
import { Link } from "react-router-dom";

const Checkout = () => {
  const cart = useSelector((store) => store.cartReducer.cart);
  const amount = useSelector((store) => store.cartReducer.totalCartAmount);
  const items = useSelector((store) => store.cartReducer.totalItems);
  const discount = useSelector((store) => store.cartReducer.discount);
  const dispatch = useDispatch();

  const [paymentDetails, setPaymentDetails] = useState({
    fullName: "",
    address: "",
    city: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setPaymentDetails({
      ...paymentDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newItem = {
      ...paymentDetails,
      orderAmount: amount - discount,
      numOfItems: items,
      cartDetails: cart,
    };
    console.log(newItem);
    dispatch(addCustomerData(newItem));
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box w="100%">
      <VStack
        divider={<StackDivider borderColor="white" />}
        spacing={10}
        align="stretch"
      >
        {/* Navbar */}
        <Box
          boxShadow="rgba(0,0,0,0.24) 0px 3px 8px"
          position="fixed"
          w="100%"
          h="10%"
          padding="0.5rem"
        >
          <Image
            w="8rem"
            src="https://upload.wikimedia.org/wikipedia/en/5/57/Caratlane_Logo.png"
          ></Image>
        </Box>
        {/* Form */}
        <Box w="100%">
          <Grid
            w="85%"
            margin="auto"
            padding="0.5rem"
            templateColumns="repeat(2, 2fr)"
            gap={6}
          >
            <GridItem
              w="100%"
              border="1px solid"
              borderColor="rgb(233,233,233)"
              padding="1.2rem"
            >
              <form padding="4rem" onSubmit={handleSubmit}>
                <FormControl width="70%" margin="auto">
                  <FormLabel htmlFor="fullName">Full Name :</FormLabel>
                  <Input
                    border="1px solid"
                    borderColor="rgb(150, 150, 150)"
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={paymentDetails.fullName}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl width="70%" margin="auto">
                  <FormLabel htmlFor="address">Address</FormLabel>
                  <Input
                    border="1px solid"
                    borderColor="rgb(150, 150, 150)"
                    type="text"
                    id="address"
                    name="address"
                    value={paymentDetails.address}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl width="70%" margin="auto">
                  <FormLabel htmlFor="city">City</FormLabel>
                  <Input
                    border="1px solid"
                    borderColor="rgb(150, 150, 150)"
                    type="text"
                    id="city"
                    name="city"
                    value={paymentDetails.city}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl width="70%" margin="auto">
                  <FormLabel htmlFor="cardNumber">Card Number</FormLabel>
                  <Input
                    border="1px solid"
                    borderColor="rgb(150, 150, 150)"
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={paymentDetails.cardNumber}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl width="70%" margin="auto">
                  <FormLabel htmlFor="expirationDate">
                    Expiration Date
                  </FormLabel>
                  <Input
                    border="1px solid"
                    borderColor="rgb(150, 150, 150)"
                    type="text"
                    id="expirationDate"
                    name="expirationDate"
                    value={paymentDetails.expirationDate}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl width="70%" margin="auto">
                  <FormLabel htmlFor="cvv">CVV</FormLabel>
                  <Input
                    border="1px solid"
                    borderColor="rgb(150, 150, 150)"
                    type="text"
                    id="cvv"
                    name="cvv"
                    value={paymentDetails.cvv}
                    onChange={handleChange}
                  />
                </FormControl>
                <Spacer></Spacer>
                <Flex margin="auto" w="70%" padding="0.5rem">
                  <Button
                    border="1px solid"
                    borderColor="rgb(150, 150, 150)"
                    bg="lightgreen"
                    w="50%"
                    margin="auto"
                    type="submit"
                    onClick={onOpen}
                  >
                    Place Order
                  </Button>
                </Flex>
              </form>
            </GridItem>
            <GridItem
              w="100%"
              border="1px solid"
              borderColor="rgb(233,233,233)"
              padding="1.2rem"
            >
              {/* Order Details */}
              <Box w="100%" padding="0.5rem" borderColor="gray.200">
                <Text w="100%" fontSize="18px" fontFamily="begummedium">
                  Order Summary
                </Text>
                <VStack divider={<StackDivider />} spacing={4} w="100%">
                  <VStack>
                    {cart?.map((el) => (
                      <SinglePaymentCard key={el.id} product={el} />
                    ))}
                  </VStack>
                  <Box w="100%">
                    <VStack>
                      <HStack w="495px">
                        <Text textAlign="left">SUBTOTAL</Text>
                        <Spacer></Spacer>
                        <Text textAlign="right">₹{amount}</Text>
                      </HStack>
                    </VStack>
                    <VStack>
                      <HStack w="495px">
                        <Text textAlign="left">CART DISCOUNT</Text>
                        <Spacer></Spacer>
                        <Text textAlign="right">₹{discount}</Text>
                      </HStack>
                    </VStack>
                    <VStack>
                      <HStack w="495px">
                        <Text textAlign="left">SHIPPING CHARGES</Text>
                        <Spacer></Spacer>
                        <Text textAlign="right">₹0</Text>
                      </HStack>
                    </VStack>
                  </Box>
                  <Spacer></Spacer>
                  <Box>
                    <HStack w="495px">
                      <Text textAlign="left" fontSize="1.2rem">
                        TOTAL COST
                      </Text>
                      <Spacer></Spacer>
                      <Text textAlign="right" fontSize="1.2rem">
                        ₹{amount - discount}
                      </Text>
                    </HStack>
                  </Box>
                </VStack>
              </Box>
            </GridItem>
          </Grid>
        </Box>
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Order Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <HStack>
                <Box>
                  <Text>Contact Details :</Text>
                  <Text>
                    <Text as="b">{paymentDetails.fullName}</Text>
                  </Text>
                  <Text>
                    <Text as="cite">{paymentDetails.address}</Text>
                  </Text>
                  <Text>
                    <Text as="cite">{paymentDetails.city}</Text>
                  </Text>
                </Box>
                <Spacer></Spacer>
                <Box>
                  <Text>Payment Details:</Text>
                  <Text>
                    <Text>{paymentDetails.cardNumber}</Text>
                  </Text>
                  <Text>
                    <Text>{paymentDetails.expirationDate}</Text>
                  </Text>
                  <Text>
                    <Text>{paymentDetails.cvv}</Text>
                  </Text>
                </Box>
              </HStack>
              <br></br>
              <Text>
                Congratulations your order with order id #201216 is successfully
                placed
              </Text>
            </ModalBody>
            <ModalFooter>
              <Link to="/">
                <Button colorScheme="blue" mr={1} onClick={onClose}>
                  Confirm
                </Button>
              </Link>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </VStack>
    </Box>
  );
};

export default Checkout;
