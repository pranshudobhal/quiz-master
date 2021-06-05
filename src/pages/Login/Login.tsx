import { Flex, Box, FormControl, FormLabel, Input, Checkbox, Stack, Link, Button, Heading, Text, useColorModeValue, Alert, AlertIcon } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useAuth } from '../../context/auth/authContext';

export type LocationState = {
  from: string;
};

export function Login() {
  const location = useLocation();
  const state = location.state as LocationState;
  const navigate = useNavigate();

  const { token, loginUserWithCredentials } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dataValid, setDataValid] = useState(true);
  const [signInLoading, setSignInLoading] = useState(false);

  /**
   * TODO:
   * 1. Remember me and forgot password
   */

  const loginHandler = async () => {
    if (email && password !== '') {
      setSignInLoading(true);
      const loginResponse = await loginUserWithCredentials(email, password, state);
      if (loginResponse === undefined) {
        setDataValid(false);
        setSignInLoading(false);
      }
    } else {
      setDataValid(false);
      setSignInLoading(false);
    }
  };

  useEffect(() => {
    token && navigate('/');
  }, []);

  return (
    <Flex minH={'80vh'} align={'center'} justify={'center'} bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign in to your account
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool quizzes ✌️
          </Text>
        </Stack>
        <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>
          <Stack spacing={4}>
            {!dataValid && (
              <Alert status="error">
                <AlertIcon />
                Incorrect email or password!
              </Alert>
            )}
            <FormControl id="email" isRequired isInvalid={!dataValid}>
              <FormLabel>Email address</FormLabel>
              <Input type="email" value={email} onChange={(e) => setEmail(() => e.target.value)} />
            </FormControl>
            <FormControl id="password" isRequired isInvalid={!dataValid}>
              <FormLabel>Password</FormLabel>
              <Input type="password" value={password} onChange={(e) => setPassword(() => e.target.value)} />
            </FormControl>
            <Stack spacing={10}>
              <Stack direction={{ base: 'column', sm: 'row' }} align={'start'} justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Button
                isLoading={signInLoading}
                loadingText="Submitting"
                onClick={loginHandler}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
              >
                {token ? 'Sign Out' : 'Sign In'}
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
