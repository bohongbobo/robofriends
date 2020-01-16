import React, { Component } from 'react';
import CardList from '../componments/CardList';
import { robots } from '../robots.js';
import SearchBox from '../componments/SearchBox';
import './App.css';
import Scroll from '../componments/Scroll';


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        // fetch('http://jsonplaceholder.typicode.com/users')
        //     .then(response => response.json())
        //     .then(users => this.setState({ robots: users }));
        this.setState({ robots: robots })
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })        
    }

    render(){
        const {robots, searchfield } = this.state;
        const filteredRobot = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLocaleLowerCase());
        })
        return !robots.length ? <h1>Loading...</h1> : (
            <div className='tc'>
                <h1 className='f2'>RobotFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <CardList robots={filteredRobot} />
                </Scroll>
                
            </div>
        ); 
    }
}

export default App;