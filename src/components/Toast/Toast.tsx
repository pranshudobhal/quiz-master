import { useToast, Wrap, WrapItem, Button } from '@chakra-ui/react';

export function PositionExample() {
  const toast = useToast();
  const positions = ['top', 'top-right', 'top-left', 'bottom', 'bottom-right', 'bottom-left'];

  return (
    <Wrap>
      <WrapItem>
        <Button
          onClick={() =>
            toast({
              title: `top toast`,
              position: 'top',
              isClosable: true,
            })
          }
        >
          Show top toast
        </Button>
      </WrapItem>
    </Wrap>
  );
}
