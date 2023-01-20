import {
    Box,
    Button,
    Card,
    CardBody,
    Flex,
    HStack,
    Image,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Select,
    Stack,
    Text,
    useDisclosure,
    VStack,
    Spacer,
    Container,
    UnorderedList,
    ListItem
} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'






 


 


const CartPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Box border="1px solid white" w="100%">
           
              <Flex  w="100%" position="fixed">
              <Flex
                boxShadow="rgba(0,0,0,0.24) 0px 3px 8px"
                position="fixed"
                w="100%"
                padding="0.5rem"
              >
                <HStack w='100%' >
                <Box justifyContent="left" w="20%">
                  <Image w="8rem" src="https://upload.wikimedia.org/wikipedia/en/5/57/Caratlane_Logo.png" ></Image>
                </Box>
                <UnorderedList padding="0.5rem"  w="60%" display="flex" listStyleType="none" justifyContent="center">
                  
                  <ListItem mr="0rem" fontSize="1.2rem" fontWeight="500">
                  Shopping Cart
                  </ListItem>
                </UnorderedList>
                </HStack>
              </Flex>
              </Flex>
              <Spacer ></Spacer>
              <Box mt="5rem" h="auto" ml="10rem">
                <Box backgroundColor="#F9F9FA" w="90%">
                    <HStack spacing='24px' w="100%">
                        <Flex w="70%" h="auto">
                            <Flex w="100%" borderRight="1px solid" borderRightColor="rgb(233, 233, 233)">
                              <VStack w="95%">
                                  <Flex border="1px solid" borderColor="#D9E1EA" w="100%" h="auto" bg="white" borderRadius="5px" borderLeft="5px solid" borderLeftColor="rgb(136, 99, 251)" padding="0.5rem">
                                      <HStack spacing='10px' w="100%" padding="0.1rem">
                                          <Flex w="85%" margin="auto" borderRight="1px solid" borderColor="#D9E1EA">
                                              <Card>
                                                  <CardBody>
                                                      <Text textAlign="left" fontFamily="BegumSemiBold,Arial, sans-serif" fontSize="1.2rem" lineHeight="1rem" color="rgb(136, 99, 251)">Get ₹ 1844 xCLusive points on this order.</Text>
                                                      <Text textAlign="left" fontFamily="MuliRegular,Helvetica, Arial, sans-serif" fontSize="1rem" lineHeight="1rem" color="rgb(35, 21, 53)">You can redeem these points on your next order</Text>
                                                      <Text textAlign="left" fontFamily="MuliRegular,Helvetica, Arial, sans-serif" fontSize="1rem" lineHeight="1rem" color="rgb(35, 21, 53)">( 1 Point = 1 rupee ) <a>Know More</a>
                                                      </Text>
                                                  </CardBody>
                                              </Card>
                                          </Flex>
                                          <Flex w="15%" margin="auto">
                                              <Image src='https://www.shutterstock.com/image-vector/rupee-line-icon-simple-outline-260nw-1927650245.jpg'></Image>
                                          </Flex>
                                      </HStack>
                                  </Flex>
                                  <Flex w="100%">
                                      <Text w="75%" fontFamily="MuliSemiBold,Helvetica, Arial, sans-serif" fontSize="1.1rem">Total (1 Item) : 61,481</Text>
                                      <Text w="25%" textAlign="right" color="rgb(222, 87, 229)" textFamily="InterRegular, Helvetica Neue, Helvetica, Arial, sans-serif" fontSize="inherit">Save Cart</Text>
                                  </Flex>
                                  <Flex border="1px solid" borderColor="#D9E1EA" w="100%" h="auto" bg="white" borderRadius="5px" padding="0.5rem">
                                    <HStack w="100%">
                                      <Flex margin="auto"  w="20%" border="1px solid" borderColor="#D9E1EA" borderRadius="5px">
                                        <Image maxW="100%"  bg="white" maxWidth="100%" src="https://cdn1.caratlane.com/media/catalog/product/cache/6/small_image/200x200/9df78eab33525d08d6e5fb8d27136e95/J/R/JR03126-WGP900_1_lar.jpg"></Image>
                                      </Flex>
                                      <Flex  margin="auto" h="100%" w="50%">
                                        <Card margin="auto" w="95%" >
                                          <CardBody w="100%" >
                                            <Text textAlign="left" fontFamily="MuliLight,Helvetica Neue,Helvetica,Arial, sans-serif" lineHeight="1rem" color="rgb(35, 21, 53)">Emma Flora Diamond Ring</Text>
                                            <Text textAlign="left" fontFamily="MuliLight,Helvetica Neue,Helvetica,Arial, sans-serif" lineHeight="1rem" color="rgb(35, 21, 53)">JR03126-WGP900</Text>
                                            <HStack>
                                              <Text as="b">Size:</Text>
                                              <Select size='sm' border="none">
                                                <option value='15'>15</option>
                                                <option value='16'>16</option>
                                                <option value='17'>17</option>
                                                <option value='18'>18</option>
                                                <option value='19'>19</option>
                                                <option value='20'>20</option>
                                              </Select>
                                              <Text as="b">Quantity:</Text>
                                              <Select size='sm' border="none">
                                                <option value='1'>1</option>
                                                <option value='2'>2</option>
                                                <option value='3'>3</option>  
                                              </Select>
                                            </HStack>
                                            <br></br>
                                            <br></br>
                                            <Text textAlign="left" fontFamily="MuliSemiBold,Helvetica Neue,Helvetica,Arial, sans-serif" lineHeight="1rem" color="rgb(136, 99, 251)">Delivery by - 23rd Jan</Text>
                                            <HStack w="100%">
                                              <Text textAlign="left" fontFamily="MuliBold,Helvetica Neue,Helvetica,Arial, sans-serif" lineHeight="1rem">₹61,481</Text>
                                              <Text as="del" color="rgb(173, 169, 173)" textAlign="left" fontFamily="MuliBold,Helvetica Neue,Helvetica,Arial, sans-serif" lineHeight="1rem">₹72330</Text>
                                              <Text color="rgb(235, 79, 92)" textAlign="left" fontFamily="MuliBold,Helvetica Neue,Helvetica,Arial, sans-serif" lineHeight="1rem">Saved ₹ 10,849</Text>
                                            </HStack>                                        
                                          </CardBody>
                                        </Card>
                                      </Flex>
                                      <Flex margin="auto" h="100%" w="30%">
                                        <Stack alignSelf="end" direction='column' spacing={6} align='center' width="70%">
                                          <Button fontFamily="MuliRegular,Helvetica, Arial, sans-serif" padding="0.7rem" border="1px solid"  borderColor="rgb(136, 99, 251)" bg="transparent" w="100%" borderRadius="0.2rem">
                                            Remove
                                          </Button>
                                          <Button fontFamily="MuliRegular,Helvetica, Arial, sans-serif" padding="0.7rem" border="1px solid" borderColor="rgb(136, 99, 251)" bg="transparent" w="100%" borderRadius="0.2rem">
                                            Move to Wishlist
                                          </Button>                                      
                                        </Stack>
                                      </Flex>
                                    </HStack>
                                  </Flex>
                              </VStack>
                            </Flex>
                           
                        </Flex>
                        <Flex w="30%" h="auto">
                          <VStack w="90%" >
                            <Box w="100%" borderRadius="0.2rem" bg="rgb(246, 239, 246)" border="rgb(233, 233, 233)">
                            <Button onClick={onOpen} borderColor="blue" w="100%" h="auto" bg="teal.200" borderRadius="0.5rem" padding="0.5rem" >Apply Coupan</Button>
                            </Box>
                            <Box border="1px solid" borderColor="#D9E1EA" w="100%" h="auto" bg="white" borderRadius="0.2rem">
                              <HStack w="100%">
                              
                                <Image padding="0.2rem" src='https://png.pngtree.com/png-clipart/20191123/original/pngtree-outline-truck-delivery-icon-png-image_5196485.jpg' maxW="10%"></Image>
                                <Text padding="0.2rem">Deliver to <Text as="b">421101</Text></Text>
                                <Spacer></Spacer>
                                <Text padding="0.2rem">Change</Text>
                              </HStack>
                            </Box>
                            <Box w="100%">
                              <Text textAlign="left">
                                Order Summary:
                              </Text>
                            </Box>
                            <Box border="1px solid" borderColor="#D9E1EA" w="100%" h="auto" bg="white" borderRadius="0.2rem">
                              <HStack w="100%">
                                <Text padding="0.2rem" textAlign="left">Subtotal</Text>
                                <Spacer></Spacer>
                                <Text padding="0.2rem" textAlign="right">₹1,44,660</Text>
                              </HStack>
                              <HStack w="100%">
                                <Text padding="0.2rem" textAlign="left">You Saved</Text>
                                <Spacer></Spacer>
                                <Text padding="0.2rem" textAlign="right">₹1,44,660</Text>
                              </HStack>
                              <HStack w="100%">
                                <Text padding="0.2rem" textAlign="left">Coupon Discount</Text>
                                <Spacer></Spacer>
                                <Text padding="0.2rem" textAlign="right">₹1,44,660</Text>
                              </HStack>
                              <HStack w="100%">
                                <Text padding="0.2rem" textAlign="left">Delivery Charges (Standard)</Text>
                                <Spacer></Spacer>
                                <Text padding="0.2rem" textAlign="right">₹1,44,660</Text>
                              </HStack>
                              <HStack w="100%">
                                <Text padding="0.2rem"fontSize="1.2rem" textAlign="left" as='b'>Total Cost</Text>
                                <Spacer></Spacer>
                                <Text padding="0.2rem" fontSize="1.2rem" textAlign="right" as="b">₹1,44,660</Text>
                              </HStack>
                            </Box>
                            <Link to="/checkout">
                            <Button color="white" variant='solid' w="100%" padding="0.5rem" border="none" bg="linear-gradient(to right, rgb(222, 87, 229), rgb(136, 99, 251))" borderRadius="0.3rem" fontFamily="MuliSemiBold, Helvetica Neue, Helvetica, Arial, sans-serif" fontSize="1.2rem">Checkout Securely</Button>
                            </Link>
                          </VStack>
                        </Flex>
                    </HStack>
                </Box>
                <Box>
               


                    <Modal onClose={onClose} isOpen={isOpen} isCentered border="1px solid red">
                      <ModalOverlay />
                      <ModalContent>
                        <ModalHeader>Modal Title</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                          Here is output
                        </ModalBody>
                        <ModalFooter>
                          <Button onClick={onClose}>Close</Button>
                        </ModalFooter>
                      </ModalContent>
                    </Modal>


                </Box>
              </Box>
           
         
           
        </Box>
       
    )
}


export default CartPage




