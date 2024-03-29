import { Box, Flex, Avatar, HStack, Link, IconButton, Button, Menu, MenuButton, MenuList, MenuItem, MenuDivider, useDisclosure, useColorModeValue, Stack, useColorMode } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, SunIcon, MoonIcon } from '@chakra-ui/icons';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth/authContext';

interface LinksType {
  label: string;
  href: string;
}

const Links: Array<LinksType> = [
  {
    label: 'Home',
    href: '/',
  },
];

const NavLink = ({ label, href }: LinksType) => (
  <Link
    as={RouterLink}
    to={href}
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
  >
    {label}
  </Link>
);

export function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();
  const { user, token, logoutUser } = useAuth();

  const userDisplayName = user !== null && (user?.lastName !== undefined ? user?.firstName + ' ' + user?.lastName : user?.firstName);

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex w={['100%', '95%']} mx={'auto'} h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton size={'md'} icon={isOpen ? <CloseIcon /> : <HamburgerIcon />} aria-label={'Open Menu'} display={{ md: 'none' }} onClick={isOpen ? onClose : onOpen} />
          <HStack spacing={8} alignItems={'center'}>
            <Box cursor={'pointer'} onClick={() => navigate('/')}>
              QuizMaster
            </Box>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link.label} label={link.label} href={link.href}></NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <IconButton icon={colorMode === 'light' ? <SunIcon /> : <MoonIcon />} variant="ghost" aria-label="Color mode switcher" onClick={toggleColorMode}>
                Switch Mode
              </IconButton>
              {token ? (
                <>
                  <MenuButton as={Button} rounded={'full'} variant={'link'} cursor={'pointer'}>
                    <Avatar name={user?.firstName + ' ' + user?.lastName} size={'sm'} />
                  </MenuButton>
                  <MenuList>
                    <MenuItem onClick={() => navigate('/profile')}>Signed in as {userDisplayName}</MenuItem>
                    <MenuDivider />
                    <MenuItem onClick={() => navigate('/profile')}>Profile</MenuItem>
                    <MenuDivider />
                    <MenuItem onClick={() => logoutUser()}>Log Out</MenuItem>
                  </MenuList>
                </>
              ) : (
                <Button colorScheme="teal" size="sm" ml={4} onClick={() => navigate('/login')}>
                  Login
                </Button>
              )}
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.label} label={link.label} href={link.href}></NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
