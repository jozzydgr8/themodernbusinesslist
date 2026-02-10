import {ArrowRightOutlined, CheckCircleOutlined} from '@ant-design/icons'
import { homeAdvantage } from '../../../Data'
import { FlatButton } from '../../../shared/FlatButton'
export const Advantage = ()=>{
    return(
        <section id="advantage-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">

                        <div>
                        {/* //this is div opening */}

                            <small className="advantage-badge animate-down">
                                <CheckCircleOutlined/> Execution Verified
                            </small>
                            <br/><br/>
                            <h2>
                                Why list on the modern business directory
                            </h2>
                            <p className='animate-left'>
                                A neutral, trusted reference index designed
                                for businesses to establish credibility and online visibility.
                            </p>
                            {
                                homeAdvantage.map((advantage, index)=>(
                                    <div key={index} className='row'>
                                        <div className="col-md-2 animate-up">
                                            {advantage.icon}
                                        </div>
                                        <div className="col-md-10 animate-up">
                                            <h3>{advantage.title}</h3>
                                            <p>{advantage.description}</p>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>


                    </div>

                    <div className="col-md-6">
                        
                    </div>
                </div>

                <br/>
                <FlatButton title='Get Listed today' className='btn btn-lg btnSuccess animate-up' icon={<ArrowRightOutlined/>}/>
            </div>
        </section>
    )
}