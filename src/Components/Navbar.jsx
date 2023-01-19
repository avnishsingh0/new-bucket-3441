
import {Text, Box, Flex,  HStack, IconButton, Button, Menu, MenuButton, useDisclosure, useColorModeValue, Image,Stack, Input, FormLabel, Select, FormControl, InputGroup, InputLeftElement, InputRightElement, Avatar, Grid, GridItem, Hide, SimpleGrid} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon,SearchIcon } from '@chakra-ui/icons';
import { AiOutlineGold,AiOutlineHome ,AiFillHeart} from 'react-icons/ai';
import {IoStorefrontOutline} from "react-icons/io5"
import {BsHandbag} from "react-icons/bs";
import {MdLocationPin} from "react-icons/md"
import {FaUser} from "react-icons/fa"
import {RiShoppingBasket2Line} from "react-icons/ri"
import {BiHomeCircle} from "react-icons/bi"
import {IoStorefrontSharp} from "react-icons/io5"
import Home from "../Pages/Home"
 

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
        <Box  boxShadow={'lg'} p='2' bg={useColorModeValue('#1A365D', '#1A365D')} h={"20px"}></Box>
            <Box  boxShadow='lg' p='2' bg={useColorModeValue('#F6F4ff', '#F6F4ff')} px={4} position="fixed" zIndex={"10"}  w="100%"   >
                <Flex h={14} alignItems={'center'} gap={"10px"} >
                    <IconButton bg={"#F6F4ff"} icon={isOpen ? <CloseIcon /> : <HamburgerIcon />} aria-label={'Open Menu'} display={{ md: 'none' }} onClick={isOpen ? onClose : onOpen} />
                    <HStack gap={"10px"} alignItems={'center'}  >
                        <Box  >
                            <Image w={"150px"} src={"/images/caratlane-logo.png"} alt="log" />
                            {/* <IconButton fontSize={{base:"10px",sm:"10px",md:'15px'}} bg={"#F6F4ff"} icon={<FaUser/>}  _hover={{ color: "#231535" }}/>
                            <Avatar name='indian-flag' w={"40px"} size={"sm"} src='https://img.freepik.com/free-vector/round-flag-india_23-2147813736.jpg?w=740&t=st=1674037779~exp=1674038379~hmac=37daab84e0a0fe59d3e5c96a6890e019c413fcf3bc6d1265bb10ebe4b461afe4' />
                            <IconButton fontSize={{base:"10px",sm:"10px",md:'15px'}}  icon={<AiFillHeart/>}  _hover={{ color: "#231535" }}/>
                            <IconButton fontSize={{base:"10px",sm:"10px",md:'15px'}} bg={"#F6F4ff"} icon={<RiShoppingBasket2Line/>}  _hover={{ color: "#231535" }}/> */}
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

                            <Box className='input-box' >
                            <FormControl>
                            <InputGroup >
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
                        <Stack as={'nav'} spacing={4} h={"1000%"} >
                         <Box display={"flex"} justifyContent={"space-between"} >
                        <Button size='md' height='48px' width='190px' border='1px'borderColor='#dab490'  color={"#A05354"} fontSize={"13px"} > 
                        <IconButton fontSize={'20px'} icon={<BiHomeCircle/>}  _hover={{ color:"#A05354" }}  />
                         Try at Home</Button>
                        <Button size='md' height='48px' width='100px' border='1px'borderColor='#DE57E5'> <Image w={"40px"} src='https://assets.cltstatic.com/images/responsive/pop-logo.png' /></Button>
                        <Button size='md' height='48px' width={'190px'} border='1px'borderColor="#9066A6" color={"#9066A6"}>
                        <IconButton fontSize={'19px'} icon={<IoStorefrontSharp/>}  _hover={{ color:"#9066A6" }} color="#9066A6" />Find Stores</Button>
                        </Box>

                        <Box >
                            <Box display={"flex"} gap={"20px"}>
                            <Image rounded={"xl"} w={"10%"} src='https://thumbs.dreamstime.com/b/beautiful-vintage-oriental-gold-turkish-jewelry-women-s-earrings-black-background-beautiful-oriental-gold-turkish-jewelry-101556212.jpg' />
                            <Box boxShadow='xs' p='6' rounded='md' bg='white' w={"90%"} > NEW ARRIVALS</Box>
                            </Box>

                            <Box display={"flex"} gap={"20px"} mt={"20px"}>
                            <Image rounded={"xl"} w={"10%"} src='https://images.pexels.com/photos/9420323/pexels-photo-9420323.jpeg?auto=compress&cs=tinysrgb&w=1290&h=750&dpr=2' />
                            <Box boxShadow='xs' p='6' rounded='md' bg='white' w={"90%"} >RINGS</Box>
                            </Box>

                            <Box display={"flex"} gap={"20px"} mt={"20px"}>
                            <Image rounded={"xl"} w={"10%"} src='https://images.pexels.com/photos/10983783/pexels-photo-10983783.jpeg?auto=compress&cs=tinysrgb&w=1290&h=750&dpr=2' />
                            <Box boxShadow='xs' p='6' rounded='md' bg='white' w={"90%"} >EARRINGS</Box>
                            </Box>

                            <Box display={"flex"} gap={"20px"} mt={"20px"}>
                            <Image rounded={"xl"} w={"10%"} src='https://images.pexels.com/photos/12194323/pexels-photo-12194323.jpeg?auto=compress&cs=tinysrgb&w=1290&h=750&dpr=2' />
                            <Box boxShadow='xs' p='6' rounded='md' bg='white' w={"90%"} >BRACELETS & BANGLES</Box>
                            </Box>

                            <Box display={"flex"} gap={"20px"}mt={"20px"}>
                            <Image rounded={"xl"} w={"10%"} src='https://images.pexels.com/photos/7134458/pexels-photo-7134458.jpeg?auto=compress&cs=tinysrgb&w=1290&h=750&dpr=2' />
                            <Box boxShadow='xs' p='6' rounded='md' bg='white' w={"90%"} >SOLITAIRES</Box>
                            </Box>

                            <Box display={"flex"} gap={"20px"}mt={"20px"}>
                            <Image rounded={"xl"} w={"10%"} src='https://images.pexels.com/photos/11655516/pexels-photo-11655516.jpeg?auto=compress&cs=tinysrgb&w=1290&h=750&dpr=2' />
                            <Box boxShadow='xs' p='6' rounded='md' bg='white' w={"90%"} >CHAINS</Box>
                            </Box>

                            <Box display={"flex"}  gap={"20px"}mt={"20px"}>
                            <Image rounded={"xl"} w={"10%"} src='https://images.pexels.com/photos/9901792/pexels-photo-9901792.jpeg?auto=compress&cs=tinysrgb&w=1290&h=750&dpr=2' />
                            <Box boxShadow='xs' p='6' rounded='md' bg='white' w={"90%"} >OTHER JEWELLERY</Box>
                            </Box>
                            </Box>

                            <SimpleGrid columns={2} spacing={10}>
                            <Box  height='80px'> <Image src='https://cdn.caratlane.com/media/static/images/V4/2022/Mobile/April/01/8_FastDelivery_336x420.png' />  </Box>  

                            <Box  height='80px'><Image src="https://cdn.caratlane.com/media/static/images/V4/2022/Mobile/April/01/4_NewIn_336x420.png" /></Box>

                            <Box  height='80px'> <Image src='https://cdn.caratlane.com/media/static/images/V4/2022/Mobile/April/01/5_Necklace_336x420.png' />  </Box>  

                            <Box  height='80px'> <Image src='https://cdn.caratlane.com/media/static/images/V4/2022/Mobile/April/01/6_Kids_336x420.png' />  </Box>  

                            <Box  height='80px'> <Image src='https://cdn.caratlane.com/media/static/images/V4/2022/Mobile/April/01/3_Silver_336x420.png' />  </Box>  

                            <Box  height='80px'> <Image src='https://cdn.caratlane.com/media/static/images/V4/2022/Mobile/April/01/7_GoldCoin_336x420.png' />  </Box>  
                            </SimpleGrid>

                            <Box display={"flex"} gap={"20px"}mt={"20px"}>
                            <Image rounded={"xl"} w={"10%"} src='https://images.pexels.com/photos/47047/gold-ingots-golden-treasure-47047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
                            <Box boxShadow='xs' p='6' rounded='md' bg='white' w={"90%"} >DIGI GOLD</Box>
                            </Box>

                            <Box display={"flex"} gap={"20px"}mt={"20px"}>
                            <Image rounded={"xl"} w={"10%"} src='https://images.pexels.com/photos/13976051/pexels-photo-13976051.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
                            <Box boxShadow='xs' p='6' rounded='md' bg='white' w={"90%"} >GIFTING</Box>
                            </Box>

                            <Box display={"flex"}  gap={"20px"}mt={"20px"}>
                            <Image rounded={"xl"} w={"10%"} src='https://images.pexels.com/photos/7893672/pexels-photo-7893672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
                            <Box boxShadow='xs' p='6' rounded='md' bg='white' w={"90%"} >WATCH & BUY</Box>
                            </Box>
                           
                        </Stack>
                    </Box>
                ) : <FormControl display={{md:"none",sm:"block"}} >
                <InputGroup  >
                <Input _focusVisible={{border:"1px solid purple"}} border={"1px solid purple"} placeholder='search' _placeholder={{color:"black"}}  bg={"white"} rounded="md"  w={"100%"} fontSize={"13px"} color={"black"} />
                <InputRightElement width="2rem">
                <IconButton bgGradient='linear(to-l, #7918CA, #FF0888)' aria-label='Search database' color={"white"} icon={<SearchIcon />} h="2.4rem"  w={"50px"} roundedLeft={"sm"}   />
                </InputRightElement>
                </InputGroup>
                </FormControl>}
           </Box>
        </> 
        
    );
}

export default Navbar