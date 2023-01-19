import {
  Box,
  Card,
  CardBody,
  Flex,
  HStack,
  Image,
  Text,
  VStack
} from '@chakra-ui/react'
import React from 'react'


const CartPage = () => {
  return (
      <div>
          <Box backgroundColor="#F9F9FA" w="90%" margin="auto">
              <HStack spacing='24px' w="100%">
                  <Flex w="70%" h="auto">
                      <VStack w="100%">
                          <Flex border="1px solid" borderColor="#D9E1EA" w="100%" h="auto" bg="white" borderRadius="5px" borderLeft="5px solid" borderLeftColor="rgb(136, 99, 251)">
                              <HStack spacing='10px' w="100%" padding="0.1rem">
                                  <Flex w="85%" margin="auto" borderRight="1px solid" borderColor="#D9E1EA">
                                      <Card>
                                          <CardBody>
                                              <Text textAlign="left" fontFamily="BegumSemiBold,Arial, sans-serif" fontSize="1.2rem" color="rgb(136, 99, 251)">Get ₹ 1844 xCLusive points on this order.</Text>
                                              <Text textAlign="left" fontFamily="MuliRegular,Helvetica, Arial, sans-serif" fontSize="1rem" color="rgb(35, 21, 53)">You can redeem these points on your next order</Text>
                                              <Text textAlign="left" fontFamily="MuliRegular,Helvetica, Arial, sans-serif" fontSize="1rem" color="rgb(35, 21, 53)">( 1 Point = 1 rupee )
                                                  {/* <a>Know More</a> */}
                                              </Text>
                                          </CardBody>
                                      </Card>
                                  </Flex>
                                  <Flex w="15%" margin="auto">
                                      <Image src=''></Image>
                                  </Flex>
                              </HStack>
                          </Flex>
                          <Flex w="100%">
                              <Text w="75%" fontFamily="MuliSemiBold,Helvetica, Arial, sans-serif" fontSize="1.1rem">Total (1 Item) : 61,481</Text>
                              <Text w="25%" textAlign="right" color="rgb(222, 87, 229)" textFamily="InterRegular, Helvetica Neue, Helvetica, Arial, sans-serif" fontSize="inherit">Save Cart</Text>
                          </Flex>
                      </VStack>
                  </Flex>
                  <Flex w="30%" h="auto"></Flex>
              </HStack>
          </Box>


      </div>
  )
}


export default CartPage




