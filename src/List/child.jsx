import React from "react"
//import  "./assets/css/style.scss"
import style from "../../assets/css/style.scss"
class App extends React.Component {
  // state初始化一般写在构造器当中
  constructor(haha) {
    super(haha) // 继承调用父类的constructor this.props
   //console.log(this.getState())
  }
  render() {
    return (
      <div>
        <h3>Child title List</h3>
      </div>
    )
  }
}

export default App
