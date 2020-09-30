import React from 'react';
import { Component } from 'react';

// import logo from './logo.svg';
import './App.css';
// import Nav from './nav'
import Wallpaper from './wallpaper'
import Searchbar from './searchbar'
import Persons from './persons'


class App extends Component {

  state = {
    outputPersons: 's',
    loading: false,
    personsJSX: null,
    value: "2",
    url: null,
    doIt: false,
  };

  getSearch = (event) => {
    this.setState({ value: event.target.value })
    event.preventDefault();
    event.persist()

  }

  submitToSearch = async (e) => {

    e.preventDefault();

    const url = "https://api.github.com/search/users?q=" + this.state.value + "&page=1&per_page=24"

    const response = await fetch(url);
    const data = await response.json();

    this.setState({
      verify: data.items[0],
      persons: data.items,

      loading: false
    }
    );

    this.setState({
      personsJSX: (
        <div className="backspacepersons">
          {this.state.persons.map((person, index) => {

            return <Persons
              name={person.login}
              key={person.id}
              imageURL={person.avatar_url}
              personURL={person.html_url}
            ></Persons>
          })}
        </div>
      )
    })
    // } else {
    //   this.setState({ personsJSX: null })
    // }

    console.log(this.state.verify)
    if (this.state.verify === undefined) {
      console.log("hh")
      this.setState({ personsJSX: null })
      alert("The Username is unavailable, please try again.")
    }

  }

  render() {

    return <div className="App" >
      <Wallpaper />
      <Searchbar submit={(e) => this.submitToSearch(e)} change={(event) => this.getSearch(event)} />
      <div className="backspacepersonss">

        {this.state.personsJSX}

        {/* <Persons imageURL={this.state.personPic} />
        <Persons imageURL={this.state.personPic} />
        <Persons imageURL={this.state.personPic} /> */}

      </div>
    </div>



  }
}

export default App;
