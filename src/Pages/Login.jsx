import React from "react";
import Navbar from "../Components/Navbar";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
   Center,
   Stack,
   Button,
  Text,
  useColorModeValue,
  Divider,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import Footer from "../Components/Footer";


const Login = () => {
  return (
    
  <>
  <Navbar/>
 
  <Flex
    minH={'100vh'}
    align={'center'}
    justify={'center'}
    bg={useColorModeValue('gray.50', 'gray.800')}>
    <Stack spacing={8} mx={'auto'} maxW={'35%'} py={12} px={6}>
      <Stack align={'center'}>
        <Text fontSize={'14px'} fontFamily="sans-serif" fontWeight={"semibold"} color={'black'}>
        Login to caratlane
        </Text>
      </Stack>
      <Divider/>
    <Stack direction={"row"} gap="40px" >
    <Center >
      <Button
        w={'100%'}
        maxW={'full'}
        variant={'outline'} 
        leftIcon={<FaFacebook />}>
        <Center ml={"20px"}>
          <Text>Facebook</Text>
        </Center>
      </Button>
    </Center>

    <Center >
      <Button
        w={'full'}
        maxW={'md'}
        variant={'outline'}
        leftIcon={<FcGoogle />}>
        <Center ml={"20px"}>
          <Text>Google</Text>
        </Center>
      </Button>
    </Center>
    </Stack>

  <Stack direction='row' gap={"10px"}>
  <Divider orientation='horizontal' />
  <Text>OR</Text>
  <Divider orientation='horizontal' />
</Stack>

      <Box rounded={'lg'}>
        <Stack spacing={4}>
        <FormControl id="email" >
            <FormLabel fontSize={"13px"} fontFamily="sans-serif" color="#4F3267" fontWeight={"semibold"}>Enter Mobile Number or Email</FormLabel>
            <Input type="email" border={"1px solid #ADA9AD"} _hover={{border:"1px solid #ADA9AD"}} />
          </FormControl>

         
          <Stack spacing={10} pt={2}>
            <Button
              loadingText="Submitting"
              size="md"
              bg={"#DE57E5"}
              color={'white'}
              _hover={{
                bg: "#DE57E5",
              }}>
               CONTINUE
            </Button>
          </Stack>
          <Stack direction='row' gap={"10px"}  >
  <Divider orientation='horizontal'  mt={"10px"}/>
  <Text >OR</Text>
  <Divider  orientation='horizontal'  />
</Stack>

          <Stack  >
            <Text align={'center'} fontSize="12px" direction={"row"} >
              New to Caratlane? <Link  to="/login" > <Text color="#DE57E5" >Create an Account</Text></Link>
            </Text>
          </Stack>

          
        </Stack>
      </Box>
    </Stack>
  </Flex>
<Footer/>
    </>
  );
};

export default Login;


