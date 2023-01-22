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
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { useState ,useEffect} from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import Footer from "../Components/Footer";


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const usenavigate=useNavigate();
useEffect(()=>{
sessionStorage.clear();
  },[]);

  const ProceedLogin = (e) => {
      e.preventDefault();
      if (validate()) {
          fetch("http://localhost:8000/user/" + email).then((res) => {
              return res.json();
          }).then((resp) => {
              if (Object.keys(resp).length === 0) {
                  console.log('Please Enter valid email');
              } else {
                  if (resp.password === password) {
                      console.log('Success');
                      sessionStorage.setItem('email',email);
                      usenavigate('/')
                  }else{
                      console.log('Please Enter valid credentials');
                  }
              }
          }).catch((err) => {
              console.log('Login Failed due to :' + err.message);
          });
      }
  }

  const ProceedLoginusingAPI = (e) => {
      e.preventDefault();
      if (validate()) {
          
          let inputobj={"email": email,
          "password": password};
          fetch("https://localhost:44308/User/Authenticate",{
              method:'POST',
              headers:{'content-type':'application/json'},
              body:JSON.stringify(inputobj)
          }).then((res) => {
              return res.json();
          }).then((resp) => {
              console.log(resp)
              if (Object.keys(resp).length === 0) {
                  console.log('Login failed, invalid credentials');
              }else{
                   console.log('Success');
                   sessionStorage.setItem('email',email);
                   sessionStorage.setItem('jwttoken',resp.jwtToken);
                 usenavigate('/')
              }
             
          }).catch((err) => {
              console.log('Login Failed due to :' + err.message);
          });
      }
  }
  const validate = () => {
      let result = true;
      if (email === '' || email === null) {
          result = false;
          console.log('Please Enter email');
      }
      if (password === '' || password === null) {
          result = false;
          console.log('Please Enter Password');
      }
      return result;
  }
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
        <FormControl onSubmit={ProceedLoginusingAPI} >
            <FormLabel fontSize={"13px"} fontFamily="sans-serif" color="#4F3267" fontWeight={"semibold"}>Enter Mobile Number or Email</FormLabel>
            <Input type="email" border={"1px solid #ADA9AD"} _hover={{border:"1px solid #ADA9AD"}} value={email} onChange={e => setEmail(e.target.value)} />
          </FormControl>

          <FormControl >
            <FormLabel fontSize={"13px"} fontFamily="sans-serif" color="#4F3267" fontWeight={"semibold"}>Password</FormLabel>
            <InputGroup>
              <Input  type={showPassword ? 'text' : 'password'} border={"1px solid #ADA9AD"} _hover={{border:"1px solid #ADA9AD"}} value={password} onChange={e => setPassword(e.target.value)} />
              <InputRightElement h={'full'}>
                <Button
                  variant={'ghost'}
                  onClick={() =>
                    setShowPassword((showPassword) => !showPassword)
                  }>
                  {showPassword ? <Text fontSize={"10px"} color="#DE57E5" > SHOW</Text> :  <Text fontSize={"10px"} color="#DE57E5" > HIDE</Text> }
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
         
          <Stack spacing={10} pt={2}>
            <Button
              loadingText="Submitting"
              size="md"
              bg={"#DE57E5"}
              color={'white'}
              _hover={{
                bg: "#DE57E5",
              }}
              onClick={ProceedLoginusingAPI}>
               LOGIN
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


