import React, { Component } from "react";

class NewPatient extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <main>
          <div className="cards">
            <div className="card-single">
              <div className="">
                <h1>54</h1>
                <span>Patients</span>
              </div>
              <div className="">
                <span className="las la-users"> </span>
              </div>
            </div>
            <div className="card-single">
              <div className="">
                <h1>54</h1>
                <span>Patients</span>
              </div>
              <div className="">
                <span className="las la-users"> </span>
              </div>
            </div>
            <div className="card-single">
              <div className="">
                <h1>54</h1>
                <span>Patients</span>
              </div>
              <div className="">
                <span className="las la-users"> </span>
              </div>
            </div>
            <div className="card-single">
              <div className="">
                <h1>54</h1>
                <span>Patients</span>
              </div>
              <div className="">
                <span className="las la-users"> </span>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default NewPatient;
