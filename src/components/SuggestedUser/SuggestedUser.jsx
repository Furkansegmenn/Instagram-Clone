import { Avatar, Box, Button, Flex, VStack } from '@chakra-ui/react';
import React, { useState } from 'react'

const SuggestedUser = ({name , followers, avatar}) => {
  const [isFollowed , setIsFollowed] = useState(false)
  return (
    <Flex justifyContent={"space-between"} width={"full"} alignItems={"center"} gap={2}>
      <Flex gap={2}>
        <Avatar src={avatar} name={name} size={"md"}></Avatar>
        <VStack spacing={2} alignItems={"flex-start"} >
          <Box fontSize={12} fontWeight={"bold"}>{name}</Box>
          <Box fontSize={11} color={"gray.400"}>{followers} followers</Box>
        </VStack>
      </Flex>
      <Button fontSize={11}
      bg={"transparent"}
      p={0}
      h={"max-content"}
      color={"blue.400"}
      cursor={"pointer"}
      _hover={{color:"white"}}
      onClick={()=>{setIsFollowed(!isFollowed)}}
      >
        {isFollowed ? "Unfollow" : "Follow"}
      </Button>

    </Flex>
  )
}

export default SuggestedUser;
