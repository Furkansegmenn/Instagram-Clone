import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react"
import { useState } from "react"
import Login from "./Login.jsx"
import Singup from "./Singup.jsx"
import GoogleAuth from "./GoogleAuth.jsx"

const AuthForm = () => {
  const [isLogin,setIsLogin] = useState(true)
 

  return <>
  <Box border={"1px solid gray"} borderRadius={4} padding={5}>
  <VStack spacing={4}>
   <Image src="/logo.png" h={20} cursor={"pointer"} alt="Instagram Logo"></Image>
   
        {isLogin? <Login/>:<Singup/> }

              {/* ----- OR ------*/}
    <Flex alignItems={"center"} justifyContent={"center"} my={4} gap={1} w={"full"}>
      <Box flex={1} h={"1px"} bg={"gray.400"}/>
      <Text mx={1} color={"white"}>OR</Text>
      <Box flex={1} h={"1px"} bg={"gray.400"}/>
    </Flex>
    
      <GoogleAuth/>
  </VStack> 
  </Box>

  <Box border={"1px solid gray"} borderRadius={4} padding={5}>
    <Flex justifyContent={"center"} alignItems={"center"}>
      <Box mx={2} fontSize={14}> {isLogin ? "Don't you have an account?" :"Already have an account?" } </Box>
      <Box onClick={() => setIsLogin(!isLogin)} color={"blue.500"} cursor={"pointer"} fontSize={15}>
        {isLogin? "Sign Up": "Log in" }
      </Box>
    </Flex>
  </Box>
 </>;
}

export default AuthForm
