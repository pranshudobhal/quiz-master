import { Flex, Box, FormControl, FormLabel, Input, InputGroup, InputRightElement, Stack, Link, Button, Heading, Text, useColorModeValue, Alert, AlertIcon } from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
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
  const [loginLoading, setLoginLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const loginHandler = async () => {
    if (email && password !== '') {
      setLoginLoading(true);
      const loginResponse = await loginUserWithCredentials(email, password, state);
      if (loginResponse?.status === 401) {
        setDataValid(false);
        setLoginLoading(false);
      }
    } else {
      setDataValid(false);
      setLoginLoading(false);
    }
  };

  useEffect(() => {
    token && navigate('/');
  }, [token, navigate]);

  return (
    <Flex minH={'80vh'} align={'center'} justify={'center'} bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Login to your account
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
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(() => e.target.value)} />
                <InputRightElement h={'full'}>
                  <Button variant={'ghost'} onClick={() => setShowPassword((showPassword) => !showPassword)}>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                isLoading={loginLoading}
                loadingText="Submitting"
                onClick={loginHandler}
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
              >
                {token ? 'Sign Out' : 'Login'}
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                <Link
                  color={'blue.400'}
                  onClick={() => {
                    setEmail('test@gmail.com');
                    setPassword('test');
                  }}
                >
                  Use guest credentials
                </Link>
              </Text>
            </Stack>
            <Stack>
              <Text align={'center'}>
                Don't have an account?{' '}
                <Link color={'blue.400'} onClick={() => navigate('/signup')}>
                  Sign Up
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
