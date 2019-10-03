import React, { Component } from "react";
import { Button } from "reactstrap";
import axios from "axios";
import * as actionCreator from "../redux/action";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      details: {}
    };
  }

  onLoggedIn = e => {
    // console.log(">>>>>>>>>>>>>>>>>>" + JSON.stringify(this.state.details));
    // axios({
    //   method: "POST",
    //   url: "https://getthegig.api.underscoretec.com/user/login",
    //   data: JSON.stringify(this.state.details),
    //   headers: {
    //     "Content-Type": "application/json"
    //   }
    // })
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => {
    //     console.log("Errorrr......." + err);
    //   });

    //console.log(e);
    if (
      this.state.details.emailId !== "" &&
      this.state.details.password !== ""
    ) {
      this.props.actions.signIn(
        this.state.details.emailId,
        this.state.details.password
      );
    }
    console.log("user loggingin................");
    // console.log("REDUXXXXXXXXXXXXXXXx",this.props.userDetail);
  };

  fileChangedHandler = (event) => {
    const file = event.target.files[0]
  }
  state = { selectedFile: null }

fileChangedHandler = event => {
  this.setState({ selectedFile: event.target.files[0] })
}

  textInput = e => {
    console.log(e.target.name);
    console.log(e.target.value);
    let x = { [e.target.name]: e.target.value };
    this.setState(
      prevState => ({
        details: {
          ...prevState.details,
          ...x
        }
      })
      // () => {
      //   console.log(this.state.details);
      // }
    );
    //console.log("dfghjk>>>>>>>>>>>>"+JSON.stringify(this.state.details));
  };

  render() {
    return (
      <div className="">
        <input
          name="emailId"
          placeholder="Email"
          onChange={this.textInput}
          type="text"
        />
        <br />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={this.textInput}
        />
        <br />
        <div className='button'>
          <Button
            variant="primary"
            size="lg"
            active
            onClick={this.onLoggedIn}
            type="submit"
          >
            Login
          </Button>
        </div>

        <br />
        <input
          className="button"
          type="file"
          name="file"
          placeholder="Select an image"
          onChange={this.textInput}
        />
        <div className="button">
          <Button type="submit" onClick={this.uploadImage}>
            Upload Image
          </Button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return state;
};

function mapDispatchToProps(dispatch, state) {
  return {
    actions: bindActionCreators(actionCreator, dispatch)
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
