import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  Image,
  Flex,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useThrottle } from "use-throttle";

const Search = ({ queryHandler, suggestions }) => {
  const [input, setInput] = useState("");

  const inputChangeHandler = (e) => {
    setInput(e.target.value);
  };
  const throttleText = useThrottle(input, 1000);

  useEffect(() => {
    queryHandler(throttleText);
  }, [throttleText, queryHandler]);

  return (
    <>
      {" "}
      <Box className="input-box">
        <InputGroup>
          <InputRightElement
            pointerEvents="none"
            bgGradient="linear(to-l, #7918CA, #FF0888)"
            children={<SearchIcon />}
          />
          <Input
            _focusVisible={{ border: "1px solid purple" }}
            border={"1px solid purple"}
            placeholder="search"
            _placeholder={{ color: "black" }}
            bg={"white"}
            rounded="none"
            value={input}
            onChange={inputChangeHandler}
            w={{ base: "200px", sm: "200px", md: "190px" }}
            fontSize={"11px"}
            color={"black"}
            type="text"
          />
        </InputGroup>
        <Box
          w={{ md: "190px" }}
          limit={5}
          position="absolute"
          top={{ sm: "33%", md: "45%" }}
          borderTopColor="transparent"
          bg={"white"}
          zIndex="1"
          padding="10px"
        >
          {suggestions.map((item, index) => {
            return (
              <div key={index}>
                <Link to="/jawellary">
                  <Flex>
                    <Text
                      fontSize={"10px"}
                      padding={"10px"}
                      borderBottom="1px "
                    >
                      {" "}
                      {item.name}
                    </Text>
                    <Image src={item.image1} w="30%" h="30%" />
                  </Flex>
                </Link>
              </div>
            );
          })}
        </Box>
      </Box>
    </>
  );
};
export default Search;
