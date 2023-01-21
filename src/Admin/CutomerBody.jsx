import React from "react";
import {
  Box,
  Button,
  Img,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
const CutomerBody = ({ name, gender, role, maritalStatus ,deleteItem}) => {
  return (
    <Tbody>
      <Tr>
        <Td>
          <Img
            w={50}
            h={50}
            src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F1_2d186f9b-9024-4e23-a0d2-a55b7671e89c.jpg%3Fv%3D1657123108&w=256&q=75"
          />
        </Td>
        <Td>{name}</Td>
        <Td>25.4</Td>
        <Td>25.4</Td>
        <Td>
        <Button bg="tomato" variant="solid" onClick={deleteItem}>
            Edit
          </Button>
        </Td>
        <Td>
          <Button bg="tomato" variant="solid" onClick={deleteItem}>
            Delete
          </Button>
        </Td>
      </Tr>
    </Tbody>
  );
};

export default CutomerBody;
