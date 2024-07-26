import { Box, calc, Flex, Spinner } from '@chakra-ui/react'
import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import { useLocation } from 'react-router-dom'
import { auth } from '../../firebase/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import Navbar from '../../components/Navbar/Navbar'

const PageLayout = ({children}) => {
    const{pathname} = useLocation()
    const [user, loading] = useAuthState(auth);
    const canRenderSideBar = pathname !== "/auth" && user;
    const canRenderNavbar =  pathname !== "/auth" && !user && !loading ;

    const checkingUserIsAuth = !user && loading 
    
    if(checkingUserIsAuth) return <PageLayoutSpinner/>

  return (
    <>
      <Flex flexDir={canRenderNavbar ? "column" : "row"}> 
  
        {canRenderSideBar ? (
            <Box w={{base: "70px", md: "240px"}}>
                <SideBar/>
            </Box>
        ) :null}
         {
          canRenderNavbar?<Navbar/> :null 
         }
        
        <Box flex={1} w={{base:"calc(100%-70px)" ,md: "calc(100% -240px)"}} >
            {children}
        </Box>
      </Flex>
    </>
  )
}

export default PageLayout


const PageLayoutSpinner = ()=>{
  return(
    <Flex flexDir={"column"} h={"100vh"} alignItems={"center"} justifyContent={"center"}>
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
/>
    </Flex>
  )
}