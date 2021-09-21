import { Flex, Stack, Heading, Text, useColorModeValue, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router';

export function Error404() {
  const navigate = useNavigate();

  return (
    <Flex minH={'70vh'} align={'center'} justify={'center'} py={12} bg={useColorModeValue('white', 'gray.800')}>
      <Stack boxShadow={'2xl'} rounded={'xl'} p={[8, 10]} spacing={4} align={'center'}>
        <Heading textAlign={'center'} textTransform={'uppercase'} fontSize={'9xl'} color={useColorModeValue('gray.800', 'gray.200')}>
          404
        </Heading>
        <Heading textAlign={'center'} textTransform={'uppercase'} fontSize={'4xl'} color={useColorModeValue('gray.800', 'gray.200')}>
          Page not found!
        </Heading>
        <Text fontSize={['md', 'lg']} py={4} color={useColorModeValue('gray.500', 'gray.400')}>
          The page you are looking for doesn't exist or any other error occured.
        </Text>
        <Button colorScheme="teal" textTransform={'uppercase'} size="lg" onClick={() => navigate('/')}>
          Go to Homepage
        </Button>
      </Stack>
    </Flex>
  );
}
