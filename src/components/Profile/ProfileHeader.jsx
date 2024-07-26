import { Avatar, AvatarGroup, Button, Flex, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const ProfileHeader = () => {
  return (
    
    <Flex gap={{base:"4" , sm:"10" }} py={10} direction={{base:"column" ,md:"row"}}>
      <AvatarGroup
      size={{base:"xl" ,md:"2xl"}}
      justifySelf={"center"}
      alignSelf={"flex-start"}
      mx={"auto"}>
        <Avatar name ='sgmnf' src='/profilepic.jpeg' alt="sgmnf profile pic"></Avatar>
      </AvatarGroup>
      <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
        <Flex gap={4} direction={{base:"column" , sm:"row"}}
        justifyContent={{base:"center" ,sm:"flex-start"}}
        alignItems={"center"}
        w={"full"}
        >
           <Text fontSize={{base:"sm" ,md:"lg"}}
           > sgmnf </Text> 
           <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
            <Button
            bg={"white"}
            color={"black"}
            size={{base:"xs",md:"sm"}}
            _hover={{bg:"whiteAlpha.800"}}
            >
                Edit Profile</Button>
           </Flex>
        </Flex>
        <Flex alignItems={"center"} gap={{base:"2" ,sm:"4"}}>
            <Text fontSize={{base:"xs" ,m:"s"}}>
                <Text as={"span"} fontWeight={"bold"} mr={1}>4</Text>
                Posts
                </Text>

                <Text>
                <Text as={"span"} fontWeight={"bold"} mr={1}>190</Text>
                Followers
                </Text>
                
                <Text>
                <Text as={"span"} fontWeight={"bold"} mr={1}>189</Text>
                Following
                </Text>
        </Flex>
        <Flex alignItems={"center"} gap={4}>
            <Text fontSize={"sm"} fontWeight={"bold"}>Furkan Seğmen</Text>
        </Flex>
        <Text fontSize={"sm"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, eaque!</Text>
      </VStack>
    </Flex>
  )
}

export default ProfileHeader
