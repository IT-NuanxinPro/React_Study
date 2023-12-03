import React,{Component} from 'react';
import './index.css';

export default class Header extends Component{
  handleKeyUp = (event)=>{
    const {keyCode,target} = event;
    if(keyCode !== 13) return;
    if(target.value.trim() === ''){
      alert('输入不能为空');
      return;
    }
    this.props.addTodo({
      id:Date.now(),
      name:target.value,
      done:false
    });
  }
  render(){
    return(
      <div className="header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" onKeyUp={this.handleKeyUp}/>
      </div> 
    )
  }
} 


