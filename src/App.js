import React, { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list";
import Search from "./components/search/Search";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchBar: ""
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }
  handleChange = event => {
    this.setState({ searchBar: event.target.value });
  };
  render() {
    const { monsters, searchBar } = this.state;
    const filterMonster = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchBar.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <Search handleChange={this.handleChange} placeholer="Search Monster" />
        <CardList monsters={filterMonster} />
      </div>
    );
  }
}

export default App;
