import {CheckOutlined} from '@ant-design/icons'
import { homeAdvantage } from '../../../Data'
export const Advantage = ()=>{
    return(
        <section id="advantage">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">

                        <div>
                        {/* //this is div opening */}

                            <div className="advantage-badge">
                                <CheckOutlined/> Execution Verified
                            </div>
                            
                            <h2>
                                Why list on the modern business directory
                            </h2>
                            <p>
                                A neutral, trusted reference index designed
                                for businesses to establish credibility and online visibility.
                            </p>
                            {
                                homeAdvantage.map((advantage, index)=>(
                                    <div key={index} className='row'>
                                        <div className="col-md-4">

                                        </div>
                                        <div className="col-md-8">
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
            </div>
        </section>
    )
}