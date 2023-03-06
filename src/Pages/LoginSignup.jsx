import {
  Box,
  Image,
  Heading,
  Text,
  Input,
  Button,
  SimpleGrid,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialog,
  useDisclosure,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

import {
  getUserLoginDetails,
  postNewUserLoginDetails,
  updateUserAuthStatus,
} from "./../Redux/AuthReducer/action";

export const initialState = {
  firstName: "",
  lastName: "",
  mobile: "",
  email: "",
  password: "",
  confirmPassword: "",
  otp: "",
  isLoading: false,
  isError: false,
  isAuth: false,
};
const existingUser = {
  existingEmail: "",
  existingPassword: "",
};
let userExist;
export function LoginSignup() {
  //-------------------------------HOOKS-------------------------------------------------------------
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  const [userData, setUserData] = useState(initialState);
  const [existingUserData, setExistingUserData] = useState(existingUser);
  const [checkMsg, setCheckMsg] = useState("Incorrect OTP");
  const [color, setColor] = useState("red");
  const [otp, setOtp] = useState("");
  const [visible, setVisible] = useState(false);
  const btnRef = useRef();
  const otpRef = useRef();
  const navigate = useNavigate();
  const [showMatchStatus, setShowMatchStatus] = useState(false);
  const [matchStatus, setMatchStatus] = useState("passwords dont match");

  const dispatch = useDispatch();
  const [showForm1, setShowForm1] = useState(true);
  const [showForm2, setShowForm2] = useState(false);
  const [showForm3, setShowForm3] = useState(false);

  //------------------------FUNCTIONS----------------------------------------------------------
  const getInput = (e) => {
    let name = e.target.name;
    if (name === "existingEmail" || name === "existingPassword") {
      setExistingUserData(
        (prev) => (prev = { ...prev, [name]: e.target.value })
      );
      console.log(name);
    } else {
      setUserData((prev) => (prev = { ...prev, [name]: e.target.value }));
      if (e.target.name === "mobile") {
        btnRef.current.disabled = false;
      }
      if (e.target.name === "confirmPassword") {
        setShowMatchStatus(true);
        if (e.target.value === userData.password) {
          otpRef.current.disabled = false;
          setMatchStatus("passwords match");
          setColor("green");
        } else {
          otpRef.current.disabled = true;
          setMatchStatus("passwords dont match");
          setColor("red");
        }
      }
      if (e.target.name === "otp") {
        setShowMatchStatus(false);
        setVisible(true);
        if (e.target.value === otp) {
          setCheckMsg("OTP Matched");
          setColor("green");
          setUserData((prev) => (prev = { ...prev, isAuth: true }));
        } else {
          setCheckMsg("Incorrect OTP");
          setColor("red");
        }
        if (e.target.value.length === 0) {
          setVisible(false);
        }
      }
    }
  };

  const toggleForms = async (e) => {
    if (e.target.innerText === "Proceed") {
      await dispatch(getUserLoginDetails(userData.mobile));
      userExist = JSON.parse(localStorage.getItem("currentUser"));

      console.log(userExist, "current which tried to login");
      if (userExist) {
        updateUserAuthStatus(userExist.id, { isAuth: true });
        userExist.isAuth = true;
        localStorage.setItem("currentUser", JSON.stringify(userExist));
        setShowForm3(true);

        setShowForm1(false);
        setShowForm2(false);
      } else {
        setShowForm3(false);
        setVisible(false);
        setShowForm1((prev) => !prev);
        setShowForm2((prev) => !prev);
      }
    } else if (e.target.innerText === "Cancel") {
      setUserData(initialState);
    }
  };
  const addUser = async () => {
    console.log(userData, "from addUser function in login signup");
    let res = await dispatch(postNewUserLoginDetails(userData));
    console.log(res, "response from login signup");
    alert("User Succesfully Registerd");
    navigate("/");
  };
  const checkCredentials = () => {
    console.log(userExist, "userExit from localt storage");
    console.log(existingUserData, "existing user data");
    userExist = JSON.parse(localStorage.getItem("currentUser"));
    if (
      existingUserData.existingEmail === userExist.email &&
      existingUserData.existingPassword === userExist.password
    ) {
      navigate("/");
    } else {
      alert("email or password is wrong");
    }
  };

  const otpHand = () => {
    const digits = "0123456789";
    let OTP = "";
    for (let i = 0; i < 4; i++) {
      OTP += digits[Math.floor(Math.random() * 10)];
    }
    setOtp(OTP);
  };
  const twoFunc = () => {
    onOpen(otpHand());
  };
  //------------------------------------RETURN---------------------------------------------------------
  return (
    <>
      <Navbar />
      <Box
        display="flex"
        borderRadius="10px"
        boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
        width="80%"
        height="auto"
        margin="auto"
        mb={"30px"}
        padding={"4%"}
      >
        <SimpleGrid
          justifyContent={"center"}
          columns={{ base: 1, sm: 1, md: 2 }}
        >
          <Box mt="100px">
            <Image
              w="100%"
              h={"90%"}
              src="https://cdn.caratlane.com/media/catalog/product/U/R/UR00214-YG0000_7_lar.jpg"
              alt="loginImage"
              borderRadius="10px 0px 0px 10px"
            />
          </Box>

          {/* <Box w="50%" padding="5px"> */}
          {/* ---------------------------------------------1st form conditional rendering-------------------------------------------------------------- */}
          {showForm1 && (
            <Box boxShadow={"sm"}>
              <Box
                align="center"
                margin="auto"
                w="100%"
                mt={{ sm: "10px", md: "150px" }}
              >
                <Heading>Sign In</Heading>
                <Text mt="5px" color={"gray.600"}>
                  Sign in to access your Orders, Offers and Wishlist.
                </Text>
              </Box>
              <FormControl
                width={{ base: "100%", sm: "100%", md: "80%" }}
                margin="auto"
              >
                <FormLabel fontSize={"13px"} mt="50px">
                  Please Enter your Mobile Number
                </FormLabel>
                <InputGroup>
                  <InputLeftAddon border={"1px solid #ADA9AD"} children="+91" />
                  <Input
                    type="tel"
                    placeholder="phone number"
                    border={"1px solid #ADA9AD"}
                    _hover={{ border: "1px solid #ADA9AD" }}
                    name="mobile"
                    value={userData.mobile}
                    onChange={getInput}
                  />
                </InputGroup>
                <Button
                  mt="20px"
                  justifyContent={"center"}
                  isDisabled={userData.mobile.length === 0}
                  ref={btnRef}
                  onClick={toggleForms}
                  bg={"#DE57E5"}
                  color={"white"}
                  _hover={{
                    bg: "#DE57E5",
                  }}
                  border={"1px solid #ADA9AD"}
                >
                  Proceed
                </Button>
              </FormControl>
            </Box>
          )}
          {/*-----------------------------------2nd form conditional rendering------------------------------------------------------  */}
          {showForm2 && (
            <Box alignContent={"right"}>
              <Heading>Sign Up</Heading>
              <FormControl width="50%" margin="auto" mt="30px">
                <FormLabel fontSize={"13px"}>
                  Start by entering your First Name
                </FormLabel>
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
                  name="firstName"
                  placeholder={"First Name"}
                  border={"1px solid #ADA9AD"}
                  _hover={{ border: "1px solid #ADA9AD" }}
                  onChange={getInput}
                />

                <FormLabel
                  fontSize={"13px"}
                  mt="10px"
                  fontFamily="sans-serif"
                  color="#4F3267"
                  fontWeight={"semibold"}
                >
                  Last Name
                </FormLabel>
                <Input
                  name="lastName"
                  type="text"
                  placeholder={"Last Name"}
                  border={"1px solid #ADA9AD"}
                  _hover={{ border: "1px solid #ADA9AD" }}
                  onChange={getInput}
                  value={userData.lastName}
                  isDisabled={userData.firstName.length === 0}
                />
                <FormLabel
                  fontSize={"13px"}
                  mt="10px"
                  fontFamily="sans-serif"
                  color="#4F3267"
                  fontWeight={"semibold"}
                >
                  Email
                </FormLabel>
                <Input
                  name="email"
                  type="email"
                  placeholder={"Email"}
                  border={"1px solid #ADA9AD"}
                  _hover={{ border: "1px solid #ADA9AD" }}
                  onChange={getInput}
                  value={userData.email}
                  isDisabled={userData.lastName.length === 0}
                />
                <FormLabel
                  fontSize={"13px"}
                  mt="10px"
                  fontFamily="sans-serif"
                  color="#4F3267"
                  fontWeight={"semibold"}
                >
                  Password
                </FormLabel>
                <Input
                  name="password"
                  type="password"
                  placeholder={"Password"}
                  border={"1px solid #ADA9AD"}
                  _hover={{ border: "1px solid #ADA9AD" }}
                  onChange={getInput}
                  value={userData.password}
                  isDisabled={userData.email.length === 0}
                />
                <FormLabel
                  fontSize={"13px"}
                  mt="10px"
                  fontFamily="sans-serif"
                  color="#4F3267"
                  fontWeight={"semibold"}
                >
                  Confirm Password
                </FormLabel>
                <Input
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  type="password"
                  border={"1px solid #ADA9AD"}
                  _hover={{ border: "1px solid #ADA9AD" }}
                  onChange={getInput}
                  value={userData.confirmPassword}
                  isDisabled={userData.email.length === 0}
                />

                {showMatchStatus && (
                  <Text align="left" fontSize="15px" color={color}>
                    {matchStatus}
                  </Text>
                )}
                <Box mt={"10px"}>
                  <Button onClick={twoFunc}>GET OPT</Button>
                  <AlertDialog
                    h="300px"
                    motionPreset="slideInBottom"
                    leastDestructiveRef={cancelRef}
                    onClose={onClose}
                    isOpen={isOpen}
                    isCentered
                  >
                    <AlertDialogOverlay />
                    <AlertDialogContent>
                      <AlertDialogCloseButton />
                      <AlertDialogBody h={"300px"}>
                        Your OTP is {otp}
                      </AlertDialogBody>
                    </AlertDialogContent>
                  </AlertDialog>
                </Box>
                <Input
                  name="otp"
                  placeholder="Enter OTP"
                  border="2px solid gray"
                  value={userData.otp}
                  onChange={getInput}
                  ref={otpRef}
                  isDisabled
                />
                {visible && (
                  <Text fontSize="15px" color={color} align="left">
                    {checkMsg}
                  </Text>
                )}
                <Button onClick={(e) => toggleForms(e)} mt="20px" bg="red.500">
                  Cancel
                </Button>
                <Button
                  mt="20px"
                  isDisabled={userData.otp !== otp}
                  ml={"5px"}
                  onClick={addUser}
                  bg={"#DE57E5"}
                  _hover={{
                    bg: "#DE57E5",
                  }}
                >
                  Verify
                </Button>
              </FormControl>
            </Box>
          )}
          {/* ---------------------------------------3rd form---------------------------------------------------------------------------- */}
          {showForm3 && (
            <FormControl width="50%" margin="auto">
              <FormLabel mt="100px">Enter your Details to login</FormLabel>
              <Input
                mt="30px"
                border="2px solid gray"
                type="email"
                placeholder="Enter Email"
                name="existingEmail"
                value={existingUser.email}
                onChange={getInput}
              />

              <Input
                mt="30px"
                border="2px solid gray"
                type="password"
                placeholder="Enter Password"
                name="existingPassword"
                value={existingUser.password}
                onChange={getInput}
              />

              <Button mt="30px" onClick={checkCredentials} bg="orange">
                login
              </Button>
            </FormControl>
          )}
        </SimpleGrid>
      </Box>
      <Footer />
    </>
  );
}
