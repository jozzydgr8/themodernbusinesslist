import { homeProcess } from "../../../Data"

export const Process = ()=>{
    return(
        <section>
            <div className="container-fluid">
                <h2>
                    How it works
                </h2>
                <h6>
                    Get yout business listed in three 
                    steps and start building your online presence
                </h6>
                <div className="row">
                    {
                        homeProcess.map(process=>(
                            <div className="col-md-4">
                        
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}