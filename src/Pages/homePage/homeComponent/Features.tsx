import { homeFeatures } from "../../../Data"
import { FlatButton } from "../../../shared/FlatButton"
import {PlusOutlined} from '@ant-design/icons'

export const Features = ()=>{
    return(
        <section id="feature-section">
            <div className="container-fluid">
                <h2>Platform Features</h2>
                <h6>Everything you need to establish and maintain your
                    business presence in our trusted directory
                </h6>
                <br/>
                <br/>
                <div className="row">
                    {
                        homeFeatures.map((features, index)=>(
                            <>
                            <div className="col-md-4 animate-up" key={index} style={{marginBottom:"40px"}}>
                                <div style={{minHeight:'350px',boxShadow: `0 -4px 6px -1px ${features.color}`, padding:"45px", borderRadius:'20px', background:'#e2e6ea'}}>
                                    {features.icon}
                                    <br/>
                                    <h3>{features.title}</h3>
                                    <p>{features.description}</p>
                                    <br/>
                                    <small style={{background:`${features.color}CC`,padding:'10px', color:"white", borderRadius:"5px"}}>{features.highlights}</small>
                                  
                                </div>
                                
                            </div>
                            </>
                            
                        ))
                    }
                </div>
                <div className="feature-cta animate-up">
                    <p>Ready to get Listed?</p>
                    <FlatButton className="btn btn-lg btnPrimary" icon={<PlusOutlined/>} title="List Your Business Now"/>
                </div>
            </div>
        </section>
    )
}