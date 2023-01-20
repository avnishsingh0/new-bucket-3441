import {
  
  
  
    Flex,
    HStack,
    Image,
    
    
    Text,
    UnorderedList,
    ListItem,
    Spacer
  } from '@chakra-ui/react'
  import { Stack,StackDivider, VStack } from '@chakra-ui/react'
  
  
  import * as React from 'react';
  import CssBaseline from '@mui/material/CssBaseline';
  import AppBar from '@mui/material/AppBar';
  import Box from '@mui/material/Box';
  import Container from '@mui/material/Container';
  import Toolbar from '@mui/material/Toolbar';
  import Paper from '@mui/material/Paper';
  import Stepper from '@mui/material/Stepper';
  import Step from '@mui/material/Step';
  import StepLabel from '@mui/material/StepLabel';
  import Button from '@mui/material/Button';
  import Link from '@mui/material/Link';
  import Typography from '@mui/material/Typography';
  import { createTheme, ThemeProvider } from '@mui/material/styles';
  import AddressForm from './AddressForm';
  import PaymentForm from './PaymentForm';
  import Review from './Review';
  
  
  
  const steps = ['Shipping address', 'Payment details', 'Review your order'];
  
  function getStepContent(step) {
    switch (step) {
      case 0:
        return <AddressForm />;
      case 1:
        return <PaymentForm />;
      case 2:
        return <Review />;
      default:
        throw new Error('Unknown step');
    }
  }
  
  const theme = createTheme();
  
  export default function Checkout() {
    const [activeStep, setActiveStep] = React.useState(0);
  
    const handleNext = () => {
      setActiveStep(activeStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep(activeStep - 1);
    };
  
    return (
      
         <ThemeProvider theme={theme} >
        <AppBar color="transparent" >
        
        
                <Flex 
                  boxShadow="rgba(0,0,0,0.24) 0px 3px 8px"
                  position="fixed"
                  w="100%"
                  padding="0.5rem" 
                  bg="white"
                >
                  <HStack w='100%' >
                  <Box justifyContent="left" w="20%">
                    <Image w="8rem" src="https://upload.wikimedia.org/wikipedia/en/5/57/Caratlane_Logo.png" ></Image>
                  </Box>
                  
                  </HStack>
                </Flex>
                </AppBar>        
                
        <Flex  >
          <Box ml="5rem"  component="main" mt="5rem" maxWidth="sm"  sx={{ mb: 4 }}>
            <Paper  variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
              <Typography   component="h1" variant="h4" >
                
              </Typography>
              <Stepper border="1px solid red"  activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    Thank you for your order.
                  </Typography>
                  <Typography variant="subtitle1">
                    Your order number is #2001539. We have emailed your order
                    confirmation, and will send you an update when your order has
                    shipped.
                  </Typography>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {getStepContent(activeStep)}
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    {activeStep !== 0 && (
                      <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                        Back
                      </Button>
                    )}
  
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 3, ml: 1 }}
                    >
                      {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                    </Button>
                  </Box>
                </React.Fragment>
              )}
            </Paper>
          
          </Box>
          
          <Box ml="5rem" border="1px solid red" component="main" mt="8rem" w="100%" sx={{ mb: 4 }} >
            <Text w="500px"  fontSize="18px" >Order Summary</Text>
            <VStack
                divider={<StackDivider borderColor='gray.200' />}
                spacing={4}
                
              >
                <Box h='500px' w="400px" border="1px solid red">
                  
                </Box>
                <Box h='500px' w="400px" border="1px solid red" >
                  2
                </Box>
                <Box h='200px' w="400px" border="1px solid red" >
                <Flex>
                    
                  </Flex>
                
                </Box>
              </VStack>
  
          </Box>
        </Flex>
        
      </ThemeProvider>
  
      
     
    );
  }