import { FlatButton } from "../../../shared/FlatButton";
import {PlusOutlined, ArrowDownOutlined} from '@ant-design/icons';
import { TransitionSectionSvg } from "../../../shared/TransitionSectionSvg";
import { useEffect } from "react";
import { Row, Col } from 'antd';
import { NavLink } from "react-router-dom";
import { UseAuthContext } from "../../../context/UseAuthContext";
export const Header = ()=>{
     useEffect(() => {
    const headerText = document.querySelector('.headerWrite');
    headerText?.classList.add('sectionAnimationLeft');

    const headerButton = document.querySelector('.headerButton');
    headerButton?.classList.add('sectionAnimationUp');

    const headerBadge = document.querySelector('.header-badge');
    headerBadge?.classList.add('sectionAnimationDown');
}, []);
const {user} = UseAuthContext()

    return(
        <section id="header-section">
            <div className="container-fluid">
                
                    <div className="row">
                        <div className="col-md-6"> 

                       
                        <small className="header-badge">
                           The Modern Business Directory 
                        </small>
                        <br/><br/>
                        <h1>Establish Your Online Presence</h1>
                        <h5 className="headerWrite">
                            The modern business list is a public business directory
                            where companies can list themselves to establish online 
                            visibility and credibility.
                        </h5>
                        <br/>

                        <p>
                            Open and neutral listings accessible to users, search engines, and AI systems. Some projects 
                            carry an Execution Verified badge for confirmed delivery.
                        </p>

                        <Row className="headerButton"gutter={12}>
                        <Col >
                            <NavLink to={'/mybusiness'}>
                            <FlatButton
                            className="btn btn-lg btnPrimary"
                            icon={<PlusOutlined />}
                            title={user ? 'View Company':'List company'}
                            />
                            </NavLink>
                        </Col>

                        <Col>
                            <NavLink to={'/categories'}>
                            <FlatButton
                            className="btn btn-lg btn-dark"
                            icon={<ArrowDownOutlined />}
                            title="View Categories"
                            />
                            </NavLink>
                        </Col>
                        </Row>
                      
                        </div>
                    </div>
                    
                    
                    
                    
            </div>
           
           <TransitionSectionSvg/>

        </section>
    )
}