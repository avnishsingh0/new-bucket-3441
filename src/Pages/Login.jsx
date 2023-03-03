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
} from "@chakra-ui/react";
import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import { useDispatch } from "react-redux";
import { login } from "../Redux/AuthReducer/action";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const disptach = useDispatch();
  const navigate = useNavigate();

  const Loginhandler = () => {
    let userData = { email, password };
    if (validate()) {
      disptach(login(userData)).then(() => {
        navigate("/");
      });
    }
  };

  const validate = () => {
    let result = true;
    if (email === "" || email === null) {
      result = false;
      console.log("Please Enter email");
      alert("Please Enter Valid Email");
    }
    if (password === "" || password === null) {
      result = false;
      console.log("Please Enter Password");
      alert("Wrong Password");
    }
    return result;
  };

  return (
    <>
      <Navbar />
      <Flex
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack mt={"50px"} spacing={8} mx={"auto"} py={12} px={6}>
          <Stack align={"center"}>
            <Text
              fontSize={"14px"}
              fontFamily="sans-serif"
              fontWeight={"semibold"}
              color={"black"}
            >
              Login to caratlane
            </Text>
          </Stack>
          <Divider />
          <Stack alignContent={"center"} direction={"row"} mr="auto" gap="40px">
            <Box mt>
              <Button
                w={"100%"}
                maxW={"full"}
                variant={"outline"}
                leftIcon={<FaFacebook />}
              >
                <Center ml={"20px"}>
                  <Text>Facebook</Text>
                </Center>
              </Button>
            </Box>

            <Center>
              <Button
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
            <Text>OR</Text>
            <Divider orientation="horizontal" />
          </Stack>

          <Box rounded={"lg"}>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel
                  fontSize={"13px"}
                  fontFamily="sans-serif"
                  color="#4F3267"
                  fontWeight={"semibold"}
                >
                  Enter Mobile Number or Email
                </FormLabel>
                <Input
                  type="email"
                  border={"1px solid #ADA9AD"}
                  _hover={{ border: "1px solid #ADA9AD" }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>

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
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="md"
                  bg={"#DE57E5"}
                  color={"white"}
                  _hover={{
                    bg: "#DE57E5",
                  }}
                  onClick={Loginhandler}
                >
                  LOGIN
                </Button>
              </Stack>
              <Stack direction="row" gap={"10px"}>
                <Divider orientation="horizontal" mt={"10px"} />
                <Text>OR</Text>
                <Divider orientation="horizontal" />
              </Stack>

              <Stack>
                <Text align={"center"} fontSize="12px" direction={"row"}>
                  New to Caratlane?{" "}
                  <Link to="/signIn">
                    {" "}
                    <Text color="#DE57E5">Create an Account</Text>
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

export default Login;
