import { Box, Button, Flex, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { CommentLogo, NotificationsLogo, UnlikeLogo } from '../../assets/constants';

const PostFooter = ({username ,isProfilePage}) => {
  const [liked,setLiked] = useState(false);
  const[likes,setLikes] = useState(1000);

  const handleClick = () =>{
    if(liked){
      setLiked(false);
      setLikes(likes-1);
    }else{
      setLiked(true);
      setLikes(likes+1);
    }
  }

  return (
    <Box my={8} mt={"auto"}>
      <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={4} >
      <Box 
      
      cursor={"pointer"}
      fontSize={18}
      onClick={handleClick}
      >
        {!liked ? ( <NotificationsLogo/>) : (<UnlikeLogo/>) } 
      </Box>
      <Box cursor={"pointer"} fontSize={18}> 
        <CommentLogo/>
      </Box>
      </Flex>
        <Text fontWeight={600} fontSize={"sm"}> 
        {likes} likes
        </Text>

        {!isProfilePage && (
           <>
           <Text fontSize={"sm"} fontWeight={700}>
          {username} {" "}
          <Text as={"span"} fontWeight={400}>
          {"Greatful!!"}  
          </Text>
          </Text>
          <Text fontSize={"sm"} color={"gray"} cursor={"pointer"}>
            view all 1.000 comments
          </Text>
           </>
        )}

          <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>

            <InputGroup>
            <Input
            variant={"flushed"}
            placeholder='Add a comment...'
            fontSize={14}
            /> 
            <InputRightElement>
            <Button
            cursor={"pointer"}
            fontWeight={600}
            color={"blue.500"}
            fontSize={14}
            bg={"transparent"}
            _hover={{color: "white"}}

            >
              Post
              </Button>
            </InputRightElement>
            </InputGroup>

          </Flex>
    </Box>
  )
}

export default PostFooter;
