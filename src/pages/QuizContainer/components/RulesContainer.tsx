import { Flex, Stack, Heading, Text, Button, useColorModeValue } from '@chakra-ui/react';
import { InfoIcon } from '@chakra-ui/icons';
import React, { SetStateAction } from 'react';
import { Quiz } from '../../../data/quiz.types';

export function RulesContainer({ setStartQuiz, quiz }: { setStartQuiz: React.Dispatch<SetStateAction<boolean>>; quiz: Quiz }) {
  const { name } = quiz;
  return (
    <Flex minH={'70vh'} align={'center'} justify={'center'} py={12} bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack boxShadow={'2xl'} maxW={['365px', '60vw', '50vw', '50vw', '40vw']} bg={useColorModeValue('white', 'gray.700')} rounded={'xl'} p={[8, 10]} spacing={8} align={'center'}>
        <Stack spacing={2}>
          <Heading align={'center'} textTransform={'uppercase'} fontSize={['xl', '2xl', '3xl']} mb={5} color={useColorModeValue('gray.800', 'gray.200')}>
            {name}
          </Heading>
          <Stack isInline align={'baseline'} pb={2}>
            <InfoIcon />
            <Text fontSize={'md'} color={'gray.500'}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, minus?
            </Text>
          </Stack>
          <Stack isInline align={'baseline'} pb={2}>
            <InfoIcon />
            <Text fontSize={'md'} color={'gray.500'}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore doloribus sit libero minus modi accusamus ut fuga sapiente id ab!
            </Text>
          </Stack>
          <Stack isInline align={'baseline'} pb={2}>
            <InfoIcon />
            <Text fontSize={'md'} color={'gray.500'}>
              Lorem ipsum dolor sit amet.
            </Text>
          </Stack>
        </Stack>
        <Stack spacing={4} direction={{ base: 'column', md: 'row' }} w={'50%'}>
          <Button onClick={() => setStartQuiz(true)} bg={'blue.400'} rounded={'full'} color={'white'} flex={'1 0 auto'} _hover={{ bg: 'blue.500' }} _focus={{ bg: 'blue.500' }}>
            Start Quiz
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
}
