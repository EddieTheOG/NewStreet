import { Component } from "react";
import axios from 'axios';

export default class PersonList extends Component {
    
    // TO-DO: switch to useState()
    state = {
      persons: []
    }
  
    // TO-DO: switch to useEffect
    componentDidMount() {
      axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
          const persons = res.data;
          this.setState({ persons });
        })
    }
  
    render() {
      return (
        <ul>
          {
            this.state.persons
              .map(person =>
                <li key={person.id}>{person.name}</li>
              )
          }
        </ul>
      )
    }
  }