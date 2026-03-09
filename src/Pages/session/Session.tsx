import { useState } from "react"
import { CreateAcctForm } from "./component/CreateAcctForm";
import { LoginForm } from "./component/LoginForm";
import { FlatButton } from "../../shared/FlatButton";

export const Session = ()=>{
    const [newUser, setNewUser] = useState(false);
    return(
        <div
        style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 2,
            display: "flex",
            flexDirection:'column',
            justifyContent: "center",
            alignItems: "center",
            background: "#fff",
            padding: "30px",
            borderRadius: "10px",
            height:'100vh'
          }}>
        <FlatButton onClick={()=>setNewUser(!newUser)} title={newUser ? 'Login if you have an account':'create new account'}/>
    
        {
            newUser ? <CreateAcctForm/> : <LoginForm/>
        }
        </div>
    )
}