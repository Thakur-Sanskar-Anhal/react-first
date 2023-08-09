import React from 'react'
import PropTypes from 'prop-types'

export default function NavBar(props) {
  return (
    <nav className={`navbar navbar-expand bg-${props.mode==='dark'? 'dark':'warning'}`} data-bs-theme={props.mode}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/"><b>{props.title}</b></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/"><b>Home</b></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/"><b>{props.aboutText}</b></a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-success" type="submit">Search</button>
            </form>
            <div className={`form-check form-switch mx-5 text-${props.mode==='dark'?'light':'dark'}`}>
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
              <label className="form-check-label " htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div>
          </div>
        </div>
      </nav>
  )
}

NavBar.prototype = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired,
}

NavBar.defaultProps={
    title: 'tittle ',
    aboutText: 'about'
}