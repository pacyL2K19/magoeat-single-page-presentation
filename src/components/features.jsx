import React, { Component } from "react";

export class features extends Component {
  render() {
    return (
      <div id="features" className="text-center">
        <div className="container">
          <div className="col-md-10 col-md-offset-1 section-title">
            <h2>Fonctionalités</h2>
          </div>
          <div className="row">
            {this.props.data
              ? this.props.data.map((d,i) => (
                  <div  key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                    {" "}
                    <i className={d.icon}></i>
                    <h3>{d.title}</h3>
                    <p>{d.text}</p>
                  </div>
                ))
              : "Loading..."}
          </div>
          <div style = {{alignSelf : 'center', alignContent : 'center'}}>
            <h1>Télecharger l'Application</h1>
            <div className = 'row' style = {{display : 'flex'}}>
              
              <div style = {{justifyContent : 'space-between'}}>
                <div>

                </div>
                <div style = {{display : 'flex', flex : 1}}>

                </div>
                <div style = {{display : 'flex', flexDirection : 'row', flex : 1}}>
                  <img src = '/img/images/android.png' alt = 'Android' style = {{ height : 100}}/>
                  <img src="/img/images/ios.png" alt="iOS" style = {{ height : 100}}/>
                </div>
              </div>
              {/* <div>
                <img src = '/img/images/phones.jpg' alt = '' style = {{height : 380, width : 380}} className = 'col-xs-12 col-lg-6'/>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default features;
