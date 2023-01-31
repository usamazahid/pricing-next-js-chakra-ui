import React from 'react';
import {Box, Flex, Text, Heading, Button, HStack, Icon, StackProps, Stack} from '@chakra-ui/react';
import { CheckIcon } from '../icons/icons';

export const ListItem = (props: StackProps) => {
    const { children, ...rest} = props;
    return (
        <HStack as='li' spacing='20px' {...rest}>
            <Icon as={CheckIcon} w='22px' h='22px'/>
            <Text>{children}</Text>
        </HStack>
    )
}

export function Pricing(){
    return (
        <Box maxW='994px' margin='auto' mt='-256px' borderRadius='12px' overflow='hidden'
        boxShadow='0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'
        >
            <Flex>
                <Box bg='#EBF8FF' p='60px' textAlign='center'>
                    <Text fontSize='24px' fontWeight='800'>Premium PRO</Text>
                    <Heading as='h3' fontSize='60px' mt='16px'>$200</Heading>
                    <Text color='#171923' fontSize='lg' mt='16px'>billed just once</Text>
                    <Button colorScheme='blue' size='lg' w='282px' mt='24px'>Get Started</Button>
                </Box>
                <Box p='60px' fontSize='18px' bg="white">
                    <Text>
                        Access these features when you get this pricing package for your business.
                    </Text>
                    <Stack as="ul" spacing='20px' pt='24px'>
                        <ListItem>International calling and messaging API</ListItem> 
                        <ListItem>International calling and messaging API</ListItem> 
                        <ListItem>International calling and messaging API</ListItem> 
                        <ListItem>International calling and messaging API</ListItem> 
                    </Stack>
                </Box>
            </Flex>
        </Box>
    )
}