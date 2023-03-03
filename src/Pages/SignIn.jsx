import React from "react";
import Navbar from "../Components/Navbar";

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
  RadioGroup,
  Radio,
  Divider,
  useToast,
} from "@chakra-ui/react";

import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import { signup } from "../Redux/AuthReducer/action";
import { useDispatch } from "react-redux";
import { CheckCircleIcon, WarningIcon } from "@chakra-ui/icons";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [isError, setIsError] = useState(false);
  // const [value, setValue] = useState("");
  const navigate = useNavigate();
  const disptach = useDispatch();
  const toast = useToast();

  const handleSubmit = () => {
    let userObj = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      mobileNumber: mobileNumber,
      password: password,
      gender: gender,
    };
    // console.log(userObj);
    fetch(`http://localhost:8080/user`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(userObj),
    })
      .then((res) => {
        disptach(signup(userObj)).then(() => {
          navigate("/login");
          console.log("sucess");
        });
        toast({
          position: "bottom-center",
          render: () => (
            <Flex
              color="white"
              p={"10px"}
              bgColor="green.400"
              borderRadius={"15px"}
            >
              <CheckCircleIcon w={30} h={30} />
              <Text size="lg" ml="15px">
                You are Successfully Registered
              </Text>
            </Flex>
          ),
        });
      })
      .catch((error) => {
        console.log(error);
        toast({
          position: "bottom-center",
          render: () => (
            <Flex
              color="white"
              borderRadius={"15px"}
              p={"10px"}
              bgColor="red"
              alignItems={"center"}
            >
              <WarningIcon w={30} h={30} />
              <Text size="lg" ml="15px">
                Ohh ! Sorry, You entered Wrong Email or Password. Please Enter
                Correct Details. Try Again SignUp!
              </Text>
            </Flex>
          ),
        });
      });
  };

  return (
    <>
      <Navbar />

      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack mt={"50px"} spacing={8} mx={"auto"} maxW={"xl"} py={12} px={6}>
          <Stack align={"center"}>
            <Text
              fontSize={"14px"}
              fontFamily="sans-serif"
              fontWeight={"semibold"}
              color={"black"}
            >
              Sign Up with Caratlane
            </Text>
          </Stack>
          <Divider />
          <Stack direction={"row"} gap="40px">
            <Center>
              <Button
                border={"1px solid #ADA9AD"}
                _hover={{ border: "1px solid #ADA9AD" }}
                w={"100%"}
                maxW={"full"}
                variant={"outline"}
                leftIcon={<FaFacebook />}
              >
                <Center ml={"20px"}>
                  <Text>Facebook</Text>
                </Center>
              </Button>
            </Center>

            <Center>
              <Button
                border={"1px solid #ADA9AD"}
                _hover={{ border: "1px solid #ADA9AD" }}
                w={"full"}
                maxW={"md"}
                variant={"outline"}
                leftIcon={<FcGoogle />}
              >
                <Center ml={"20px"}>
                  <Text>Google</Text>
                </Center>
              </Button>
            </Center>
          </Stack>

          <Stack direction="row" gap={"10px"}>
            <Divider orientation="horizontal" />
            <Text>Or</Text>
            <Divider orientation="horizontal" />
          </Stack>

          <Box rounded={"lg"}>
            <Stack spacing={4}>
              <Box>
                <Stack direction={"row"}>
                  <FormControl>
                    <FormLabel
                      fontSize={"13px"}
                      fontFamily="sans-serif"
                      color="#4F3267"
                      fontWeight={"semibold"}
                    >
                      ISD
                    </FormLabel>
                    <Input
                      w="30%"
                      type="tel"
                      placeholder="91"
                      border={"1px solid #ADA9AD"}
                      _hover={{ border: "1px solid #ADA9AD" }}
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel
                      fontSize={"13px"}
                      fontFamily="sans-serif"
                      color="#4F3267"
                      fontWeight={"semibold"}
                    >
                      Mobile Number
                    </FormLabel>
                    <Input
                      w={"100%"}
                      type="tel"
                      placeholder="phone number"
                      border={"1px solid #ADA9AD"}
                      _hover={{ border: "1px solid #ADA9AD" }}
                      value={mobileNumber}
                      onChange={(e) => {
                        setMobileNumber(e.target.value);
                        if (e.target.value.length > 10) {
                          setIsError(true);
                        }
                      }}
                    />
                  </FormControl>
                </Stack>
              </Box>
              <FormControl>
                <FormLabel
                  fontSize={"13px"}
                  fontFamily="sans-serif"
                  color="#4F3267"
                  fontWeight={"semibold"}
                >
                  Email address
                </FormLabel>
                <Input
                  type="email"
                  border={"1px solid #ADA9AD"}
                  _hover={{ border: "1px solid #ADA9AD" }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>

              <HStack>
                <Box>
                  <FormControl>
                    <FormLabel
                      fontSize={"13px"}
                      fontFamily="sans-serif"
                      color="#4F3267"
                      fontWeight={"semibold"}
                    >
                      First Name
                    </FormLabel>
                    <Input
                      type="text"
                      border={"1px solid #ADA9AD"}
                      _hover={{ border: "1px solid #ADA9AD" }}
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl>
                    <FormLabel
                      fontSize={"13px"}
                      fontFamily="sans-serif"
                      color="#4F3267"
                      fontWeight={"semibold"}
                    >
                      Last Name
                    </FormLabel>
                    <Input
                      type="text"
                      border={"1px solid #ADA9AD"}
                      _hover={{ border: "1px solid #ADA9AD" }}
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </FormControl>
                </Box>
              </HStack>

              <FormControl>
                <FormLabel
                  fontSize={"13px"}
                  fontFamily="sans-serif"
                  color="#4F3267"
                  fontWeight={"semibold"}
                >
                  Password
                </FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    border={"1px solid #ADA9AD"}
                    _hover={{ border: "1px solid #ADA9AD" }}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? (
                        <Text fontSize={"10px"} color="#DE57E5">
                          {" "}
                          SHOW
                        </Text>
                      ) : (
                        <Text fontSize={"10px"} color="#DE57E5">
                          {" "}
                          HIDE
                        </Text>
                      )}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <RadioGroup
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <Stack direction="row">
                  <Radio value="male">
                    {" "}
                    <Text fontSize={"13px"} fontFamily="sans-serif">
                      {" "}
                      Male
                    </Text>
                  </Radio>
                  <Radio value="female">
                    <Text fontSize={"13px"} fontFamily="sans-serif">
                      {" "}
                      Female
                    </Text>
                  </Radio>
                  <Radio value="other">
                    <Text fontSize={"13px"} fontFamily="sans-serif">
                      I don't want to specify
                    </Text>
                  </Radio>
                </Stack>
              </RadioGroup>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="md"
                  bg={"#DE57E5"}
                  color={"white"}
                  _hover={{
                    bg: "#DE57E5",
                  }}
                  onClick={() => handleSubmit()}
                >
                  REGISTER TO CONTINUE
                </Button>
              </Stack>
              <Stack>
                <Text align={"center"} fontSize="12px" direction={"row"}>
                  Already have an account?{" "}
                  <Link to="/cart">
                    {" "}
                    <Text color="#DE57E5">LOGIN</Text>
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      <Footer />
    </>
  );
};

export default SignIn;
