import React, { Component } from "react";

class Counter extends Component {
  // state that has the data that needs to the components
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200"
  };

  styles = {
    fontSize: 10,
    fontWeight: "bold"
  };

//   constructor(){
//       super();
//       this.handleIncrement = this.handleIncrement.bind(this);
//   }

  handleIncrement = () => {
    console.log("increment clicked", this);
  }

  render() {
    // let classes = this.getBadgeClasses();
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    const x = "zero";
    return count === 0 ? x : count;
  }
}

export default Counter;
