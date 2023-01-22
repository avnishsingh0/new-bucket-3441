import SidebarWithHeader from "./Sidebar";
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
// import SidebarWithHeader from "./Sidebar";
const Order = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    getJewlery();
  }, [1]);
  function getJewlery() {
    fetch("http://localhost:8080/posts").then((result) => {
      result.json().then((resp) => {
        // console.log(resp);
        setCart(resp);
      });
    });
  }
  function deleteItem(id) {
    fetch(`http://localhost:8080/posts/${id}`, {
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
              <Th>Item Image</Th>
              <Th>Item name</Th>
              <Th>Payment</Th>
              <Th>Address</Th>
              <Th>Reject</Th>
            </Tr>
          </Thead>

          {cart.map((product, index) => (
            <Tbody key={index}>
              <Tr>
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
                  <Button
                    bg="tomato"
                    variant="solid"
                    onClick={() => deleteItem(product.id)}
                  >
                    Reject
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

export default Order;
