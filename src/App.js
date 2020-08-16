import React, {Component} from 'react';
import './App.css';
import Person from './people/person'
import Input from './people/input'


class App extends Component {

  state = {
    person: [
      { id:1, name: 'khalid', age: 21 },
      {id:2, name: 'ahmed', age: 43},
      {id:3, name: 'abdi', age: 33}
    ],
    showContent : true
  }

  hidePersonHandler = () => {
    const show = this.state.showContent
    this.setState({showContent: !show})
  }

  ageChanged = (e) => {
    this.setState({

      person: [
        { name: 'khalid', age: e.target.value },
        {name: 'ahmed', age: 43},
        {name: 'abdi', age: 33}
      ]
    })
  }
  deletePersonHandler = (personIndex) => {
    // const person = this.state.person.slice()
    const person = [...this.state.person]
    person.splice(personIndex, 1)
    this.setState({ person: person })
  }
  
  render() {


    let persons = null
    if (this.state.showContent) {
      persons = (
        <div className="person-div">
          {this.state.person.map((person, index) => {
            return <Person
              click={this.deletePersonHandler.bind(index)}
              name={person.name}
              age={person.age}
              key={person.id}/>
          })}
        {/* <Person name={this.state.person[0].name} age={this.state.person[0].age} />
        <Person name={this.state.person[1].name} age={this.state.person[1].age} />
        <Person name={this.state.person[2].name} age={this.state.person[2].age} /> */}
        </div>
      )
    }
    return (
      <div className="App">
        <Input changed={this.ageChanged} age={this.state.person[0].age} />
        {
          this.state.showContent ?
          <button onClick={this.hidePersonHandler}>hide person</button>
          :<button onClick={this.hidePersonHandler}>show person</button>

        }
        {persons}
        {/* {
          this.state.showContent ?
          <div className="person-div">
          <Person name={this.state.person[0].name} age={this.state.person[0].age} />
          <Person name={this.state.person[1].name} age={this.state.person[1].age} />
          <Person name={this.state.person[2].name} age={this.state.person[2].age} />
          </div> : null
        } */}
      </div>
    );
  }
}

export default App;
