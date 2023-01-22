
import {
    Box,
    Card,
    CardBody,
    HStack,
    Image,
    Text,
   
    
} from '@chakra-ui/react'

const SinglePaymentCard = ({ product }) => {
    

  return (

    <Box w="100%"  border="1px solid gray.800" >
                <HStack w="100%">
                  <Image maxW="20%" src={product.image1}></Image>
                  <Card w="60%">
                    <CardBody>
                      <Text>{product.name}|Size: {product.size}</Text>
                      <Text>Quantity: {product.quantity}</Text>
                      <Text>Expected Delivery - within 15 days</Text>
                    </CardBody>
                  </Card>
                  <Card w="20%" justifyContent="bottom">
                    <CardBody>
                      <Text as="b" textAlign="right" ml="0.5rem">₹{product.totalPrice}</Text>
                      
                    </CardBody>
                  </Card>
                </HStack>
              </Box>
              
                                  
    
  )
}

export default SinglePaymentCard