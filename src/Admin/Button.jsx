import { SiMessenger } from 'react-icons/si';
import { Button, Center, Text } from '@chakra-ui/react';

export default function MessengerButton() {
  return (
    <Center p={0}
    mt={5}>
      <Button
        w={'full'}
        maxW={'md'}
        colorScheme={'messenger'}
        // leftIcon={<SiMessenger />}
        >
        <Center>
          <Text>Add Product</Text>
        </Center>
      </Button>
    </Center>
  );
}