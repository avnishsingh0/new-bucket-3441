import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  chakra,
  VisuallyHidden,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import {
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";
import { AiOutlineFacebook } from "react-icons/ai";
import { IoIosCall } from "react-icons/io";
import { RiMessage2Fill } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      fontSize={"20px"}
      cursor={"pointer"}
      as={"a"}
      color={"#DE57E5"}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("#F6F4ff", "#F6F4ff")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 5 }} spacing={8}>
          <Stack align={"flex-start"}>
            <Text fontSize={"14px"} fontFamily="sans-serif">
              Know Your Jawellary
            </Text>
            <Link
              href={"#"}
              fontSize={"11px"}
              color="#87769D"
              lineHeight={"20px"}
            >
              DIAMOND GUIDE
            </Link>
            <Link
              href={"#"}
              fontSize={"11px"}
              color="#87769D"
              lineHeight={"20px"}
            >
              JEWELLERY GUID
            </Link>
            <Link
              href={"#"}
              fontSize={"11px"}
              color="#87769D"
              lineHeight={"20px"}
            >
              GEMSTONES GUID
            </Link>
            <Link
              href={"#"}
              fontSize={"11px"}
              color="#87769D"
              lineHeight={"20px"}
            >
              GOLD RATE
            </Link>
            <Link
              href={"#"}
              fontSize={"11px"}
              color="#87769D"
              lineHeight={"20px"}
            >
              DIGITAL GOLD
            </Link>
          </Stack>

          <Stack align={"flex-start"}>
            <Text fontSize={"14px"} fontFamily="sans-serif">
              CaratLane Advantage
            </Text>
            <Link
              href={"#"}
              fontSize={"11px"}
              color="#87769D"
              lineHeight={"20px"}
            >
              15-DAY RETURN{" "}
            </Link>
            <Link
              href={"#"}
              fontSize={"11px"}
              color="#87769D"
              lineHeight={"20px"}
            >
              FREE SHIPPING{" "}
            </Link>
            <Link
              href={"#"}
              fontSize={"11px"}
              color="#87769D"
              lineHeight={"20px"}
            >
              FINANACING OPTION
            </Link>
            <Link
              href={"#"}
              fontSize={"11px"}
              color="#87769D"
              lineHeight={"20px"}
            >
              GOLD RATE
            </Link>
            <Link
              href={"#"}
              fontSize={"11px"}
              color="#87769D"
              lineHeight={"20px"}
            >
              OLD GOLD EXCHANGE
            </Link>
          </Stack>

          <Stack align={"flex-start"}>
            <Text fontSize={"14px"} fontFamily="sans-serif">
              Customer Service
            </Text>
            <Link
              href={"#"}
              fontSize={"11px"}
              color="#87769D"
              lineHeight={"20px"}
            >
              RETURN POLICY
            </Link>
            <Link
              href={"#"}
              fontSize={"11px"}
              color="#87769D"
              lineHeight={"20px"}
            >
              ORDER STATUS
            </Link>
          </Stack>

          <Stack align={"flex-start"}>
            <Text fontSize={"14px"} fontFamily="sans-serif">
              About Us
            </Text>
            <Link
              href={"#"}
              fontSize={"11px"}
              color="#87769D"
              lineHeight={"20px"}
            >
              OUR STORY{" "}
            </Link>
            <Link
              href={"#"}
              fontSize={"11px"}
              color="#87769D"
              lineHeight={"20px"}
            >
              PRESS
            </Link>
            <Link
              href={"#"}
              fontSize={"11px"}
              color="#87769D"
              lineHeight={"20px"}
            >
              BLOG
            </Link>
            <Link
              href={"#"}
              fontSize={"11px"}
              color="#87769D"
              lineHeight={"20px"}
            >
              CAREERS
            </Link>
          </Stack>

          <Stack align={"flex-start"}>
            <Text fontSize={"14px"} fontFamily="sans-serif">
              Contact Us
            </Text>
            <Stack direction={"row"} spacing={3}>
              <IoIosCall />
              <RiMessage2Fill />
              <FaWhatsapp />
            </Stack>
            <Text fontSize={"11px"} color="#87769D" lineHeight={"20px"}>
              24X7 Enquiry Support ( ALL Days )
            </Text>
            <Text fontSize={"11px"} color="#87769D" lineHeight={"20px"}>
              General :{" "}
              <Text
                // as={"mail"}
                lineHeight={"20px"}
                color="#DE57E5"
                fontSize={"11px"}
                textDecoration={"underline solid rgba(222,87,229)"}
              >
                {" "}
                Contactus@Caratlane.Com{" "}
              </Text>
            </Text>
            <Text fontSize={"11px"} color="#87769D" lineHeight={"20px"}>
              Corporate :{" "}
              <Text
                // as={"mail"}
                lineHeight={"20px"}
                color="#DE57E5"
                fontSize={"11px"}
                textDecoration={"underline solid rgba(222,87,229)"}
              >
                {" "}
                B2B@Caratlane.Com{" "}
              </Text>
            </Text>
            <Text fontSize={"11px"} color="#87769D" lineHeight={"20px"}>
              HR :{" "}
              <Text
                // as={"mail"}
                lineHeight={"20px"}
                color="#DE57E5"
                fontSize={"11px"}
                textDecoration={"underline solid rgba(222,87,229)"}
              >
                {" "}
                Careers@Caratlane.Com{" "}
              </Text>
            </Text>
            <Text fontSize={"11px"} color="#87769D" lineHeight={"20px"}>
              Grievance :{" "}
              <Text
                // as={"mail"}
                lineHeight={"20px"}
                color="#DE57E5"
                fontSize={"11px"}
                textDecoration={"underline solid rgba(222,87,229)"}
              >
                {" "}
                Click Here{" "}
              </Text>
            </Text>
          </Stack>
        </SimpleGrid>
        <Box>
          <Container
            mt={"20px"}
            as={Stack}
            maxW={"1xl"}
            direction={{ base: "column", md: "row" }}
            spacing={1}
            align={{ md: "center" }}
          >
            <Stack direction={"row"} spacing={6}>
              <SocialButton label={"fb"} href={"#"}>
                <AiOutlineFacebook />
              </SocialButton>
              <SocialButton label={"Twitter"} href={"#"}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={"YouTube"} href={"#"}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"#"}>
                <FaInstagram />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"#"}>
                <FaPinterestP />
              </SocialButton>
            </Stack>
            <Stack direction={"row"} spacing={2}>
              <Stack direction={"row"} spacing={2}>
                <Image
                  w={"13%"}
                  src="https://www.logo.wine/a/logo/Google_Play/Google_Play-Badge-Logo.wine.svg"
                />
                <Image
                  w={"10%"}
                  src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg"
                />
              </Stack>
              <Stack>
                {" "}
                <Image
                  w={"100%"}
                  src="https://www.paypalobjects.com/webstatic/mktg/logo/AM_mc_vs_dc_ae.jpg"
                />{" "}
              </Stack>
            </Stack>
          </Container>
        </Box>
      </Container>
    </Box>
  );
}
