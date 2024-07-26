import { Box, Flex, Link, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import SuggestedHeader from './SuggestedHeader'
import SuggestedUser from './SuggestedUser'

const SuggestedUsers = () => {
  return (
    <VStack py={10} px={6} gap={4}>
     <SuggestedHeader />
     <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
        <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>Suggested for you</Text>
        <Text fontSize={12} fontWeight={"bold"} _hover={{color:"gray.500"}} cursor={"pointer"}>See All</Text>
     </Flex>

     <SuggestedUser name ="Tom Holand" followers={578.987} avatar="https://bit.ly/dan-abramov"/>
     <SuggestedUser name ="Jhon Doe" followers={1890} avatar="https://bit.ly/ryan-florence"/>
     <SuggestedUser name ="Chris Max" followers={278} avatar="https://bit.ly/code-beast"/>
    

    <Box fontSize={12}
    color={"gray.500"} mt={5}
    alignSelf={"flex-start"}>
     © 2024 Built by {""}
      <Link href='https://www.instagram.com/sgmnf/' target='_blank' color={"blue.500"} fontSize={14}>Furkan Seğmen</Link>
    </Box>

    </VStack>
  )
}

export default SuggestedUsers;
