import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import { SiMessenger } from "react-icons/si";
import React, { useState } from "react";
import SidebarWithHeader from "./Sidebar";
import MessengerButton from "./Button";
const Package = () => {
  const [name, setName] = useState("");
  const [product, setProduct] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [originprice, setOprice] = useState("");
  const [catogery, setCatogery] = useState("");


  function saveData() {
    let data = { name, product, image,price,originprice,catogery };
    // console.warn(data);
    fetch("http://localhost:8080/posts", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((resp) => {
      // console.warn("resp",resp);;
      resp.json().then((result) => {
        console.warn("result", result);
      });
    });
  }

  return (
    <Box>
      <SidebarWithHeader />
      <Box
        p={5}
        ml={300}
        mt={50}
        w={"30%"}
        border={"2px solid cyan"}
        borderRadius={15}
        textAlign={"center"}
      >
        <label>ADD PRODUCT</label>
        <br />
        <br />
        <Select placeholder="Select Catogery">
          <option
            value={catogery}
            onChange={(e) => {
              setCatogery(e.target.value);
            }}
          >
            Jwellery
          </option>
        </Select>
        <br />
        <Input
          placeholder="Enter product name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <br />
        <Input
          placeholder="Enter Original price"
          value={originprice}
          onChange={(e) => {
            setOprice(e.target.value);
          }}
        />
        <br />
        <br />
        <Input
          placeholder="Enter image url"
          value={image}
          onChange={(e) => {
            setImage(e.target.value);
          }}
        />
        <br />
        <br />
        <Input
          placeholder="Discount Price"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />

        <Center p={0} mt={5}>
          <Button
            w={"full"}
            maxW={"md"}
            colorScheme={"messenger"}
            onClick={saveData}
          >
            <Center>
              <Text>Add Product</Text>
            </Center>
          </Button>
        </Center>
      </Box>
    </Box>
  );
};

export default Package;
