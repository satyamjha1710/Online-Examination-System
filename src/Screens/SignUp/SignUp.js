import React, { Component } from "react";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
    };
    this.signUpNow = this.signUpNow.bind(this);
  }

  signUpNow() {
    let { toggleToSignIn } = this.props;
    const { username, email, password } = this.state;
    if (!email.match(/\S+@\S+\.\S+/)) {
      alert("please enter correct email");
    } else if (!password.match(/(?=.*\d)(?=.*[a-z]).{8,}/)) {
      alert(
        "Please enter atleast 8 characters and contain atleast one character and one number"
      );
    } else {
      let signUpObj = { username, email, password };
      localStorage.setItem("userInfo", JSON.stringify(signUpObj));
      toggleToSignIn(false);
      console.log(signUpObj, "****");
    }
  }

  render() {
    const style = {
      padding: "40px",
      width: "55vh",
      marginLeft: "auto",
      marginRight: "auto",
      borderRadius: "10px",
      // background:"linear-gradient(180deg, #454545,#b4b4b4)"
    };

    return (
      <div>
        <h1 className="text-center">Registration</h1>
        <div
          style={style}
          className="d-flex justify-content-center align-items-center border border-dark"
        >
          <form>
            <br />
            <div className="form-group">
              <div className="row">
                <div className="col-md-12">
                  <label htmlFor="name">Username:</label>
                  <input
                    type="text"
                    onChange={(e) => {
                      this.setState({ username: e.target.value });
                    }}
                    autoFocus={true}
                    className="form-control"
                    placeholder="name"
                    required="true"
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <div className="row">
                <div className="col-md-12">
                  <label htmlFor="number">Email:</label>
                  <input
                    type="email"
                    onChange={(e) => {
                      this.setState({ email: e.target.value });
                    }}
                    className="form-control"
                    placeholder="email"
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <div className="row">
                <div className="col-md-12">
                  <label htmlFor="number">password:</label>
                  <input
                    type="password"
                    onChange={(e) => {
                      this.setState({ password: e.target.value });
                    }}
                    maxLength="8"
                    className="form-control"
                    placeholder="password"
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <button
                  className="btn btn-dark btn-lg btn-block"
                  onClick={this.signUpNow}
                >
                  Register <i className="fa fa-database" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
