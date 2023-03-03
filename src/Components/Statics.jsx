import { Box, Image, SimpleGrid } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";

const Statics = () => {
  return (
    <Box m={5} mt={-20}>
      <SimpleGrid columns={[1, 2, 2, 3]}>
        <Image
          mt={4}
          src="https://cdn.caratlane.com/media/static/images/V4/2022/CL/12-DEC/HP-Banner/6tile/01/Desktop_5.jpg"
        />
        <Image
          mt={4}
          src="https://cdn.caratlane.com/media/static/images/V4/2022/CL/12-DEC/HP-Banner/6tile/01/Desktop_1.jpg"
        />
        <Image
          mt={4}
          src="https://cdn.caratlane.com/media/static/images/V4/2022/CL/12-DEC/HP-Banner/6tile/01/Desktop_2.jpg"
        />
        <Image
          mt={4}
          src="https://cdn.caratlane.com/media/static/images/V4/2022/CL/12-DEC/HP-Banner/6tile/01/Desktop_3.jpg"
        />
        <Image
          mt={4}
          src="https://cdn.caratlane.com/media/static/images/V4/2022/CL/12-DEC/HP-Banner/6tile/01/Desktop_7.jpg"
        />
        <Image
          mt={4}
          src="https://cdn.caratlane.com/media/static/images/V4/2022/CL/12-DEC/HP-Banner/6tile/01/Desktop_7.jpg"
        />
      </SimpleGrid>
    </Box>
  );
};

export default Statics;
