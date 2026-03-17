import { Formik } from "formik"

export const NewProfile = ()=>{
    return(
        <section>
            <div className="container-fluid">
                <Formik
                initialValues={{name:""}}
                onSubmit={(values)=>console.log(values)}>

                </Formik>
            </div>
        </section>
    )
}