import { Box, Image, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Carousel from "../Components/Carosel";
import CallToActionWithVideo from "../Components/Des";
import Hero from "../Components/Hero";
import Statics from "../Components/Statics";
import "aos/dist/aos.css";
import Aos from "aos";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 }, { offset: 2000 });
  }, []);
  return (
    <Box>
      <Navbar />
      <Box h={"7.6rem"}></Box>
      <Carousel />

      <Statics />
      <br />
      <Hero />
      <Box m={5} data-aos="fade-up">
        <SimpleGrid gap={5} columns={[1, 2, 2, 3]}>
          <Image
            mt={4}
            src="https://cdn.caratlane.com/media/static/images/V4/2022/CL/12-DEC/HP-Banner/Collection/02/Collection_Borla.jpg"
          />
          <Image
            mt={4}
            src="https://cdn.caratlane.com/media/static/images/V4/2022/CL/12-DEC/HP-Banner/Collection/02/Collection_Mogra.jpg"
          />
          <Image
            mt={4}
            src="https://cdn.caratlane.com/media/static/images/V4/2022/CL/12-DEC/HP-Banner/Collection/02/Collection_Harmony.jpg"
          />
        </SimpleGrid>
      </Box>

      <Box m={5} data-aos="fade-up">
        <SimpleGrid gap={5} columns={[1, 2, 2, 2]}>
          <Image
            mt={4}
            src="https://cdn.caratlane.com/media/static/images/V4/2022/CL/12-DEC/AppBanner/Personal/03/2X.jpg"
          />
          <Image
            mt={4}
            src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/01-JAN/AppBanner/Offer/02/2x.jpg"
          />
          <Image
            mt={4}
            src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/01-JAN/AppBanner/Offer/02/2x.jpg"
          />
          <Image
            mt={4}
            src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/01-JAN/AppBanner/Sale/01/2x.gif"
          />
        </SimpleGrid>
      </Box>

      <Box m={5} data-aos="fade-up">
        <SimpleGrid gap={5} columns={[1, 2, 2, 2]}>
          <Image
            mt={4}
            src="https://banner.caratlane.com/live-images/79a051bec38941a2a055387f502579a9.jpg"
          />
          <Image
            mt={4}
            src="https://banner.caratlane.com/live-images/bdd989ae1f2549ae9f8e8d41c144221e.jpg"
          />
        </SimpleGrid>
      </Box>
      <CallToActionWithVideo />
      <Footer />
    </Box>
  );
};

export default Home;
