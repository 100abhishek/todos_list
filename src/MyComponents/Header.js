import React from 'react'
import PropTypes from 'prop-types'
import { link } from "react-router-dom";

export default function Header(props) {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <link class="navbar-brand" to="/">{props.title}</link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <link class="nav-link active" aria-current="page" to="/">Home</link>
                        </li>
                        <li class="nav-item">
                            <link class="nav-link" to="/about">About</link>
                        </li>
                    </ul>
                    {props.searchBar? <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>: ""}
                </div>
            </div>
        </nav>


// <nav class="navbar navbar-expand-lg bg-body-tertiary">
// <div class="container-fluid">
//   <link class="navbar-brand">{props.title}</link>
//   <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//                          <li class="nav-item">
//                              <link class="nav-link active" aria-current="page" to="#">Home</link>
//                          </li>
//                          <li class="nav-item">
//                              <link class="nav-link" to="#">About</link>
//                          </li>
//                    </ul>
//   <form class="d-flex" role="search">
//     <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//     <button class="btn btn-outline-success" type="submit">Search</button>
//   </form>
// </div>
// </nav>
    )
}
Header.defaultProps = {
    title: "your title here",
    searchBar: true
}

Header.propTypes = {
    //title: propTypes.string,
    seachBar: PropTypes.bool.isRequired
}