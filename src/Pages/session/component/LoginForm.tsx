import { Form, Input } from "antd"
import { Formik } from "formik"
import { CloseOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import { FlatButton } from "../../../shared/FlatButton";

export const LoginForm = ()=>{
    const navigate = useNavigate();
    return(
        <Formik 
            initialValues={{
                email:'',
                password:''
            }} 
            onSubmit={(values)=>console.log(values)}>

        {formik=>{
         return(
       
            <div style={{ maxWidth: "600px", width: "100%" }}>
            <div style={{ position: "relative", textAlign: "right" }}>
              <CloseOutlined
                onClick={() => navigate("/")}
                style={{
                  fontSize: "24px",
                  padding: "10px",
                  border: "1px solid black",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              />
            </div>
                <h3>Login</h3>
                    <Form layout="vertical" onFinish={formik.handleSubmit}>
                        <Form.Item label='email'>
                            <Input
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            required/>
                        </Form.Item>

                        <Form.Item>
                            <Input
                            name="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}/>
                        </Form.Item>

                        <FlatButton title="submit" onClick={()=>formik.handleSubmit()} className="btn btnPrimary"/>
                    </Form>
                </div>
                )
            }}
        </Formik>
    )
}