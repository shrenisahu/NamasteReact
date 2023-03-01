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
    const data = await fetch(url); // here we are using await which causes the parent did mount to print befor child didmount
    const json = await data.json();
    console.log("state is set");
    this.setState({ userInfo: json });

    console.log("child  componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.userInfo !== this.state.userInfo) {
      console.log("child componentDidUpdate");
    }
  }

  componentWillUnmount() {
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
