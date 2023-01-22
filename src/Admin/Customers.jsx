import {
  Box,
  Button,
  Img,
  Input,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import CutomerBody from "./CutomerBody";
import React, { useEffect, useState } from "react";
import SidebarWithHeader from "./Sidebar";
import InitialFocus from './Modal'
const Customers = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    getJewlery();
  }, [1]);
  function getJewlery() {
    fetch("https://caratlane-database.vercel.app/products").then((result) => {
      result.json().then((resp) => {
        // console.log(resp);
        setCart(resp);
      });
    });
  }

  function deleteItem(id) {
    fetch(`https://caratlane-database.vercel.app/products/${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((resp) => {
        console.log(resp);
        getJewlery();
      });
    });
  }
  return (
    <Box>
      <SidebarWithHeader />
      <TableContainer>
        <Table size="sm" ml={250} w={"80%"}>
          <Thead>
            <Tr>
              <Th>Sl.No</Th>
              <Th>Item Image</Th>
              <Th>Item name</Th>
              <Th>Offer Price</Th>
              <Th>Real Price</Th>
              <Th>Item Edit</Th>
              <Th>Item Delete</Th>
            </Tr>
          </Thead>
          {cart.map((product, index) => (
            <Tbody key={index} >
              <Tr>
              <Td fontWeight={'bold'}>{index+1}.</Td>
                <Td>
                  <Img
                    w={50}
                    h={50}
                    src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F1_2d186f9b-9024-4e23-a0d2-a55b7671e89c.jpg%3Fv%3D1657123108&w=256&q=75"
                  />
                </Td>
                <Td>{product.name}</Td>
                <Td>25.4</Td>
                <Td>25.4</Td>
                <Td>
                  <InitialFocus/>
                </Td>
                <Td>
                  <Button
                    bg="tomato"
                    variant="solid"
                    onClick={() => deleteItem(product.id)}
                  >
                    Delete
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          ))}
        </Table>
      </TableContainer>

     
    </Box>
  );
};

export default Customers;