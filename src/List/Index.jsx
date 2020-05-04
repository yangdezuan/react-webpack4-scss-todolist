import React from "react"
import style from "../../assets/css/style.scss"
import Child from "./child.jsx"
class App extends React.Component {
  // state初始化一般写在构造器当中
  constructor(haha) {
    super(haha) // 继承调用父类的constructor this.props
    console.log("**test haha**", this.haha, haha == this.props)

    this.state = {
      val: 1,
      goods: [
        { id: 1, text: "jack" },
        { id: 2, text: "peter" },
        { id: 3, text: "emily" },
      ],
    }
    //console.log(this.getState())
  }
  componentDidMount() {
    let that = this
    this.setState({
      val: this.state.val + 1,
    })
    //第一次输出
    console.log("第一次输出", this.state.val)
    this.setState({
      val: this.state.val + 1,
    })
    //第二次输出
    console.log("第二次输出", this.state.val)
    setTimeout(() => {
      that.setState({ val: that.state.val + 1 })
      //第三次输出
      console.log("第三次输出", that.state.val)
      that.setState({
        val: that.state.val + 1,
      })
      //第四次输出
      console.log("第四次输出", this.state.val)
    }, 0)
  }
  Remove(id) {
    let goods = this.state.goods
    this.state.goods.splice(id, 1)
    this.setState({
      goods: goods,
    })
  }
  Add(param, event) {
    let Dom_kw = this.refs.kw
    let kw = Dom_kw.value
    Dom_kw.focus()
    console.log(kw)
    this.state.goods.push({
      id: this.state.goods.length + 1,
      text: kw,
    })
    this.setState({
      goods: this.state.goods,
    })
    console.log(this.getState)
    Dom_kw.value = ""
  }
  render() {
    return (
      <div className="list">
        <Child />
        {this.state.goods.map((item, i) => (
          <li key={item.id}>
            {item.text}
            <a
              className="i-remove"
              href="#"
              onClick={this.Remove.bind(this, i)}
            >
              Del
            </a>
          </li>
        ))}
        添加：
        <input type="text" ref="kw" />
        <button onClick={this.Add.bind(this, "hello world")}>Add</button>
      </div>
    )
  }
}

export default App
