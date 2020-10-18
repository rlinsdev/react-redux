import React, { Component } from 'react';
import Ninjas from './ninja';
import AddNinja from './addNinja';

class App extends Component {
  state = {
    ninjas: [
      { name: 'yoshy', age: 35, belt: 'black', id: 1 },
      { name: 'Natasha', age: 32, belt: 'green', id: 2 },
      { name: 'Toddy', age: 16, belt: 'red', id: 3 },
    ],
  };
  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjasNew = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjasNew,
    });
  };
  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja=>{
      return ninja.id!==id
    });
    this.setState({
       ninjas: ninjas
    })
  };
  render() {
    return (
      <div className='App'>
        <h1>teste</h1>
        <Ninjas
          deleteNinja={this.deleteNinja}
          ninjas={this.state.ninjas}
        ></Ninjas>
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <h1>teste</h1>
//       <Ninjas></Ninjas>
//     </div>
//   );
// }

export default App;
