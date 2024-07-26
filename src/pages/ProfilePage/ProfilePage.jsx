import { Container, Flex } from '@chakra-ui/react'
import React from 'react'
import ProfilePosts from '../../components/Profile/ProfilePosts'
import ProfileTabs from '../../components/Profile/ProfileTabs'
import ProfileHeader from '../../components/Profile/ProfileHeader'

const ProfilePage = () => {
  return (
    <Container maxW={"container.lg"} py={5}>
      <Flex direction={"column"}
      py={10}
      px={4}
      pl={{base:"4" ,md:"10"}}
      mx={"auto"}
      w={"full"}
      >
        <ProfileHeader/>
 </Flex>
        <Flex px={{base:"2" , md:"4"}} 
        maxW={"full"}
        mx={"auto"}
        borderTop={"1px solid"}
        direction={"column"}
        borderColor={"whiteAlpha.300"}
        >
        <ProfileTabs/>
        <ProfilePosts/>
        </Flex>
        
     
      
    </Container>
  )
}

export default ProfilePage
