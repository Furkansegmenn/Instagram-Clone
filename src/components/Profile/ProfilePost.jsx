import { Avatar, Box, Divider, Flex, GridItem, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Text, useDisclosure, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { FaComment } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import Comments from '../Comments/Comments'
import PostFooter from "../FeedPosts/PostFooter"

const ProfilePost = ({img}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
    <GridItem
    cursor={"pointer"}
    borderRadius={4}
    overflow={"hidden"}
    border={"1px solid"}
    borderColor={"whiteAlpha.300"}
    position={"relative"}
    aspectRatio={1/1}
    onClick={onOpen}
    >
    <Flex
    opacity={0}
    _hover={{opacity:1}}
    position={"absolute"}
    top={0}
    left={0}
    right={0}
    bottom={0}
    bg={"blackAlpha.700"}
    transition={"all 0.3s ease"}
    zIndex={1}
    justifyContent={"center"}
    >
      <Flex alignItems={"center"} justifyContent={"center"} gap={50}>
        <Flex justifyContent={"center"} alignItems={"center"} gap={2}>
        <AiFillHeart size ={20}/>
        <Text fontWeight={"bold"}>
          7
        </Text>
        </Flex> 
        <Flex justifyContent={"center"} alignItems={"center"} gap={2}>
        <FaComment size ={20}/>
        <Text fontWeight={"bold"}>
          3
        </Text>
        </Flex> 
      </Flex>
    </Flex>

    <Image src={img} w={"100%"} h={"100%"} alt='profile posts' objectFit={"cover"}></Image>
    </GridItem>


    <Modal isOpen={isOpen}
     onClose={onClose}
     isCentered={true}
     size={{base:"3xl" , md:"5xl"}}
     >
        <ModalOverlay />
        <ModalContent>
         
          <ModalCloseButton />
          <ModalBody bg={"black"} pb={5}>
            <Flex gap={4} w={{base:"90%" ,sm:"70%" ,md:"full"}}>
              <Box
              borderRadius={4}
              overflow={"hidden"}
              border={"1px solid "}
              borderColor={"whiteAlpha.300"}
              flex={1.5}>
                <Image src={img} alt='profile post'></Image>
              </Box>
              
              <Flex flex={1} flexDir={"column"} px={10} display={{base:'none' ,md:"flex"}}>
                <Flex alignItems={"center"} justifyContent={"space-between"}>
                <Flex alignItems={"center"} gap={4} >
                  <Avatar src='/profilepic.jpeg' size={"sm"} name='sgmnf'></Avatar>
                  <Text fontSize={12} fontWeight={"bold"}>sgmnf</Text>
                </Flex>

                  <Box _hover={{bg:"whiteAlpha.300" ,color:"red.600"}} borderRadius={4} p={1}>
                    <MdDelete size={20} cursor={"pointer"}></MdDelete>
                  </Box>
                  </Flex>
                  <Divider my={4} bg={"gray.500"}/>
              
                    <VStack w={"full"} alignItems={"start"} maxH={"350px"} overflowY={"auto"}>
                      <Comments
                      createdAt="1d ago"
                      username="sgmnf"
                      profilePic="/img1.png"
                      text= "its amazing beautiful"
                      ></Comments>
                       <Comments
                      createdAt="1h ago"
                      username="elonmusk"
                      profilePic="/img2.png"
                      text= "what a girl"
                      ></Comments>
                      <Comments
                      createdAt="1w ago"
                      username="elonmusk"
                      profilePic="/img3.png"
                      text= "nice!!"
                      ></Comments>
                       <Comments
                      createdAt="1w ago"
                      username="elonmusk"
                      profilePic="/img3.png"
                      text= "nice!!"
                      ></Comments>
                       <Comments
                      createdAt="1w ago"
                      username="elonmusk"
                      profilePic="/img3.png"
                      text= "nice!!"
                      ></Comments>
                       <Comments
                      createdAt="1w ago"
                      username="elonmusk"
                      profilePic="/img3.png"
                      text= "nice!!"
                      ></Comments>
                       <Comments
                      createdAt="1w ago"
                      username="elonmusk"
                      profilePic="/img3.png"
                      text= "nice!!"
                      ></Comments>
                       <Comments
                      createdAt="1w ago"
                      username="elonmusk"
                      profilePic="/img3.png"
                      text= "nice!!"
                      ></Comments>
                       <Comments
                      createdAt="1w ago"
                      username="elonmusk"
                      profilePic="/img3.png"
                      text= "nice!!"
                      ></Comments>
                       <Comments
                      createdAt="1w ago"
                      username="elonmusk"
                      profilePic="/img3.png"
                      text= "nice!!"
                      ></Comments>
                       <Comments
                      createdAt="1w ago"
                      username="elonmusk"
                      profilePic="/img3.png"
                      text= "nice!!"
                      ></Comments>
                       <Comments
                      createdAt="1w ago"
                      username="elonmusk"
                      profilePic="/img3.png"
                      text= "nice!!"
                      ></Comments>
                    </VStack>
                    <Divider my={4} bg={"gray.800"}/>
                      <PostFooter isProfilePage={true}/>
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>

    </>
  )
}

export default ProfilePost
