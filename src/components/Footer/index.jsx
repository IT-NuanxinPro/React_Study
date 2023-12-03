import React, { Component } from 'react'
import './index.css'
export default class Footer extends Component {
  render() {
    return (
      <div className="todo-footer">
        <div className='footerOption'>
          <input type="checkbox"/>
          <span>已完成0 / 全部2</span> 
        </div> 
        <button className="btn btn-danger">清除已完成任务</button>
      </div>
    )
  }
}
 