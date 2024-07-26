import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { Alert, AlertIcon, AlertTitle, Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React, { useState } from 'react'
import  useCreateUserWithEmailAndPassword from '../../hooks/useSignUpWithEmailAndPassword'

const Singup = () => {
    const [inputs ,setInputs] = useState({
        fullname:"",
        username:"",
        email:"",
        password:"",
        
      })
      const [showPassword,setShowPassword] = useState(false)
      const{loading,error,signup} =  useCreateUserWithEmailAndPassword();
  return (
    <>
   <Input placeholder="Full Name"
   fontSize={14}
   size={"sm"}
   type="text"
   value={inputs.fullname}
   onChange={(e) => setInputs({...inputs, fullname:e.target.value})}
   />
   <Input placeholder="Username"
   fontSize={14}
   size={"sm"}
   type="text"
   value={inputs.username}
   onChange={(e) => setInputs({...inputs, username:e.target.value})}
   />
   <Input placeholder="Email"
   fontSize={14}
   size={"sm"}
   type="text"
   value={inputs.email}
   onChange={(e) => setInputs({...inputs, email:e.target.value})}
   />
    <InputGroup>
     <Input placeholder="Password"
    fontSize={14}
    type={showPassword ? "text" : "password"}
    value={inputs.password}
    onChange={(e) => setInputs({...inputs, password: e.target.value})}
   />
   <InputRightElement>
    <Button size={"sm"} variant={"ghost"} onClick={()=>setShowPassword(!showPassword)}>
        {showPassword ? <ViewIcon/> :<ViewOffIcon/> }
    </Button>
   </InputRightElement>
    </InputGroup>

    {error && (
      <Alert status='error' fontSize={13} borderRadius={5}>
      <AlertIcon fontSize={12}/>
     {error.message}
    </Alert>
    )}
    
    <Button w={"full"} colorScheme="blue" size={"sm"} fontSize={14}
    isLoading={loading}
    onClick={()=> signup(inputs)}>
      Sign up
    </Button>
    </>
  )
}

export default Singup
