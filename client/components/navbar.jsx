import React from 'react'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faBell, faUser } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  const { user: currentUser } = useSelector((state) => state.auth)
  return (
    <nav className="navbar navbar-expand-lg bg-light navbar-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
            id="MDB-logo"
            src="https://mdbcdn.b-cdn.net/wp-content/uploads/2018/06/logo-mdb-jquery-small.png"
            alt="MDB Logo"
            draggable="false"
            height="30"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <a className="nav-link mx-2" href="/accounts">
                <FontAwesomeIcon icon={faPlusCircle} /> Accounts
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-2" href="/dashboard">
                <FontAwesomeIcon icon={faBell} /> Dashboard
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link mx-2" href="#!">
                <FontAwesomeIcon icon={faHeart} />
                Trips
              </a>
            </li> */}
            <li className="nav-item ms-3">
              <a className="btn bg-black text-white rounded-lg" href="/login">
                <FontAwesomeIcon icon={faUser} />{' '}
                {currentUser && currentUser.email ? currentUser.email : 'Sign in'}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
