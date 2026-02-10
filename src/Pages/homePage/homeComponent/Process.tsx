import { homeOffering, homeProcess } from "../../../Data"
import { FlatButton } from "../../../shared/FlatButton"
import {PlusOutlined} from '@ant-design/icons'
export const Process = ()=>{
    return(
        <section id="home-process">
            <div className="container-fluid">
                <h2>
                    How it works
                </h2>
                <h6>
                    Get yout business listed in three 
                    steps and start building your online presence
                </h6>
                <br/><br/>
                <div className="row">
                    {
                        homeProcess.map(process=>(
                            <div className="col-md-4 animate-up" key={process.step} style={{marginBottom:'20px'}}>
                                <div className="process-content">
                                    <div style={{background:`${process.color}`, color:"white", padding:'25px 30px',borderRadius:'70%', fontSize:'30px',fontWeight:'bold'}} className="process-step-badge">
                                        {process.step}
                                    </div>
                                    <div>
                                        {process.icon}
                                    </div>
                                    <h3>
                                        {process.title}
                                    </h3>
                                    <p>
                                        {process.description}
                                    </p>
                                </div>
                            </div>
                            
                        ))
                    }
                </div>
                <br/><br/>
                <div className="row offering-container">
                    {
                        homeOffering.map((offering,index)=>(
                            <div className="col-md-4">
                                <div className="offering-content">
                                    <div>
                                        {offering.icon}
                                    </div>
                                    <h3>{offering.title}</h3>
                                    <p>
                                        {offering.description}
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                    <br/> <br/>
                <div className="animate-up">
                    <p>
                        Ready to establish your online presence?
                    </p>
                    <FlatButton className="btn btn-lg btnPrimary" title="Submit your business" icon={<PlusOutlined/>}/>
                </div>
            </div>
        </section>
    )
}