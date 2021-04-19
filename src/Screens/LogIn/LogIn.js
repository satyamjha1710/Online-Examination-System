import React, { Component } from "react";

class LogIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
    this.logInNow = this.logInNow.bind(this);
  }

  logInNow() {
    const { email, password } = this.state;
    let userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (email === userInfo.email && password === userInfo.password) {
      sessionStorage.setItem("userInfo", JSON.stringify(userInfo));
      this.props.changeUserState();
    } else {
      alert("enter correct details");
    }
    // console.log(JSON.parse(sessionStorage.getItem("userInfo")));
  }
  render() {
    const style={
      padding:"40px",
      width:"55vh",
      marginLeft:"auto",
      marginRight:"auto",
      borderRadius:"10px",
    }
    return (
      <div>
        <h1 className="text-center">Log In</h1>
        <div style={style} className="d-flex justify-content-center align-items-center border border-dark">
          <form>
          <div className="row form-group">
          <div className="col-md-12">
            <label htmlFor="email" className="">
              Email:
            </label>
            <input
              type="email"
              onChange={e =>
                this.setState({
                  email: e.target.value
                })
              }
              className="form-control"
              autoComplete="true"
              autoFocus={true}
              placeholder="email"
              required="true"
            />
          </div>
          </div>
          <div className="row form-group">
          <div className="col-md-12">
            <label htmlFor="password" className="">
              Password:
            </label>
            <input
              type="password"
              onChange={e =>
                this.setState({
                  password: e.target.value
                })
              }
              className="form-control"
              placeholder="password"
              required="true"
            />
          </div>
          </div>
          <div className="row form-group">
            <div className="col">
              <button className="btn btn-success" onClick={this.logInNow}>
                LogIn <i className="fa fa-sign-in" />
              </button>
            </div>
          </div>    
        
          </form>
       </div>
        </div>
    );
  }
}

export default LogIn;
