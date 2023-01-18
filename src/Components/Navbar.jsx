
import {Text, Box, Flex,  HStack, IconButton, Button, Menu, MenuButton, useDisclosure, useColorModeValue, Image,Stack, Input, FormLabel, Select, FormControl, InputGroup, InputLeftElement, InputRightElement, Avatar} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon,SearchIcon } from '@chakra-ui/icons';
import { AiOutlineGold,AiOutlineHome ,AiFillHeart} from 'react-icons/ai';
import {IoStorefrontOutline} from "react-icons/io5"
import {BsHandbag} from "react-icons/bs";
import {MdLocationPin} from "react-icons/md"
import {FaUser} from "react-icons/fa"
import {RiShoppingBasket2Line} from "react-icons/ri"
 

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
        <Box  boxShadow='lg' p='2' bg={useColorModeValue('#1A365D', '#1A365D')} h={"20px"}></Box>
            <Box  boxShadow='lg' p='2' bg={useColorModeValue('#F6F4ff', '#F6F4ff')} px={4} position="fixed" zIndex={"10"}
                w="100%">
                <Flex h={14} alignItems={'center'} gap={"10px"} >
                    <IconButton  icon={isOpen ? <CloseIcon /> : <HamburgerIcon />} aria-label={'Open Menu'} display={{ md: 'none' }} onClick={isOpen ? onClose : onOpen} />
                    <HStack gap={"20px"} alignItems={'center'} >
                        <Box>
                            <Image w={"160px"}  src={"/images/caratlane-logo.png"} />
                            </Box>
                        <HStack as={'nav'} display={{ base: 'none', md: 'flex' }} cursor="pointer">

                        <Box display={"flex"} alignItems={"center"}> 
                        <IconButton fontSize={{base:"10px",sm:"10px",md:'20px'}} bg={"#F6F4ff"}  icon={<AiOutlineHome/>} color="#4f3267" _hover={{ color: "#231535" }} />
                        <Text fontFamily={"sans-serif"}  fontSize={{ base: "5px", sm: "5px", md: "11px" }} marginTop={"7px"}   color="#4f3267" _hover={{  color: "#000000", textDecoration: "underline" }}>FREE TRY AT HOME</Text>
                        </Box>
                        <Box display={"flex"} alignItems={"center"}> 
                        <IconButton fontSize={{base:"10px",sm:"10px",md:'20px'}} bg={"#F6F4ff"} icon={<IoStorefrontOutline/>} color="#4f3267" _hover={{ color: "#231535" }} />
                            <Text fontFamily={"sans-serif"} fontSize={{ base: "8px", sm: "8px", md: "11px" }} marginTop={"7px"}   color="#4f3267" _hover={{color: "#000000", textDecoration: "underline" }}>FIND STORE</Text>
                            </Box>

                            <Box display={"flex"} alignItems={"center"}> 
                            <IconButton fontSize={{base:"10px",sm:"10px",md:'20px'}} bg={"#F6F4ff"} color="#4f3267" _hover={{ color: "#231535" }} icon={<BsHandbag/>} />
                          <Text fontFamily={"sans-serif"} fontSize={{ base: "8px", sm: "8px", md: "11px" }} marginTop={"7px"}   color="#4f3267" _hover={{  color: "#000000", textDecoration: "underline" }}>PLAN OF PURCHASE</Text>
                          
                          </Box>

                            <Box display={"flex"}  alignItems={"center"} >
                            <IconButton fontSize={{base:"10px",sm:"10px",md:'25px'}} bg={"#F6F4ff"} icon={<AiOutlineGold/>} color="#4f3267" _hover={{ color: "#231535" }}/>
                            <Text fontFamily={"sans-serif"} fontSize={{ base: "8px", sm: "8px", md: "11px" }}   color="#4f3267" _hover={{  color: "#000000", textDecoration: "underline" }}>BUY DIGITAL GOLD</Text>
                            </Box>

                            <Box >
                            <FormControl>
                            <InputGroup  >
                            <Input _focusVisible={{border:"1px solid purple"}} border={"1px solid purple"} placeholder='search' _placeholder={{color:"black"}} bg={"white"} rounded="md" w={"190px"} fontSize={"13px"} color={"black"} />
                            <InputRightElement width="2rem">
                            <IconButton bgGradient='linear(to-l, #7918CA, #FF0888)' aria-label='Search database' color={"white"} icon={<SearchIcon />} h="2.4rem"  w={"50px"} roundedLeft={"sm"}   />
                            </InputRightElement>
                            </InputGroup>
               
                            </FormControl>
                            </Box>
                           
                           <Box display={"flex"}  alignItems={"center"}>
                           <IconButton fontSize={{base:"10px",sm:"10px",md:'20px'}} bg={"#F6F4ff"} icon={<MdLocationPin/>}  _hover={{ color: "#231535" }}/>
                            <Text fontFamily={"sans-serif"}  fontSize={{ base: "5px", sm: "5px", md: "11px" }}  color="#4f3267" _hover={{ color: "#000000", textDecoration: "underline" }}>PIN CODE</Text>
                            </Box>
                            <IconButton fontSize={{base:"10px",sm:"10px",md:'15px'}} bg={"#F6F4ff"} icon={<FaUser/>}  _hover={{ color: "#231535" }}/>
                            <Avatar name='indian-flag' w={"40px"} size={"sm"} src='https://img.freepik.com/free-vector/round-flag-india_23-2147813736.jpg?w=740&t=st=1674037779~exp=1674038379~hmac=37daab84e0a0fe59d3e5c96a6890e019c413fcf3bc6d1265bb10ebe4b461afe4' />
                            <IconButton fontSize={{base:"10px",sm:"10px",md:'15px'}}  icon={<AiFillHeart/>}  _hover={{ color: "#231535" }}/>
                            <IconButton fontSize={{base:"10px",sm:"10px",md:'15px'}} bg={"#F6F4ff"} icon={<RiShoppingBasket2Line/>}  _hover={{ color: "#231535" }}/>
                        </HStack>
                    </HStack>
                  
                </Flex>
                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            <Text fontFamily={"monospace"} fontSize={{ base: "11px", sm: "11px", md: "13px" }} color="darkgrey"></Text>
                            <Text fontFamily={"monospace"} fontSize={{ base: "11px", sm: "11px", md: "13px" }} color="darkgrey"></Text>
                            <Text fontFamily={"monospace"} fontSize={{ base: "11px", sm: "11px", md: "13px" }} color="darkgrey"></Text>
                            <Text fontFamily={"monospace"} fontSize={{ base: "11px", sm: "11px", md: "13px" }} color="darkgrey"></Text>
                            <Text fontFamily={"monospace"} fontSize={{ base: "11px", sm: "11px", md: "13px" }} color="darkgrey"></Text>
                        </Stack>
                    </Box>
                ) : null}
            </Box>
            
        </>
    );
}

export default Navbar