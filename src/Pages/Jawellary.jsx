import { Box, Flex, Image, Spacer } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../Components/Footer";
import { Filter } from "../Components/Jewellery/Filter";
import { Products } from "../Components/Jewellery/Products";
import { Sortbybar } from "../Components/Jewellery/Sortbybar";
import Navbar from "../Components/Navbar";
import { getProducts } from "../Redux/AppReducer/product/action";

export const Jawellary = () => {
  const dispatch = useDispatch();
  const [sort, setSort] = useState([]);
  const categories = [
    "Earrings",
    "Rings",
    "Necklaces",
    "Pendants",
    "Bracelets",
    "Mangalsutra",
  ];
  const prices= [
    'Under ₹50,000',
    '₹50,000 - ₹1,00,000',
    'Over ₹1,00,000'
  ]
  const { products } = useSelector((store) => store.AppReducer);
  const [prodType, setProdType] = useState({
    filters: new Set(),
    product: products,
  });
  const onFilterChange = (e) => {
    setProdType((previousState) => {
      let filters = new Set(previousState.filters);
      let product = products;

      if (e.target.checked) {
        filters.add(e.target._wrapperState.initialValue);
        // setSort([...sort,e.target._wrapperState.initialValue])
      } else {
        filters.delete(e.target._wrapperState.initialValue);
      }

      if (filters.size) {
        product = product.filter((product) => {
          return filters.has(product.type);
        });
      }

      return {
        filters,
        product,
      };
    });
  };
  const onFilterPrice= (e)=>{
    setProdType((previousState) => {
      let filters = new Set(previousState.filters);
      let product = products;
      if (e.target.checked) {
        filters.add(e.target._wrapperState.initialValue);
      } else {
        filters.delete(e.target._wrapperState.initialValue);
      }

      if (filters.size) {
        product = product.filter((product) => {
          return filters.has(product.pv);
        });
      }

      return {
        filters,
        product,
      };
    });
  }

  useEffect(() => {
    dispatch(getProducts());
    setProdType(products);
  }, []);

  return (
    <Box>
      <Box>
        <Navbar />
      </Box>
      <Box pt={"110px"}>
        <Box>
          <Image src="https://cdn.caratlane.com/media/static/images/V4/2022/Shaya/12_Dec/19)12_2022/CL_x_Shaya_Banners/Desktop_Toplisting_1920x560.jpg" />
          <Sortbybar sortby={sort} />
        </Box>
        <Flex
          direction={{
            base: "column",
            sm: "column",
            md: "column",
            lg: "row",
          }}
        >
          <Box
            w={{
              base: "100%",
              sm: "100%",
              md: "100%",
              lg: "25%",
            }}
            p={5}
            position={{
              base: "sticky",
              lg: "sticky",
            }}
            top={{
              base: "10%",
              lg: "20%",
            }}
          >
            <Filter onFilterChange={onFilterChange} categories={categories} prices={prices} onFilterPrice={onFilterPrice} />
          </Box>
          <Spacer />
          <Box
            w={{
              base: "100%",
              sm: "100%",
              md: "100%",
              lg: "70%",
            }}
          >
            <Products prod={prodType.product || products} />
          </Box>
        </Flex>
      </Box>
      <Footer />
    </Box>
  );
};
