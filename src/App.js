//jshint ignore:start
import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Counters from "./components/Counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
    // console.log('increment', counters[index]);
  };

  handleDelete = (id) => {
    const counters = [...this.state.counters];
    const result = counters.filter((counter) => counter.id !== id);
    this.setState({ counters: result });
  };

handleReset = () => {
  const counters = this.state.counters.map( c => {
    c.value = 0;
    return c;
  })

  this.setState({ counters });
}

  render() {
    return (
      <div className="App">
        <Navbar totalCount={this.state.counters.filter(c => c.value > 0).length} />
        <button className="btn btn-secondary m-2" onClick={this.handleReset}>Reset</button>
        <Counters
          counters={this.state.counters}
          onDelete={this.handleDelete}
          onIncrement={this.handleIncrement}
        />
      </div>
    );
  }
}

export default App;
