import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>
            Wykonał: Bartłomiej Górka - Programowanie Frontend {new Date().getFullYear()} 
          </p>
        </aside>
      </footer>
    );
  }
}
