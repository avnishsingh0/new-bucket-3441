import { SingleProdCard } from "./SingleProdCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../../Redux/AppReducer/action";
import { Box, Grid } from "@chakra-ui/react";

export const Products = () => {
  const dispatch = useDispatch();
  const { products, isLoading } = useSelector((store) => store.AppReducer);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <>
      {!isLoading && (
        <Grid templateColumns="repeat(3, 1fr)">
          {products.map((el) => {
            return <SingleProdCard key={el.id} {...el} />;
          })}
        </Grid>
      )}
    </>
  );
};
