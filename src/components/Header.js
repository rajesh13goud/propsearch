import React from "react";
// import {
//   Jumbotron,
//   ControlLabel,
//   FormControl,
//   Alert,
//   Button
// } from "react-bootstrap";
import {changeContractAddress, clearContractAddress} from "../actions/index.actions";
import {connect} from 'react-redux';
class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      showAlert: false
    };
  }
  onKeyPress(e){
      if(e.keyCode === 13){
          this.props.changeContractAddress(e.target.value);
      }

  }
  render() {
    return <p>hahha</p>;
  }
}

export default connect({changeContractAddress, clearContractAddress})(Header);
