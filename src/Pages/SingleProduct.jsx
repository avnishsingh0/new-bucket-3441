import React from 'react'
import { Container, Heading } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import { Box,Image } from '@chakra-ui/react'
import { StackDivider, VStack } from '@chakra-ui/react'
import { SimpleGrid } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import {Text} from '@chakra-ui/react'

export const SinglePage = () => {

    
        const property = {
          imageUrl: 'https://cdn.caratlane.com/media/catalog/product/J/R/JR07340-1RP9OO_1_lar.jpg',
          imageAlt: 'Rear view of modern home with pool',
          
        }


  return (
    <div>
        <Container padding="8" h="800px" maxW="1100px"  bg="#ECECEC">
        <Flex>
         <Box h="600px" w="450px" >
         <Image src={property.imageUrl} alt={property.imageAlt} />
        </Box>
            <Spacer />
        <Box h="750px" w="550px" >
        <VStack
                divider={<StackDivider borderColor='gray.200' />}
                spacing={2}
                    align='stretch'
        >
            <Box h='100px'  >
                <Flex>
                <Box >
                    <h1>Emma Flora Diamonad Ring</h1>
                </Box>
                <Spacer></Spacer>
                <Box ></Box>
                </Flex>
            </Box>
             <Box h='200px'  >
             <SimpleGrid columns={2} spacingX='30px' spacingY='20px'>
                    <Box  height='80px'>
                    <p>Select Size</p>
                    <Select >
                         <option value='option1'>5(44.8)</option>
                         <option value='option2'>6(45.8)</option>
                        <option value='option3'>7(45.8)</option>
                        <option value='option3'>8(45.9)</option>
                        <option value='option3'>9(55.7)</option>
                        <option value='option3'>10(67.9)</option>
                    </Select>
                    </Box>
                    <Box  height='80px'>
                        <p>Metal</p>
                    <Select >
                         <option value='option1'>14 KT White Gold</option>
                         <option value='option2'>14 KT Yellow Gold</option>
                        <option value='option3'>18 KT Rose Gold</option>
                        <option value='option3'>18 KT White Gold</option>
                        <option value='option3'>18 KT Yellow Gold</option>
                        
                    </Select>
                    </Box>
                    <Box  height='80px'>
                        <p>Diamond</p>
                    <Select >
                         <option value='option1'>IJ-SI</option>
                         <option value='option2'>GH-VS</option>
                        <option value='option3'>GH-VVS</option>
                        <option value='option3'>EF-VVS</option>
                       
                        
                    </Select>
                    </Box>
                    <Box  height='80px'>
                        <p>Check Delivery & Trial Date</p>
                        <Input placeholder='PINCODE' size='md' />
                    </Box>
                    
             </SimpleGrid>
                
            </Box>
            <Box h='200px' >
            <Box h="100"  >
            <Flex>
                <Box h="100"  w="272px">
                    
                    <Text mt="2rem" fontSize="2xl">₹64,540   <Text mt="2rem" fontSize="2xl" color="grey" as="del">₹64,540</Text></Text>
                    <p>Offer Expire in 1 day</p>
                    
                </Box>
                
                <Box h="100"  w="272px" ></Box>

                </Flex>
            </Box>
           
            <Box h="100"  >
            <SimpleGrid columns={2} spacing={8}>
                <Box  height='100px'>
                <Button  fontSize= "1.5rem" w="100%" size="lg"  color=" white" bg= "linear-gradient(to right,#de57e5,#8863fb)">ADD TO CART</Button>
                </Box>
                <Box  height='100px'>
                <Button     fontSize= "1.5rem" w="100%" size="lg" bg=" #bdc1ff" color= "#4f3267" border= "none" >FIND IN STORE</Button>
                </Box>
                
                </SimpleGrid>

            </Box>
               
               
                                
            </Box>
            <Box h='200px' >
             <Box h="50"   >
               <Text  fontSize="2xl">Try Before You Buy :</Text> 
             </Box>
             <Box h="150"  >
               <SimpleGrid columns={2} spacing={7}>
                <Box h="150"  bg="#e5f4e0" >
                    <Box >
                        <Flex>
                            <Box  h="70px" w="90px"   ></Box>
                            <Box  h="70px" w="200px" >
                            <Text  fontSize= "1.1rem"> Want a closer look?</Text>
                               <Text  fontSize= "0.8rem" > Get on a live video call with our design consultants </Text>
                            </Box>
                        </Flex>
                    </Box>
                    <Box h="70px" w="250px" >
                    <Button     fontSize= "1.2rem" w="100%" size="lg" bg=" #75d167" color= "#ffffff" border= "none" >Schedule a Video Call</Button>
                    </Box>

                </Box>
                <Box h="150"   bg="#efd0ff">
                <Box >
                        <Flex>
                            <Box  h="70px" w="90px" ></Box>
                            <Box  h="70px" w="200px" >
                                <Text  fontSize= "1.1rem">Try it on at home</Text>
                                <Text  fontSize= "0.8rem">Home Appoinment Available try from Tomorrow!</Text>
                            </Box>
                        </Flex>
                    </Box>
                    <Box h="70px" w="250px" >
                    <Button     fontSize= "1.2rem" w="100%" size="lg" bg=" #de57e5" color= "#ffffff" border= "none" >Book Home Appoinment</Button>
                    </Box>
                </Box>
                
                </SimpleGrid>
             </Box>
                
            </Box>
</VStack>


        </Box>
        </Flex>
        
        
        </Container>
     
    </div>
  )
}
