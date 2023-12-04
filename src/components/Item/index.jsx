import React, { Component } from 'react'
import './index.css'
export default class Item extends Component {
  state = {
    mouse:false
  }

  handleChange = (e)=>{
    const {id} = this.props
    this.props.updateTodoItem(id,e.target.checked)
  }

  deleteTodo = ()=>{
    const {id,name} = this.props
    if(window.confirm(`确定删除${name}吗？`)){
      this.props.deleteTodoItem(id)
    }
  }

  render() {
    const {name,done} = this.props
    const {mouse} = this.state
    return (
      <div className="todo-item" style={{backgroundColor:mouse?'#ddd':'white'}}
      onMouseEnter={()=>{this.setState({mouse:true})}} onMouseLeave={()=>{this.setState({mouse:false})}}>
        <div className="option">
          <input type="checkbox" checked={done} onChange={this.handleChange}/>
          <span>{name}</span>
        </div>
        <button style={{display:mouse?'block':'none'}} onClick={this.deleteTodo}>删除</button>
      </div>
    )
  }
}
