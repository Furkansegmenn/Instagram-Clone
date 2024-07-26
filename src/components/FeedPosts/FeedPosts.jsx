import { Box, Container, Flex, Skeleton, SkeletonCircle, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import FeedPost from './FeedPost'

const FeedPosts = () => {
const [isLoading,setIsLoading] = useState(true)

useEffect(() =>{
  setTimeout(() => {
    setIsLoading(false)
  },2000)
},[])

  return (
    <Container maxW={"container-sm"} py={10} px={2}>
       {isLoading && [0,1,2,3].map((_,index) =>(
        <VStack key={index} alignItems={"flex-start"} mb={10}>
          <Flex gap={2}>
            <SkeletonCircle/>
            <VStack gap={2} alignItems={"flex-start"}>
              <Skeleton height={"10px"} w={"200px"}></Skeleton>
              <Skeleton height={"10px"} w={"100px"} alignItems={"center"}></Skeleton>
            </VStack>
          </Flex>
          <Skeleton w={"full"}>
            <Box height={"500px"} >contents wrapped</Box>
          </Skeleton>
        </VStack>
       ))}
       {!isLoading && (
        <>
        <FeedPost img="/img1.png" username ="elonmusk" avatar="/img1.png"></FeedPost>
        <FeedPost img="/img2.png" username ="segmenf" avatar="/img2.png"></FeedPost>
        <FeedPost img="/img3.png" username ="markzuck" avatar="/img3.png"></FeedPost>
        <FeedPost img="/img4.png" username ="billgates" avatar="/img4.png"></FeedPost>
        </>
        
       )}
        
    </Container>
  )
}

export default FeedPosts
