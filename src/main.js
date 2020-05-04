import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/* var HelloMessage = React.createClass({
    render: function () {
        return <h1>Hello {this.props.name}</h1>;
    }
}); */
// React.createClass is not a function
// 这个是因为react最新版本抛弃使用了createClass这个函数，这个也是为了配合ES6
//https://blog.csdn.net/shaleilei/article/details/79020180?%3E
const HelloMessage = <p>hello world!</p>;
class Welcome extends React.Component {
  render() {
    return (
      <div>
        <h2>Title</h2>
        <div className={`check-radio ${1 ? "active" : null}`}> Welcome to learn reactjs</div>
      </div>
    )
  } //value.checked
}
import App from './App.jsx';
import List from './List/Index.jsx';
import Input from './components/input.jsx';
//console.log(this.getState())
ReactDOM.render(
  <div>
    <h2>Title</h2>
    <App></App>
    <List></List>
    <Input placeholder="请输入" type="text" name="test" />
  </div>, // HelloMessage||App
  document.getElementById('app')
);
//import App from './App.jsx';
//ReactDOM.render(<HelloMessage />, document.getElementById('app'))
