import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


// function Clock(props) {
//   return (
//     <div>
//       <h1>Hello, World!</h1>
//       <h2>It is {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   );
// }

// class Clock extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello, World!</h1>
//         <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }

// class Clock extends React.Component {
//   /**
//    * 构造函数
//    * @param {*} props 
//    */
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }

//   /**
//    * 挂载
//    */
//   componentDidMount() {
//     // timeID直接存放于this中
//     // 注意：如果需要存储一些不用于视觉输出的内容，则可以手动向类中添加额外的字段
//     // 注意：如果在 render() 方法中没有被引用, 它不应该出现在 state 中
//     this.timerID = setInterval(
//       () => this.tick(),
//       1000
//     );
//   }

//   /**
//    * 卸载
//    */
//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   /**
//    * 使用 this.setState() 来来周期性地更新组件本地状态
//    */
//   tick() {
//     this.setState({
//       date: new Date()
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello, World!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }

// class Repeat extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     let items = [];
//     for (let i = 0; i < this.props.numTimes; i++) {
//       items.push(this.props.children(i));
//     }
//     return (
//       <div>{items}</div>
//     );
//   }
// }

// class ListOfTenThings extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <Repeat numTimes={10}>
//         {(index) => <div key={index}>This is item {index} in the list.</div>}
//       </Repeat>
//     )
//   }
// }

// class Greeting extends React.Component {
//   static defaultProps = {
//     name: 'Stranger'
//   }

//   render() {
//     return (
//       <h1>Hello, {this.props.name}.</h1>
//     );
//   }
// }

// Greeting.propTypes = {
//   name: PropTypes.string
// };

// class CustomTextInput extends React.Component {
//   constructor(props) {
//     super(props);
//     this.focus = this.focus.bind(this);
//   }

//   focus() {
//     // 通过使用原生API，显示地聚焦text输入框
//     this.textInput.focus();
//   }

//   render() {
//     // 在实例中通过使用`ref`回调函数来存储text输入框的DOM元素引用(例如:this.textInput)
//     return (
//       <div>
//         <input type="text" ref={(input) => { this.textInput = input; }} />
//         <input type="button" value="Focus this text input" onClick={this.focus} />
//       </div>
//     );
//   }
// }

// class AutoFocusTextInput extends React.Component {
//   componentDidMount() {
//     this.textInput.focus();
//   }

//   render() {
//     return (
//       <CustomTextInput ref={(input) => { this.textInput = input; }} />
//     );
//   }
// }

// function CustomTextInput(props) {
//   return (
//     <div>
//       <input ref={props.inputRef} />
//     </div>
//   );
// }

// class Parent extends Component {
//   render() {
//     return (
//       <CustomTextInput inputRef={el => this.inputElement = el} />
//     );
//   }
// }

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
registerServiceWorker();
