import React, { Component } from 'react'
import './index.css'
export default class Footer extends Component {
  handleCompletedCount = ()=>{
    const {todos} = this.props
    return todos.reduce((pre,cur)=>{
      return pre + (cur.done ? 1 : 0)
    },0)
  }
  clearCompleted = ()=>{
    if(window.confirm(`确定清除${this.handleCompletedCount()}条已完成任务吗？`)){
      this.props.clearCompleted()
    }
  }
  checkAll = (e)=>{
     this.props.checkAll(e.target.checked)
  }
  render() {
    const {todos,isCheckAll} = this.props
    return (
      <div className="todo-footer">
        <div className='footerOption'>
          <input type="checkbox" checked={isCheckAll} onChange={this.checkAll}/>
          <span>已完成 <b>{this.handleCompletedCount()}</b> / 全部 <b>{todos.length}</b> </span>
        </div> 
        <button className="btn btn-danger" onClick={this.clearCompleted}>清除已完成任务</button>
      </div>
    )
  }
}
 