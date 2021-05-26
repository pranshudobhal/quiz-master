import { Box, Center, Heading, Text, Stack, Button, Image, useColorModeValue } from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import { Quiz } from '../../../data/quiz.types';

export function QuizCard({ quizItem }: { quizItem: Quiz }) {
  const navigate = useNavigate();
  const { id, name } = quizItem;

  return (
    <Center py={4}>
      <Box maxW={'445px'} w={'full'} bg={useColorModeValue('white', 'gray.900')} boxShadow={'xl'} rounded={'md'} p={6} overflow={'hidden'}>
        <Box overflow={'hidden'} h={'210px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
          <Image h={'100%'} w={'100%'} src={'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'} objectFit="cover" alt={name} />
        </Box>
        <Stack>
          {/* Can be used for categories */}
          {/* <Text color={'green.500'} textTransform={'uppercase'} fontWeight={800} fontSize={'sm'} letterSpacing={1.1}>
            {name}
          </Text> */}
          <Heading color={useColorModeValue('gray.700', 'white')} fontSize={'xl'} fontFamily={'body'}>
            {name}
          </Heading>
          <Text color={'gray.500'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, at.</Text>
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Button colorScheme="teal" size="md" onClick={() => navigate(`/quiz/${id}`)}>
            Play
          </Button>
        </Stack>
      </Box>
    </Center>
  );
}
