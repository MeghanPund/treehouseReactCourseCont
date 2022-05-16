import React from 'react';
import Stats from './Stats';
import Stopwatch from './Stopwatch';

const Header = (props) => {
    return (
      <header>
      <Stopwatch />
      <Stats players={props.players} />
        <h1>{ props.title }</h1>
      </header>
    );
}

export default Header;