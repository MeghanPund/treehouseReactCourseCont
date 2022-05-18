import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';
import Header from './Header';
  
class Player extends PureComponent {
  
  static propTypes = {
    changeScore: PropTypes.func,
    removePlayer: PropTypes.func,
    name: PropTypes.string.isRequired,
    score: PropTypes.number,
    id: PropTypes.number,
    index: PropTypes.number
  };
  
  render () {
    const {
      name,
      id,
      score,
      index,
      removePlayer,
      changeScore
    } = this.props;

    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
          { name }
        </span>
  
        <Counter 
          score={score}
          changeScore={changeScore}
          index={index}        
        />
      </div>
    );
  }
}

export default Player;