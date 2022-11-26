import React from 'react';
import styles from './Header.module.css';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1 className={ styles.h1 }>Sistema Solar</h1>
      </header>
    );
  }
}

export default Header;
