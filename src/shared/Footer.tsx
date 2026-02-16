import { NavLink } from 'react-router-dom'
import businessLogo from '../assets/businessLogo.png'
import { FlatButton } from './FlatButton'
export const Footer = ()=>{
    return(
        <footer>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <div><img src={businessLogo} alt='business logo'/></div>
                        <h6>
                            A trusted business directory where companies establish 
                            online presence and visibility. Open, neutral listings 
                            accessible to users, search engines, and AI systems.
                        </h6>
                    </div>

                    <div className="col-md-4">
                        <h3>Directory</h3>
                        <NavLink to={'/'}>Get Listed</NavLink><br/>
                        <NavLink to={'/'}>Remove Company</NavLink><br/>
                        <NavLink to={'/'}>Sign in</NavLink><br/>
                        <p>Need help?</p>
                        Contact our support team
                        <br/>
                        <NavLink to={'/'}>
                        <FlatButton title='Support' className='btn btnSuccess'/>
                        </NavLink>
                    </div>
                </div>

                <div className="col-md-4">
                    <h3>Platform</h3>
                    <NavLink to={'/'}>Home</NavLink><br/>
                    <NavLink to={'/'}>Features</NavLink><br/>
                    <NavLink to={'/'}>How it Works</NavLink><br/>
                    <NavLink to={'/Contact'}>Contact</NavLink>
                </div>
            </div>
        </footer>
    )
}