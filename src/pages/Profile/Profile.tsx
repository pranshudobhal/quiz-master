import { Heading, Avatar, Box, Center, Text, Stack, Button, useColorModeValue } from '@chakra-ui/react';
import { useAuth } from '../../context/auth/authContext';

export function Profile() {
  const { user, logoutUser } = useAuth();

  const userDisplayName = user !== null && (user?.lastName !== undefined ? user?.firstName + ' ' + user?.lastName : user?.firstName);
  const userEmail = user !== null && user?.email;

  return (
    <Center py={6}>
      <Box maxW={'320px'} w={'full'} bg={useColorModeValue('white', 'gray.900')} boxShadow={'2xl'} rounded={'lg'} p={6} textAlign={'center'}>
        <Avatar
          size={'xl'}
          src={'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'}
          alt={'Avatar Alt'}
          mb={4}
          pos={'relative'}
          _after={{
            content: '""',
            w: 4,
            h: 4,
            bg: 'green.300',
            border: '2px solid white',
            rounded: 'full',
            pos: 'absolute',
            bottom: 0,
            right: 3,
          }}
        />
        <Heading fontSize={'2xl'} fontFamily={'body'}>
          {userDisplayName}
        </Heading>
        <Text fontWeight={600} color={'gray.500'} mb={4}>
          {userEmail}
        </Text>
        <Text textAlign={'center'} color={useColorModeValue('gray.700', 'gray.400')} px={3}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, vel!
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
