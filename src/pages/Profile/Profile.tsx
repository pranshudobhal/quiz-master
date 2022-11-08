import { Heading, Avatar, Box, Center, Text, Stack, Button, useColorModeValue } from '@chakra-ui/react';
import { useAuth } from '../../context/auth/authContext';

export function Profile() {
  const { user, logoutUser } = useAuth();

  const userDisplayName = user !== null && (user?.lastName !== undefined ? user?.firstName + ' ' + user?.lastName : user?.firstName);
  const userEmail = user !== null && user?.email;

  return (
    <Center py={6}>
      <Box maxW={'320px'} w={'full'} bg={useColorModeValue('white', 'gray.900')} boxShadow={'2xl'} rounded={'lg'} p={6} textAlign={'center'}>
        <Avatar size={'xl'} name={user?.firstName + ' ' + user?.lastName} alt={user?.firstName + ' ' + user?.lastName} mb={4} pos={'relative'} />
        <Heading fontSize={'2xl'} fontFamily={'body'}>
          {userDisplayName}
        </Heading>
        <Text fontWeight={600} color={'gray.500'} mb={4}>
          {userEmail}
        </Text>

        <Stack mt={8} direction={'row'} spacing={4}>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            bg={'blue.400'}
            color={'white'}
            boxShadow={'0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'}
            _hover={{
              bg: 'blue.500',
            }}
            _focus={{
              bg: 'blue.500',
            }}
            onClick={() => logoutUser()}
          >
            Log Out
          </Button>
        </Stack>
      </Box>
    </Center>
  );
}
