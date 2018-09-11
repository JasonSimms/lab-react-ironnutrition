import React from "react";
import foods from '../../foods.json'
import FoodBox from "./FoodBox"

class Application extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: []
    };
    // this._randomContact = this._randomContact.bind(this);
    // this._nameSort = this._nameSort.bind(this);
    // this._popularitySort = this._popularitySort.bind(this);

  }
  componentDidMount(){
      this.setState({contacts : foods.slice(0,5)}
      )}




  render() {
    // console.log(this.state.contacts.slice(0, 5));
    // const mappedContacts = this.state.contacts
    //   .map((contacts, index) => (
    //     <FoodBox
    //     />
    //   ));

    return (
      <div>
        <h1>IronFood By Jason</h1>
          <FoodBox />
      </div>
    )
  }
}

export default Application;
