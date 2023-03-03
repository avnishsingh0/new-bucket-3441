import { Box, Flex, Grid, GridItem, Image } from "@chakra-ui/react";
import React from "react";

const Hero = () => {
  return (
    <Flex
      gap={5}
      m={5}
      flexDirection={["column", "column", "column", "row", "row"]}
    >
      <Image src="https://cdn.caratlane.com/media/static/images/V4/2022/Shaya/10_OCT/11_10_2022/Revised/Responsive-Banner.jpg" />
      <Box gap={10}>
        <Image src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/01-JAN/HP-Banner/JustArrived/1X.jpg" />
        <Image
          mt={5}
          src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/01-JAN/AppBanner/Festive/01/2X.jpg"
        />
      </Box>
    </Flex>
  );
};

export default Hero;
