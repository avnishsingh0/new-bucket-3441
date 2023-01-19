import { Box, Flex, Image, Spacer } from "@chakra-ui/react";
import { Filter } from "../Components/Jewellery/Filter";
import { Products } from "../Components/Jewellery/Products";
import { Sortbybar } from "../Components/Jewellery/Sortbybar";

export const Jawellary = () => {
  return (
    <>
      <Box>
      <Box>
        <Image src="https://cdn.caratlane.com/media/static/images/V4/2022/Shaya/12_Dec/19)12_2022/CL_x_Shaya_Banners/Desktop_Toplisting_1920x560.jpg"/>
        <Sortbybar/>
      </Box>
        <Flex>
          <Box w={'20%'}>
            <Filter />
          </Box>
          <Spacer/>
          <Box w={'70%'}>
            <Products />
          </Box>
        </Flex>
      </Box>
    </>
  );
};
