import { FlatButton } from "../../../shared/FlatButton";
import {PlusOutlined, ArrowDownOutlined} from '@ant-design/icons';
import { TransitionSectionSvg } from "../../../shared/TransitionSectionSvg";

export const Header = ()=>{
    return(
        <section id="header-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">

                        <div>
                           Modern List 
                        </div>
                        <h1>Establish Your Online Presence</h1>
                        <p>
                            The modern business list is a public business directory
                            where companies can list themselves to establish online 
                            visibility and credibility.
                        </p>

                        <div>
                            <FlatButton className="btn btn-lg btnPrimary" icon={<PlusOutlined/>} title="list your company"/>
                            <FlatButton className="btn btn-lg btn-dark" icon={<ArrowDownOutlined/>} title="Learn more"/>
                        </div>
                    </div>
                    <div className="col-md-6">

                    </div>
                </div>
            </div>
           
           <TransitionSectionSvg/>

        </section>
    )
}