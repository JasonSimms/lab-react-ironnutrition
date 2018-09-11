import React from "react";
import ContactCard from "./ContactCard";
import list from "../resources/list"

class Application extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: []
    };
    this._randomContact = this._randomContact.bind(this);
    this._nameSort = this._nameSort.bind(this);
    this._popularitySort = this._popularitySort.bind(this);

  }
  componentDidMount(){
      this.setState({contacts : list.slice(0,5)}
      )}




  render() {
    // console.log(this.state.contacts.slice(0, 5));
    const mappedContacts = this.state.contacts
      .map((contacts, index) => (
        <ContactCard
          name={contacts.name}
          img={contacts.pictureUrl}
          popularity={contacts.popularity}
          index={index}
          key={index}
          clickToDelete={() => this._deleteContact(index)}
        />
      ));

    return (
      <div>
        <h1>Iron Contacts by Dalina & Jason</h1>
        <button onClick={this._randomContact}>Add Random Contact</button>
        <button onClick={this._nameSort}>Sort by name</button>
        <button onClick={this._popularitySort}>Sort By Popularity</button>


        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>

          </tr>
          {mappedContacts }
        </table>

      </div>
    );


  }
  _nameSort(){
    console.log(`namesort`,this.state.contacts.length)
    let sortedContacts = this.state.contacts.sort(function(a, b) {
      var textA = a.name.toUpperCase();
      var textB = b.name.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  });
    this.setState({
      contacts: sortedContacts
    })
  }

  _popularitySort(){
    console.log('popularitysort',this.state.contacts.length)
    let sortedPopContacts = this.state.contacts.sort(function(a, b){return a.popularity-b.popularity})
    this.setState({
      contacts: sortedPopContacts
    })
  }
  _randomContact() {
      this.state.contacts.push(list[this._generateRandomInt()])
      console.log(this.state.contacts);
    this.setState({
      contacts: this.state.contacts
    })  
    }
    _generateRandomInt() {
        return Math.floor(Math.random() * Math.floor(list.length-5)) + 5
    }
  _deleteContact = (index) => {
  const contactsDeleted = this.state.contacts;
  contactsDeleted.splice(index, 1);
  this.setState({
      contacts: contactsDeleted
  })
}
}

export default Application;
