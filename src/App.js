import React, { Component } from 'react';
import { Link } from 'react-router';
import './App.css';
import data from './data';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data,
    };
  }
  render() {
    //клонируем дочерние компоненты, которые возвращают свойства из state
    const childrenWithProps = React.Children.map(this.props.children, child =>
      React.cloneElement(child, {
        albums: this.state.data,
      })
    );
    return (
      <div>
        <div className="page-wrap">
          <div className="header">
            <h1>
              <Link to="/">React Photo Album</Link>
            </h1>
          </div>
          {childrenWithProps}
        </div>
      </div>
    );
  }
}

export default App;
