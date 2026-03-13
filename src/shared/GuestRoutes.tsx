
import { ReactNode } from "react"
import { Navigate } from "react-router-dom"
import { User } from "../types"

type proptype={
    user:User | null,
    children: ReactNode
}
export const GuestRoutes = ({children, user}:proptype)=>{
    if(!user){
         return  <>{children}</> 
    }
    return <Navigate to={'/myBusiness/'}/>
   
}