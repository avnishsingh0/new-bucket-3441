import React, { useEffect, useState } from "react";
import { Container } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";
import { Box, Image } from "@chakra-ui/react";
import { StackDivider, VStack } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

import { Button } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/AppReducer/product/action";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const SingleProduct = () => {
  const { id } = useParams();
  console.log(id);
  const products = useSelector((store) => store.AppReducer.products);
  const [product, setProduct] = useState({});
  const [size, setSize] = useState("5(44.5)");
  const dispatch = useDispatch();

  useEffect(() => {
    let productData = products.find((el) => el.id === +id);
    // console.log(productData);
    productData && setProduct(productData);
  }, []);

  const handleAddToCart = () => {
    let newItem = {
      ...product,
      size: size,
      quantity: 1,
      totalPrice: 1 * product.price,
    };
    dispatch(addToCart(newItem));
  };

  const property = {
    imageUrl:
      "https://cdn.caratlane.com/media/catalog/product/J/R/JR07340-1RP9OO_1_lar.jpg",
    imageAlt: "Rear view of modern home with pool",
    imageUrl2:
      "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95//J/R/JR03126-WGP900_13_pdtouch.png",
    imageUrl3: "https://assets.cltstatic.com/images/responsive/packaging.jpg",
    imagelogo1: "https://image.pngaaa.com/677/6075677-middle.png",
    imagelogo2:
      "https://www.kindpng.com/picc/m/340-3400180_home-logo-pink-png-transparent-png.png",
  };

  return (
    <div>
      <VStack
        divider={<StackDivider borderColor="white" />}
        spacing={14}
        align="stretch"
      >
        <Navbar></Navbar>
        <Container padding="8" h="700px" maxW="80%" bg="#ECECEC">
          <Flex>
            <Box h="600px" w="450px">
              <Image src={product.image1} alt={product.name} />
            </Box>
            <Spacer />
            <Box h="750px" w="550px">
              <VStack
                divider={<StackDivider borderColor="gray.200" />}
                spacing={2}
                align="stretch"
              >
                <Box>
                  <Flex>
                    <Box>
                      <Text as="b" fontSize="20px">
                        {product.name}
                      </Text>
                    </Box>
                  </Flex>
                </Box>
                <Box>
                  <SimpleGrid columns={2} spacingX="30px" spacingY="20px">
                    <Box height="80px">
                      <Text>Select Size</Text>
                      <Select
                        value={size}
                        onChange={(e) => setSize(e.target.value)}
                      >
                        <option value="5(44.8)">5(44.8)</option>
                        <option value="6(45.8)">6(45.8)</option>
                        <option value="7(45.8)">7(45.8)</option>
                        <option value="8(45.9)">8(45.9)</option>
                        <option value="9(55.7)">9(55.7)</option>
                        <option value="10(67.9)">10(67.9)</option>
                      </Select>
                    </Box>
                    <Box height="80px">
                      <Text>Metal</Text>
                      <Select>
                        <option value="option1">14 KT White Gold</option>
                        <option value="option2">14 KT Yellow Gold</option>
                        <option value="option3">18 KT Rose Gold</option>
                        <option value="option3">18 KT White Gold</option>
                        <option value="option3">18 KT Yellow Gold</option>
                      </Select>
                    </Box>
                    <Box height="80px">
                      <Text>Diamond</Text>
                      <Select>
                        <option value="option1">IJ-SI</option>
                        <option value="option2">GH-VS</option>
                        <option value="option3">GH-VVS</option>
                        <option value="option3">EF-VVS</option>
                      </Select>
                    </Box>
                    <Box height="80px">
                      <Text>Check Delivery & Trial Date</Text>
                      <Input placeholder="PINCODE" size="md" />
                    </Box>
                  </SimpleGrid>
                </Box>
                <Box h="200px">
                  <Box h="100">
                    <Flex>
                      <Box h="100" w="272   px">
                        <Text mt="2rem" fontSize="2xl">
                          ₹{product.price}{" "}
                        </Text>
                        <Text>Offer Expire in 1 day</Text>
                      </Box>

                      <Box h="100" w="272px"></Box>
                    </Flex>
                  </Box>

                  <Box h="100">
                    <SimpleGrid columns={2} spacing={8}>
                      <Box height="100px">
                        <Link to="/cart">
                          <Button
                            fontSize="1.5rem"
                            w="100%"
                            size="lg"
                            color="white"
                            bg="linear-gradient(to right,#de57e5,#8863fb)"
                            onClick={handleAddToCart}
                          >
                            ADD TO CART
                          </Button>
                        </Link>
                      </Box>
                      <Box height="100px">
                        <Button
                          fontSize="1.5rem"
                          w="100%"
                          size="lg"
                          bg=" #bdc1ff"
                          color="#4f3267"
                          border="none"
                        >
                          FIND IN STORE
                        </Button>
                      </Box>
                    </SimpleGrid>
                  </Box>
                </Box>
                <Box h="200px">
                  <Box h="50">
                    <Text fontSize="2xl">Try Before You Buy :</Text>
                  </Box>
                  <Box h="150">
                    <SimpleGrid columns={2} spacing={7}>
                      <Box h="150" bg="#e5f4e0">
                        <Box>
                          <Flex>
                            <Box h="70px" w="90px">
                              <Image
                                maxW="3rem"
                                margin="auto"
                                src={property.imagelogo1}
                              ></Image>
                            </Box>
                            <Box h="70px" w="200px">
                              <Text fontSize="1.1rem">
                                {" "}
                                Want a closer look?
                              </Text>
                              <Text fontSize="0.8rem">
                                {" "}
                                Get on a live video call with our design
                                consultants{" "}
                              </Text>
                            </Box>
                          </Flex>
                        </Box>
                        <Box h="70px" w="100%">
                          <Button
                            margin="auto"
                            fontSize="1.2rem"
                            w="100%"
                            size="lg"
                            bg=" #75d167"
                            color="#ffffff"
                            border="none"
                          >
                            Schedule a Video Call
                          </Button>
                        </Box>
                      </Box>
                      <Box h="150" bg="#efd0ff">
                        <Box>
                          <Flex>
                            <Box h="70px" w="90px">
                              <Image
                                maxW="3rem"
                                margin="auto"
                                src={property.imagelogo2}
                              ></Image>
                            </Box>
                            <Box h="70px" w="200px">
                              <Text fontSize="1.1rem">Try it on at home</Text>
                              <Text fontSize="0.8rem">
                                Home Appoinment Available try from Tomorrow!
                              </Text>
                            </Box>
                          </Flex>
                        </Box>
                        <Box h="70px" w="100%">
                          <Button
                            margin="auto"
                            fontSize="1.2rem"
                            w="100%"
                            size="lg"
                            bg=" #de57e5"
                            color="#ffffff"
                            border="none"
                          >
                            Book Home Appoinment
                          </Button>
                        </Box>
                      </Box>
                    </SimpleGrid>
                  </Box>
                </Box>
              </VStack>
            </Box>
          </Flex>
        </Container>
        <Container h="450px" maxW="1100px">
          <Text fontSize="25px" mb="15px">
            The Cartlane Touch :
          </Text>
          <SimpleGrid columns={2} spacing={9}>
            <Box height="380px" w="450px">
              <Image
                w="450px"
                h="380"
                src={property.imageUrl2}
                alt={property.imageAlt}
              ></Image>
            </Box>
            <Box height="380px">
              <VStack
                divider={<StackDivider borderColor="gray.200" />}
                spacing={2}
                align="stretch"
              >
                <Box h="90px">
                  <SimpleGrid columns={6}>
                    <Box
                      h="70px"
                      padding="9px"
                      w="70px"
                      borderRadius="70px"
                      border="1px solid grey"
                    >
                      <Box
                        h="50px"
                        w="50px"
                        borderRadius="50px"
                        padding="3"
                        bg="rgb(35,21,53)"
                        color="white"
                        border="1px solid black"
                      >
                        <Text>1</Text>
                      </Box>
                    </Box>

                    <Box h="90px" w="350px">
                      <Text fontSize="20px">The Inspiration</Text>
                      <Text fontSize="15px">
                        This Diamond ring is carefully crafted to insure your
                        beautiful jewellery is always protected.{" "}
                      </Text>
                    </Box>
                  </SimpleGrid>
                </Box>
                <Box h="100px">
                  <SimpleGrid columns={6}>
                    <Box
                      padding="9px"
                      h="70px"
                      w="70px"
                      borderRadius="70px"
                      border="1px solid grey"
                    >
                      <Box
                        h="50px"
                        w="50px"
                        bg="rgb(35,21,53)"
                        color="white"
                        borderRadius="50px"
                        padding="4"
                        border="1px solid black"
                      >
                        <Text margin="auto">2</Text>
                      </Box>
                    </Box>

                    <Box h="100px" w="350px">
                      <Text fontSize="20px">The Design Story</Text>
                      <Text fontSize="15px">
                        Go solo with this ring on your finger, or throw a few
                        more in and stack up. There are no shortage of pretty
                        rings for you. :)
                      </Text>
                    </Box>
                  </SimpleGrid>
                </Box>
                <Box h="100px">
                  <SimpleGrid columns={6}>
                    <Box
                      h="70px"
                      padding="9px"
                      w="70px"
                      borderRadius="70px"
                      border="1px solid grey"
                    >
                      <Box
                        h="50px"
                        w="50px"
                        padding="3"
                        borderRadius="50px"
                        border="1px solid black"
                        bg="rgb(35,21,53)"
                        color="white"
                      >
                        <Text>3</Text>
                      </Box>
                    </Box>

                    <Box h="100px" w="350px">
                      <Text fontSize="20px">The Style Element</Text>
                      <Text fontSize="15px">
                        This diamond ring isn't fussy, it goes with everything
                        you ever pair it with. Be it your plain white tee, or
                        your long dress with frills.
                      </Text>
                    </Box>
                  </SimpleGrid>
                </Box>
              </VStack>
            </Box>
          </SimpleGrid>
        </Container>
        <Container h="450px" maxW="1100px">
          <VStack divider={<StackDivider />}>
            <Box h="180px" w="1100px">
              <Flex>
                <Box h="180" w="750px">
                  <Text fontSize="20px" color="black">
                    Products Details :
                  </Text>
                  <Flex>
                    <Box h="170px" w="220px" mt="10px">
                      <Text fontSize="18px" color="blue.800">
                        Product Information
                      </Text>

                      <Text fontSize="15px">Width-6.3mm</Text>
                      <Text fontSize="15px">Height-10.4mm</Text>
                      <Text fontSize="15px">Gross Weight-3.302</Text>
                      <Text fontSize="15px">Size:12(51.8mm)</Text>
                    </Box>
                    <Box h="170px" w="260px">
                      <Text fontSize="15px" mt="10px">
                        Set in 18 KT White Gold(3.210 g) with diamonds (0.460 ct
                        ,IJ-SI)
                      </Text>
                    </Box>
                    <Box h="170px" w="240px">
                      <Text
                        fontSize="15px"
                        color="blue.800"
                        mt="10px"
                        ml="20px"
                      >
                        SKU:JR03126-WGP900
                      </Text>
                    </Box>
                  </Flex>
                </Box>

                <Box h="200" w="350px">
                  <Image
                    h="200px"
                    src={property.imageUrl3}
                    alt={property.imageAlt}
                  ></Image>
                </Box>
              </Flex>
            </Box>
            <Box h="30px" w="1100px">
              <Text fontSize="18px">Diamond Details</Text>
            </Box>
            <Box h="140px" w="1100px">
              <TableContainer>
                <Table variant="simple" h="140px" w="500px">
                  <Thead>
                    <Tr>
                      <Th>Diamond Type</Th>
                      <Th>Setting Type</Th>
                      <Th isNumeric>Total Number</Th>
                      <Th isNumeric>Total Weight</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>IJ-SI</Td>
                      <Td>Plate Prong</Td>
                      <Td isNumeric>29</Td>
                      <Td isNumeric>0.345crt</Td>
                    </Tr>
                    <Tr>
                      <Td>IJ-SI</Td>
                      <Td>Plate Prong</Td>
                      <Td isNumeric>29</Td>
                      <Td isNumeric>0.345crt</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </Box>
            <Box h="40px" w="1100px">
              <Text fontSize="18px">Price BreakUp </Text>
            </Box>
          </VStack>
        </Container>
        <Footer></Footer>
      </VStack>
    </div>
  );
};

export default SingleProduct;
