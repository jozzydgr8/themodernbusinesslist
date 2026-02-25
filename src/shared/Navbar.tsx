import businessLogo from '../assets/businessLogo.png'
import { NavLink } from 'react-router-dom'
import { FlatButton } from './FlatButton'



export const Navbar = () => {
 

  return (
    <nav className="navbar navbar-expand-lg" data-bs-theme='light'>
      <div className="container-fluid">
        <img className='navbar-brand' src={businessLogo} alt='logo' />

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to={`/`} className="nav-link active">
                    Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/`} className="nav-link active">
                    Sign In
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/categories`} className="nav-link active">
                    Categories
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={``} className="nav-link">
                <FlatButton title='list your business' className='btn btnPrimary '/>
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}
