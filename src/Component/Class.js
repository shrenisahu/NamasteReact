import React from "react";
const url = "https://api.github.com/users/shrenisahu";
// THIS IS JUST MADE TO PLAY WITH CLASS COMPIONENTS
class ProfileClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        login: "summu",
      },
    };
    console.log("child const");
  }
  async componentDidMount() {
    this.timer = setInterval(() => {
      console.log("child  componentDidMount");
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.userInfo !== this.state.userInfo) {
      console.log("child componentDidUpdate");
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("child componentWillUnmount ");
  }

  render() {
    console.log("child render");

    return (
      <>
        <h1>user name :{this.state.userInfo?.login}</h1>
      </>
    );
  }
}
export default ProfileClass;
