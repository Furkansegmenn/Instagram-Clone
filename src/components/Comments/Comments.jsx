import { Avatar, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Comments = ({createdAt,username ,profilePic ,text}) => {
  return (
    <Flex gap={4}>
      <Avatar src={profilePic} name='"username' size={"sm"}/>
      <Flex direction={"column"}>
        <Flex gap={2} alignItems={"center"}>
          <Text fontWeight={"bold"} fontSize={12}>
            {username}
          </Text>
          <Text fontSize={14}>
            {text}
          </Text>
          
        </Flex>
        <Text fontSize={12} color={"grey"}>
            {createdAt}
          </Text>
      </Flex>

    </Flex>
  )
}

export default Comments
