import React, { Component } from 'react';
import Messages from './messages';


export default class App extends Component {
  render() {
    return (
      <div>
        <header className="page-header">
            <h1>Edit User Presets</h1>
        </header>
        <main>
          {this.props.children}
        </main>
        <Messages/>
        <footer>

        </footer>
      </div>
    );
  }
}