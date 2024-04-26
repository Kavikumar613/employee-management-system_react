import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <a href="#" className="navbar-brand">
                Full Stack Application
                </a>
                <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-traget="#navbarSupportedContent"
                aria-controls="#navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation" 
                >
                    <span className="navbar-toggle-icon"></span>
                </button>
                <button className="btn btn-outline-light" >Add User</button>
            </div>

        </nav>
    </div>
  )
}

export default Navbar