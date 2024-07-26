import {useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth, firestore } from "../firebase/firebase";
import { collection, doc, getDocs, query, setDoc, where } from 'firebase/firestore';
import useShowToast from './useShowToast';
import useAuthStore from '../Store/authStore';

const useSignUpWithEmailAndPassword = () => {
    const [createUserWithEmailAndPassword,user,loading,error,] = useCreateUserWithEmailAndPassword(auth);
    const showToast = useShowToast()
    const loginUser= useAuthStore(state=>state.login) 
    

      const signup = async(inputs) =>{
        if(!inputs.email ||!inputs.username||!inputs.password||!inputs.fullname){
            showToast("Error", "please fill all the fields ","error")
            return
        }

        const usersRef = collection(firestore, "users");
        const q = query(usersRef, where("username", "==", inputs.username)); 
        const querSnapsShot = await getDocs(q)

        if(!querSnapsShot.empty) {
            showToast("Error", "Username already exist ","error")
            return
        }
        try {   
            // const newUserCredential  = await createUserWithEmailAndPassword(inputs.email, inputs.password);
            const newUser =  await createUserWithEmailAndPassword(inputs.email, inputs.password);
        if(!newUser) {
            showToast("Error", error.message,"error")
        }
        if (newUser) {
            const userDoc = {
                uid: newUser.user.uid,
                email: inputs.email,
                username: inputs.username,
                fullname: inputs.fullname,
                bio: "",
                profilePicURL: "",
                followers: [],
                following: [],
                posts: [],
                createdAt: Date.now(),
            };
            await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
            localStorage.setItem("user-info", JSON.stringify(userDoc));
            loginUser(userDoc);         
        }
        } catch (error) {
            showToast("Error", error.message ,"error")
        }
      }

      return {error,loading,signup} 
}

export default useSignUpWithEmailAndPassword
