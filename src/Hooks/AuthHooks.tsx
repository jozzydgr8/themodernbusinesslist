import { sessionProps } from "../types";
import { UseAuthContext } from "../context/UseAuthContext";
import { toast } from "react-toastify";


const saveUserToLocalStorage = (user:any) => {
  const data = {
    user,
    savedAt: new Date().getTime(), // timestamp in milliseconds
  };
  localStorage.setItem('user', JSON.stringify(data));
};
export const AuthHooks = ()=>{
    const {dispatch} = UseAuthContext();

    const signInWithEmailAndPassword = async({email, password, setLoading}:sessionProps)=>{
        setLoading(true);
        try{
            const response = await fetch('https://modernbusinesslistserver.vercel.app/user/signuser',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email,
                password
            })
            
        });
        
        const json = await response.json();
        if (!response.ok) {
            throw new Error(json.error || 'Failed to sign in');
        }
        saveUserToLocalStorage(json);
        
        dispatch({type:'getUser', payload:json});
        

        }catch(error){
            toast.error('Incorrect email or password')
        }finally{
            setLoading(false)
        }
    }

    return{
        signInWithEmailAndPassword
    }
}
