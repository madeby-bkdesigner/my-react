import React, {Component} from 'react';
import './App.css';
import Person from './people/person'
const log = console.log

class App extends Component {

  state = {
    person: [
      {id: 'jdlskjd', name: 'khalid', age: 21 },
      {id: 'dklshjd', name: 'ahmed', age: 43},
      {id: 'djkshdk', name: 'abdi', age: 33}
    ],
    showContent : true
  }  

    /// name change handler
  namechangedHandler = (e, id) => {
    const personIndex = this.state.person.findIndex(person=>{
      return person.id === id
    });
    const person = {
      ...this.state.person[personIndex]
    };
    // log(person)

    person.name = e.target.value
    const persons = [...this.state.person]
    persons[personIndex] = person 

    this.setState({person: persons})
  }

  // hide and show content handler
  toggleContentHandler = ()=>{
    const show = this.state.showContent
    this.setState({showContent: !show})
  }

  // delete content
  deleteContentHandler = (personIndex)=>{
    let person = [...this.state.person]
    person.splice(personIndex, 1)
    this.setState({person: person})
  }

  render() {
      /// render content on to the page
    let persons = null
    
    if(this.state.showContent){
      persons = (
        <div>
          {this.state.person.map((person, index)=>{
            return <Person 
            click = {this.deleteContentHandler.bind(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(e)=> this.namechangedHandler(e, person.id)}/>
          })}
        </div>
      )
    }
    
    return (
      <div className="App">
        {
          this.state.showContent ?
          <button onClick={this.toggleContentHandler}> hideContent </button>
          :<button onClick={this.toggleContentHandler}>showContent</button>
        }
        {persons}
        {/* {
          this.state.showContent ?
          <div className="person-div">
          <Person name={this.state.person[0].name} age={this.state.person[0].age} />
          <Person name={this.state.person[1].name} age={this.state.person[1].age} 
          changed = {this.namechangedHandler}
          ph= {this.state.person[1].name}/>
          <Person name={this.state.person[2].name} age={this.state.person[2].age} />
          </div> : null
        } */}
      </div>
    );
  }
}

export default App;
