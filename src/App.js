import React from "react";
// import Logo from './icon.svg';
import logo from "./fan-solid.svg";
import "./App.css";
import MainNav from "./components/NavBar";
import Header from "./components/Header";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      showLogin: false,
      showSignup: false,
      showSell: false
    };
  }
  componentDidUpdate(nextProps, nextState) {
    if (this.props.userId !== nextProps.userId) {
      this.setState({ showLogin: false, showSignup: false, showSell: false });
    }
  }

  onClick = () => {
    setTimeout(() => {
      this.setState({
        isLoading: true
      });
    }, 6000);
  };

  render() {
    const { isLoading } = this.state;
    if (isLoading) {
      return (
        <p>
          <img src={logo} className="App-logo center" alt="logo" />
        </p>
      );
    }
    return (
      <div className="App">
        <MainNav
          onLoginClicked={() =>
            this.setState({
              showLogin: true
            })
          }
          userId={this.props.userId}
          onLogoutClicked={this.props.logout}
        />
        <div>{this.props.userId ? <Header /> : null}</div>
        <button onClick={this.onClick} />
      </div>
    );
  }
}

export default App;
