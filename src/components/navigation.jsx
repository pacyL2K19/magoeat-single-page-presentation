import React, { Component } from "react";
// import logo from '../../public/img/images/logo2.png'

export class Navigation extends Component {
  render() {
    return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            <a className="navbar-brand page-scroll" href="#page-top">
              <img src = '/img/images/logo2.png' alt = 'logo' style ={{height : 50, width : 50, marginTop : -10}} />
              {/* <h3>MagoEat</h3> */}
            </a>{" "}
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#features" className="page-scroll">
                  Fonctionalites
                </a>
              </li>
              <li>
                <a href="#about" className="page-scroll">
                  A propos
                </a>
              </li>
              <li>
                <a href="#services" className="page-scroll">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="page-scroll">
                  Gallerie
                </a>
              </li>
              <li>
                <a href="#testimonials" className="page-scroll">
                  Temoignages
                </a>
              </li>
              <li>
                <a href="#team" className="page-scroll">
                  Equipe
                </a>
              </li>
              <li>
                <a href="#contact" className="page-scroll">
                  Contacts
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
