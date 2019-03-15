import React, {Component} from 'react';
export class Header extends Component {

  render() {
    const header = ['Home', 'About', 'Our Philosophy', 'Contact'];
    const headerLinks = header.map(page => {
      return (
        <a className="headerLinks" key={page} href={'/' + page}>{page}</a>)
    })
    return <div className="Header">
      <nav>{headerLinks}</nav>
    </div>;
  }
};
