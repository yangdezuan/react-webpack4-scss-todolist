import React from "react"
//import  "./assets/css/style.scss"
import style from "../assets/css/style.scss"
class App extends React.Component {
  render() {
    return (
      <div className="box" style={{ fontSize: "14px" }}>
        Hello
        <span className="hl">Jack!!!</span>
        <br />
        欢迎来到react js教程学习33！！！
      </div>
    )
  }
}

export default App
