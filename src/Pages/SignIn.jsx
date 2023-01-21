import React from "react";
import Navbar from "../Components/Navbar";
import {database} from '../firebase'
import {ref,push,child,update} from "firebase/database";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
   Center,
  Text,
  useColorModeValue,
  // Link,
  RadioGroup,
  Radio,
  Divider,
  Alert,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import Footer from "../Components/Footer";
import { Navigate } from "react-router-dom";
// import {useHistory} from "react-router-dom"

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConPassword, setShowConPassword] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [mobileNumber,setMobileNumber] = useState("")
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("");
  const [value, setValue] = React.useState('1')
  const navigate = useNavigate()

  const handleInputChange = (e) => {
    const {id , value} = e.target;
    if(id === "firstName"){
        setFirstName(value);
    }
    if(id === "lastName"){
        setLastName(value);
    }
    if(id === "email"){
        setEmail(value);
    }
    if(id === "mobileNumber"){
      setMobileNumber(value);
  }
    if(id === "password"){
        setPassword(value);
    }
    if(id === "confirmPassword"){
        setConfirmPassword(value);
    }

}


  const handleSubmit = () =>{
    let obj = {
            firstName : firstName,
            lastName:lastName,
            email:email,
            mobileNumber:mobileNumber,
            password:password,
            confirmPassword:confirmPassword,
        }       
    const newPostKey = push(child(ref(database), 'posts')).key;
    const updates = {};
    updates['/' + newPostKey] = obj
    // update(ref(database), updates);
    update(ref(database), updates).then(() => navigate('/'))
   
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
        Sign Up with Caratlane
        </Text>
      </Stack>
      <Divider/>
    <Stack direction={"row"} gap="40px" >
    <Center >
      <Button
      border={"1px solid #ADA9AD"} _hover={{border:"1px solid #ADA9AD"}}
        w={'100%'}
        maxW={'full'}
        variant={'outline'} 
        leftIcon={<FaFacebook />}>
        <Center ml={"20px"} >
          <Text>Facebook</Text>
        </Center>
      </Button>
    </Center>

    <Center >
      <Button
      border={"1px solid #ADA9AD"} _hover={{border:"1px solid #ADA9AD"}}
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
  <Text>Or</Text>
  <Divider orientation='horizontal' />
</Stack>

      <Box rounded={'lg'}>
        <Stack spacing={4}>
          <Box>
            <Stack direction={"row"}  >
              <FormControl id="ISD" >
                <FormLabel fontSize={"13px"} fontFamily="sans-serif" color="#4F3267" fontWeight={"semibold"}  >ISD</FormLabel>
                <Input w="30%" type="tel" placeholder='91' border={"1px solid #ADA9AD"} _hover={{border:"1px solid #ADA9AD"}}/>
              </FormControl>
            
              <FormControl >
                <FormLabel fontSize={"13px"} fontFamily="sans-serif" color="#4F3267" fontWeight={"semibold"}>Mobile Number</FormLabel>
                <Input id="mobileNumber" w={"100%"} type='tel' placeholder='phone number' border={"1px solid #ADA9AD"} _hover={{border:"1px solid #ADA9AD"}} value={mobileNumber} onChange = {(e) => handleInputChange(e)} />
              </FormControl>
            </Stack>
          </Box>
          <FormControl >
            <FormLabel fontSize={"13px"} fontFamily="sans-serif" color="#4F3267" fontWeight={"semibold"}>Email address</FormLabel>
            <Input id="email" type="email" border={"1px solid #ADA9AD"} _hover={{border:"1px solid #ADA9AD"}} value={email} onChange = {(e) => handleInputChange(e)} />
          </FormControl>

          <HStack>
              <Box>
                <FormControl >
                  <FormLabel fontSize={"13px"} fontFamily="sans-serif" color="#4F3267" fontWeight={"semibold"} >First Name</FormLabel>
                  <Input  id="firstName" type="text" border={"1px solid #ADA9AD"} _hover={{border:"1px solid #ADA9AD"}} value={firstName} onChange = {(e) => handleInputChange(e)}/>
                </FormControl>
              </Box>
              <Box>
                <FormControl>
                  <FormLabel fontSize={"13px"} fontFamily="sans-serif" color="#4F3267" fontWeight={"semibold"}>Last Name</FormLabel>
                  <Input id="lastName" type="text" border={"1px solid #ADA9AD"} _hover={{border:"1px solid #ADA9AD"}} value={lastName} onChange = {(e) => handleInputChange(e)} />
                </FormControl>
              </Box>
            </HStack>

          <FormControl >
            <FormLabel fontSize={"13px"} fontFamily="sans-serif" color="#4F3267" fontWeight={"semibold"}>Password</FormLabel>
            <InputGroup>
              <Input id="password" type={showPassword ? 'text' : 'password'} border={"1px solid #ADA9AD"} _hover={{border:"1px solid #ADA9AD"}}  value={password} onChange = {(e) => handleInputChange(e)}/>
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
          <FormControl >
            <FormLabel fontSize={"13px"} fontFamily="sans-serif" color="#4F3267" fontWeight={"semibold"}  > Confrim Password</FormLabel>
            <InputGroup>
              <Input id="confirmPassword" type={showPassword ? 'text' : 'password'} border={"1px solid #ADA9AD"} _hover={{border:"1px solid #ADA9AD"}} value={confirmPassword} onChange = {(e) => handleInputChange(e)}/>
              <InputRightElement h={'full'}>
                <Button
                  variant={'ghost'}
                  onClick={() =>
                    setShowConPassword((showConPassword) => !showConPassword)
                  }>
                  {showConPassword ? <Text fontSize={"10px"} color="#DE57E5" > SHOW</Text> :  <Text fontSize={"10px"} color="#DE57E5" > HIDE</Text> }
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>

        <RadioGroup onChange={setValue} value={value}>
        <Stack direction='row'>
          <Radio  value='1'> <Text fontSize={"13px"} fontFamily="sans-serif" > Male</Text></Radio>
          <Radio value='2'><Text fontSize={"13px"} fontFamily="sans-serif" > Female</Text></Radio>
          <Radio value='3'><Text fontSize={"13px"} fontFamily="sans-serif" >I don't want to specify</Text></Radio>
        </Stack>
    </RadioGroup>
          <Stack spacing={10} pt={2}>
            <Button
              loadingText="Submitting"
              size="md"
              bg={"#DE57E5"}
              color={'white'}
              _hover={{
                bg: "#DE57E5",
              }} onClick={()=>handleSubmit()}>
              REGISTER TO CONTINUE
            </Button>
          </Stack>
          <Stack  >
            <Text align={'center'} fontSize="12px" direction={"row"} >
              Already have an account? <Link  to="/login" > <Text color="#DE57E5" >LOGIN</Text></Link>
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

export default SignIn;


