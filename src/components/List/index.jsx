import React, { Component } from 'react'
import './index.css'
import Item from '../Item'
export default class List extends Component {

  render() {
    const {todos,deleteTodoItem,updateTodoItem} = this.props
    return (
      <div className="todo-main">
        {
          todos.map((todo)=>{
            return <Item key={todo.id} {...todo} deleteTodoItem={deleteTodoItem} updateTodoItem={updateTodoItem}/>
          })
        }
      </div>
    )
  }
}
