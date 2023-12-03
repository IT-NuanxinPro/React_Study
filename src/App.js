import React, { Component } from 'react'
import './App.css';
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
export default class App extends Component {
  state = {
    todos: [
      {
        id: '001',
        name: '吃饭',
        done: true
      },
      {
        id: '002',
        name: '睡觉',
        done: true
      },
      {
        id: '003',
        name: '打代码',
        done: false
      },
      {
        id: '004',
        name: '逛街',
        done: true
      }
    ]
  } 

  addTodo = (todoObj) => {
    const {todos} = this.state
    const newTodos = [todoObj, ...todos]
    this.setState({todos: newTodos})
  }

  updateTodoItem = (id, done) => {
    const {todos} = this.state
    const newTodos = todos.map((todoObj) => {
      if (todoObj.id === id) return {...todoObj, done}
      else return todoObj
    })
    this.setState({todos: newTodos})
  }

  deleteTodoItem = (id) => {
    const {todos} = this.state
    const newTodos = todos.filter((todoObj) => {
      return todoObj.id !== id
    })
    this.setState({todos: newTodos})
  }
  render() {
    return (
      <div className='todo-container'>
        <div className='todo-wrap'>
          <Header addTodo={this.addTodo}/>
          <List todos={this.state.todos} updateTodoItem={this.updateTodoItem} deleteTodoItem={this.deleteTodoItem}/>
          <Footer/>
        </div>
      </div>
    )
  }
}


