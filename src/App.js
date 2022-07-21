import React ,{ Component } from 'react';
import TodoItem from './components/todoItems/todoItems';
import AddItems from './components/addItem/addItem';
class App extends Component {
  state = {
    items :[
      {id:1 , name:'Hameed' , age : 22},
      {id:2 , name:'Hassan' , age : 24},
      {id:3 , name:'Hamza' , age : 25},
    ]
  }  
  deletItem = (id) => {
      let items = this.state.items;
      let validId = items.findIndex(item => item.id === id);
      items.splice(validId , 1);
      this.setState({items});
  }

  addItem = (item)=> {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({items});
  }
  render(){
    return (
      <div className="App container">
        <h1 className='text-center'>TODO list App</h1>
         <TodoItem items = {this.state.items} deletItem = {this.deletItem}/>
         <AddItems addItem = {this.addItem}/>
      </div>
    );
  }
}

export default App;
