import React from 'react';
import PropTypes from 'prop-types';
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

Header.propTypes = {
  title: PropTypes.string,
  players: PropTypes.arrayOf(PropTypes.object)
};

Header.defaultProps = {
  title: 'Scoreboard'
};

export default Header;