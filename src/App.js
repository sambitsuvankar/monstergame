import React , { Component } from 'react';  // This React library allows us to write this 'html' like syntaxes inside our javascript file.
import { CardList } from './components/card-list/card-list.component.jsx';
import logo from './logo.svg';
import './App.css';

import { SearchBox } from './components/search-box/search-box.component.jsx';

class App extends Component{
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField : ''
    };

    this.handleChange = this.handleChange.bind(this); 
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(user => this.setState({ monsters: user}))
  }

  handleChange(e) {
    this.setState( {searchField : e.target.value} );
  }

  render(){
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        
        <SearchBox placeholder = 'Search Monsters' handleChange={this.handleChange} />

        <CardList monsters = {filteredMonsters}/>  {/*Here (monsters = {this.state.monsters}) is a props .. And everything inside this <CardList> JSX tag will be the props.children */}
      </div>
    );
  }
}
export default App;
