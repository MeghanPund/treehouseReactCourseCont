import React from 'react';
import Stats from './Stats';
import Stopwatch from './Stopwatch';

const Header = ({ players, title }) => {
    return (
      <header>
      <Stopwatch />
      <Stats players={players} />
        <h1>{ title }</h1>
      </header>
    );
}

export default Header;