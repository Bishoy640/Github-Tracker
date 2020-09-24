import React from 'react';
import { Component } from 'react';

// import logo from './logo.svg';
import './App.css';
// import Nav from './nav'
// import Wallpaper from './wallpaper'
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



  // async componentDidUpdate() {
  //   if (this.state.doIt === true) {
  //     const url = "https://api.github.com/search/users?q=" + this.state.searchStr + "&page=1&per_page=10"

  //     const response = await fetch(url);
  //     const data = await response.json();
  //     this.setState({
  //       verify: data.items[0],
  //       persons: data.items,

  //       loading: false
  //     }
  //     );
  //     console.log(this.state.verify)
  //   }

  //   this.setState({doIt: false})
  // }

  getSearch = (event) => {
    this.setState({ value: event.target.value })
    event.preventDefault();
    event.persist()

  }



  submitToSearch = async (e) => {
    // this.setState({
    //   outputPersons: true
    // });
    e.preventDefault();
    e.persist()

    const url = "https://api.github.com/search/users?q=" + this.state.value + "&page=1&per_page=18"

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

    e.persist();


  }

  render() {

    if (this.state.value === '3') {
      return <div>
        Enter a value
        {/* <Wallpaper /> */}
        <Searchbar change={(event) => this.getSearch(event)} />
      </div>;
    }

    // if (!this.state.verify) {
    //   return <div>didn't get a person</div>;
    // }


    else {
      return (
        <div className="App" >


          {/* <Wallpaper /> */}
          <Searchbar submit={(e) => this.submitToSearch(e)} change={(event) => this.getSearch(event)} />
          <div className="backspacepersonss">

            {this.state.personsJSX}

            {/* <Persons imageURL={this.state.personPic} />
            <Persons imageURL={this.state.personPic} />
            <Persons imageURL={this.state.personPic} /> */}

          </div>




          {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header> */}
        </div>
      );
    }
  }
}

export default App;
