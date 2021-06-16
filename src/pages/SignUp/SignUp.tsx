import { Flex, Box, FormControl, FormLabel, Input, InputGroup, HStack, InputRightElement, Stack, Button, Heading, Text, useColorModeValue, Alert, AlertIcon } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useLocation, useNavigate } from 'react-router';
import { useAuth } from '../../context/auth/authContext';

export type LocationState = {
  from: string;
};

export function SignUp() {
  const location = useLocation();
  const state = location.state as LocationState;
  const navigate = useNavigate();

  const { token, signUpUser } = useAuth();
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [dataValid, setDataValid] = useState(true);
  const [signUpLoading, setSignUpLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const signUpHandler = async () => {
    if (firstName && email && password !== '') {
      setSignUpLoading(true);
      const signUpResponse = await signUpUser(firstName, lastName, email, password, state);

      if (signUpResponse?.status === 409) {
        setError('User already exists!');
        setDataValid(false);
        setSignUpLoading(false);
      }
    } else {
      setError('Please fill all required fields!');
      setDataValid(false);
      setSignUpLoading(false);
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
            Sign up
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
                {error}
              </Alert>
            )}
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired isInvalid={!dataValid}>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" value={firstName} onChange={(e) => setFirstName(() => e.target.value)} />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" value={lastName} onChange={(e) => setLastName(() => e.target.value)} />
                </FormControl>
              </Box>
            </HStack>
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
                isLoading={signUpLoading}
                loadingText="Submitting"
                onClick={signUpHandler}
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
              >
                Sign Up
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
