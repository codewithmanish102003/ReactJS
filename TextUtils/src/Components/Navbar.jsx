import React from 'react'
import PropTypes from 'prop-types';
<link rel="stylesheet" href="App.css" />
export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/">Action</a></li>
                  <li><a className="dropdown-item" href="/">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/">Something else here</a></li>
                </ul>
              </li>
            </ul>
            <div class="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={props.toggle} />
              <label className={`form-check-label text-${props.mode==="light"?"dark":"light"} `} htmlFor="flexSwitchCheckChecked">{props.settxt}</label>
            </div>
            {/* <div>
            <label for="exampleColorInput" class="form-label"></label>
            <input type="color" className="form-control form-control-color" id="exampleColorInput" value="#563d7c" title="Choose your color"></input>
            </div> */}
          </div>
        </div>
      </nav>
    </>
  )
}


Navbar.propTypes = {
  title: PropTypes.string.isRequired,
}

// Navbar.defaultProps = {
//   title: 'Default Title'
// }